import { A } from "@solidjs/router";
import { For } from "solid-js";
import Seo from "~/components/Seo";
import ContactForm from "~/components/ContactForm";
import { PixelArrowRight } from "~/components/icons/pixel";
import { mailto, routes, site } from "~/config";
import { t } from "~/i18n";
import { contactPageNode } from "~/lib/schema";

/**
 * The page the demo button opens. The form is the page: everything beside it
 * is what a visitor needs in order to trust sending it — what happens next,
 * where the request goes, and what is done with the data.
 */
export default function Contact() {
  const url = () => `${site.url}${routes.contact}`;

  return (
    <>
      <Seo
        title={t.contact.metaTitle}
        description={t.contact.metaDescription}
        full
        breadcrumb={t.nav.contact}
        schema={[contactPageNode(t, url())]}
      />

      <section class="hz-pagehead">
        <div class="hz-wrap">
          <span class="hz-label">{t.contact.label}</span>
          <h1 class="hz-display">{t.contact.title}</h1>
          <p class="hz-lead">{t.contact.lead}</p>
        </div>
      </section>

      <section class="hz-band hz-band-alt">
        <div class="hz-wrap hz-contact-split">
          <ContactForm />

          <aside class="hz-contact-aside">
            <div>
              <h2 class="hz-h3">{t.contact.next.title}</h2>
              <ol class="hz-ministeps">
                <For each={t.contact.next.steps}>
                  {step => (
                    <li>
                      <span class="hz-step-num">{step.num}</span>
                      <strong>{step.title}</strong>
                      <p class="hz-small">{step.description}</p>
                    </li>
                  )}
                </For>
              </ol>
            </div>

            <div class="hz-contact-direct">
              <h2 class="hz-h3">{t.contact.direct.title}</h2>
              <p class="hz-small">{t.contact.direct.description}</p>
              <a class="hz-contact-mail" href={mailto(t.cta.subject)}>
                {site.email}
              </a>
              <p class="hz-small">
                {t.contact.direct.cityLabel}: {site.city}
              </p>
            </div>

            <A href={routes.how} class="hz-btn hz-btn-quiet">
              {t.nav.theory}
              <PixelArrowRight aria-hidden="true" />
            </A>
          </aside>
        </div>
      </section>
    </>
  );
}
