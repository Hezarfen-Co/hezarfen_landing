import { For } from "solid-js";
import { FiArrowUpRight, FiLinkedin } from "solid-icons/fi";
import Logo from "./Logo";
import { anchors, mailto, site } from "~/config";
import { t } from "~/i18n";

export default function Footer() {
  // Icons keyed by the `site.social` account names, so the row below iterates
  // the config itself: an account added in `config.ts` fails the typecheck
  // until it gains an icon here, and a removed one vanishes from the footer
  // and from the JsonLd `sameAs` together — the list is never half-updated.
  const socialMeta = {
    linkedin: { label: "LinkedIn", icon: FiLinkedin },
  } as const;

  const columns = [
    {
      title: t.footer.sections.product,
      links: [
        { label: t.nav.products, href: anchors.products },
        { label: t.nav.platform, href: anchors.platform },
        { label: t.nav.theory, href: anchors.theory },
        { label: t.nav.roles, href: anchors.roles },
      ],
    },
    {
      title: t.footer.sections.company,
      links: [
        { label: t.nav.problem, href: anchors.problem },
        { label: t.nav.trust, href: anchors.trust },
        { label: t.nav.audience, href: anchors.audience },
        { label: t.nav.about, href: anchors.about },
        { label: t.nav.faq, href: anchors.faq },
      ],
    },
  ];

  const socials = (Object.keys(site.social) as (keyof typeof site.social)[]).map(key => ({
    label: socialMeta[key].label,
    href: site.social[key],
    icon: socialMeta[key].icon,
  }));

  return (
    <footer class="hz-footer">
      <div class="hz-footer-inner">
        <div class="hz-footer-cols">
          <div>
            <Logo />
            <p class="hz-small mt-4 max-w-[36ch]">{t.footer.tagline}</p>
            <p class="hz-small mt-4">
              {site.city} ·{" "}
              <a
                href={site.builder.url}
                rel="noopener noreferrer"
                target="_blank"
                class="underline decoration-[var(--line-strong)] underline-offset-2 hover:text-[var(--brand-ink)]"
              >
                {t.footer.builtBy}
              </a>
            </p>
          </div>

          <For each={columns}>
            {column => (
              <div>
                <h4>{column.title}</h4>
                <ul>
                  <For each={column.links}>
                    {link => (
                      <li>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>

          {/* The address is the one thing anyone comes down here for, so it is
              set larger than the links beside it. */}
          <div>
            <h4>{t.footer.sections.contact}</h4>
            <a
              href={mailto(t.cta.subject)}
              class="group mt-4 inline-flex items-baseline gap-1 font-medium text-[var(--ink)] hover:text-[var(--brand-ink)]"
            >
              {site.email}
              <FiArrowUpRight class="size-4 shrink-0 self-center transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div class="hz-footer-legal">
          <span>
            © {new Date().getFullYear()} {site.legalName}. {t.footer.rights}
          </span>
          <div class="flex items-center gap-3">
            <span>{site.domain}</span>
            <For each={socials}>
              {social => (
                <a
                  href={social.href}
                  aria-label={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  class="hz-social"
                >
                  <social.icon class="size-4" />
                </a>
              )}
            </For>
          </div>
        </div>
      </div>
    </footer>
  );
}
