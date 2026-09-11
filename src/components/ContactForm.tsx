import { useSubmission } from "@solidjs/router";
import { For, Show } from "solid-js";
import { PixelArrowRight, PixelCheck } from "./icons/pixel";
import { submitContact } from "~/lib/contact";
import { mailto, site } from "~/config";
import { t } from "~/i18n";

/**
 * The demo request form.
 *
 * It is a real `<form>` posting to a server action, so it works before the
 * client bundle arrives and keeps working if it never does. The submission
 * signal only adds what progressive enhancement cannot: a pending label and
 * the field-level error the server decided on.
 */
export default function ContactForm() {
  const submission = useSubmission(submitContact);

  const f = t.contact.fields;
  const errorCode = () => {
    const result = submission.result;
    return result && !result.ok ? result.code : null;
  };
  const errorFor = (field: string) => {
    const code = errorCode();
    if (!code) return null;
    const result = submission.result;
    if (result && !result.ok && result.field !== field) return null;
    return t.contact.errors[code as keyof typeof t.contact.errors] ?? t.contact.errors.unknown;
  };

  return (
    <div class="hz-form-card">
      <Show
        when={!submission.result?.ok}
        fallback={
          <div class="hz-form-done">
            <span class="hz-card-icon">
              <PixelCheck aria-hidden="true" />
            </span>
            <h2 class="hz-h3">{t.contact.successTitle}</h2>
            <p class="hz-small">{t.contact.successBody}</p>
            <a class="hz-btn hz-btn-ghost" href={mailto(t.cta.subject)}>
              {site.email}
            </a>
          </div>
        }
      >
        <form action={submitContact} method="post" class="hz-form">
          <h2 class="hz-h3">{t.contact.formTitle}</h2>

          <div class="hz-field-row">
            <label class="hz-field">
              <span>
                {f.name} <i>{f.required}</i>
              </span>
              <input name="name" required autocomplete="name" />
            </label>
            <label class="hz-field">
              <span>
                {f.institution} <i>{f.required}</i>
              </span>
              <input name="institution" required autocomplete="organization" />
            </label>
          </div>

          <div class="hz-field-row">
            <label class="hz-field">
              <span>{f.role}</span>
              <input name="role" placeholder={f.rolePlaceholder} autocomplete="organization-title" />
            </label>
            <label class="hz-field">
              <span>
                {f.email} <i>{f.required}</i>
              </span>
              <input name="email" type="email" required autocomplete="email" />
            </label>
          </div>

          <div class="hz-field-row">
            <label class="hz-field">
              <span>
                {f.phone} <i>{f.phoneHint}</i>
              </span>
              <input name="phone" type="tel" autocomplete="tel" />
            </label>
            <label class="hz-field">
              <span>{f.students}</span>
              <select name="students">
                <For each={f.studentsOptions}>{option => <option value={option}>{option}</option>}</For>
              </select>
            </label>
          </div>

          <fieldset class="hz-field">
            <legend>{f.interest}</legend>
            <div class="hz-choices">
              <For each={f.interestOptions}>
                {option => (
                  <label class="hz-choice">
                    <input type="checkbox" name="interest" value={option} />
                    <span>{option}</span>
                  </label>
                )}
              </For>
            </div>
          </fieldset>

          <label class="hz-field">
            <span>{f.message}</span>
            <textarea name="message" rows={4} placeholder={f.messagePlaceholder} />
          </label>

          <label class="hz-consent">
            <input type="checkbox" name="consent" value="1" required />
            <span>{f.consent}</span>
          </label>

          <Show when={errorCode()}>
            <p class="hz-form-error" role="alert">
              {errorFor("name") ??
                errorFor("institution") ??
                errorFor("email") ??
                errorFor("consent") ??
                t.contact.errors.unknown}
            </p>
          </Show>

          <button type="submit" class="hz-btn hz-btn-primary hz-btn-lg" disabled={submission.pending}>
            {submission.pending ? t.contact.submitting : t.contact.submit}
            <Show when={!submission.pending}>
              <PixelArrowRight aria-hidden="true" />
            </Show>
          </button>

          <p class="hz-form-note">{t.contact.kvkk}</p>
        </form>
      </Show>
    </div>
  );
}
