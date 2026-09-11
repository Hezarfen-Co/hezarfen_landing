import { action } from "@solidjs/router";

/**
 * The demo request, server side.
 *
 * Delivery is a webhook rather than an SMTP client: the only thing this site
 * has to do is get the request in front of a human, and a single URL in the
 * environment (Slack, Discord, Make, Resend's own endpoint — anything that
 * takes a JSON POST) does that without shipping mail credentials in the
 * build. `CONTACT_WEBHOOK_URL` is that URL.
 *
 * With no webhook configured the submission is logged and still reported as
 * received, because the form also states the address underneath it: the
 * request is never silently dropped without the visitor being told where
 * else to write.
 */

export type ContactResult = { ok: true } | { ok: false; field?: string; code: string };

const text = (form: FormData, key: string) => String(form.get(key) ?? "").trim();

/** Deliberately loose: a regex cannot validate an address, only reject typos. */
const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

export const submitContact = action(async (form: FormData): Promise<ContactResult> => {
  "use server";

  const name = text(form, "name");
  const institution = text(form, "institution");
  const email = text(form, "email");
  const consent = form.get("consent") !== null;

  if (name.length < 2) return { ok: false, field: "name", code: "name" };
  if (institution.length < 2) return { ok: false, field: "institution", code: "institution" };
  if (!looksLikeEmail(email)) return { ok: false, field: "email", code: "email" };
  if (!consent) return { ok: false, field: "consent", code: "consent" };

  const payload = {
    name,
    institution,
    role: text(form, "role"),
    email,
    phone: text(form, "phone"),
    students: text(form, "students"),
    // Checkbox groups arrive as repeated keys; `getAll` is the only way to
    // read every box that was ticked rather than the last one.
    interest: form.getAll("interest").map(String),
    message: text(form, "message"),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    console.info("[contact] no CONTACT_WEBHOOK_URL set, logging instead:", payload);
    return { ok: true };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`webhook responded ${response.status}`);
  } catch (error) {
    // The visitor is told to write directly; the reason is kept server side.
    console.error("[contact] delivery failed:", error);
    return { ok: false, code: "unknown" };
  }

  return { ok: true };
}, "contact");
