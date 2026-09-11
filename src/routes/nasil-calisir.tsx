import { A } from "@solidjs/router";
import { For } from "solid-js";
import Seo from "~/components/Seo";
import Pipeline from "~/components/how/Pipeline";
import Reveal from "~/components/Reveal";
import SectionHeader from "~/components/SectionHeader";
import {
  PixelArrowRight,
  PixelBookOpen,
  PixelCheck,
  PixelClock,
  PixelFileText,
  PixelLayout,
  PixelLock,
  PixelServer,
} from "~/components/icons/pixel";
import { anchors, routes, site } from "~/config";
import { t } from "~/i18n";
import { howToNode } from "~/lib/schema";

/**
 * The diagram behind the landing page's second button: the whole chain, drawn
 * and annotated, plus the three rules that make it work, the four gates that
 * stop it, where each product sits in it, and what a pilot measures.
 */
export default function How() {
  const url = () => `${site.url}${routes.how}`;

  const contractIcons: Record<string, typeof PixelFileText> = {
    etiket: PixelFileText,
    madde: PixelLayout,
    zaman: PixelClock,
  };

  const gateIcons: Record<string, typeof PixelCheck> = {
    onay: PixelCheck,
    yetki: PixelLock,
    kaynak: PixelBookOpen,
    kalite: PixelServer,
  };

  return (
    <>
      <Seo
        title={t.how.metaTitle}
        description={t.how.metaDescription}
        full
        breadcrumb={t.nav.theory}
        schema={[howToNode(t, url())]}
      />

      <section class="hz-pagehead">
        <div class="hz-wrap">
          <span class="hz-label">{t.how.label}</span>
          <h1 class="hz-display">{t.how.title}</h1>
          <p class="hz-lead">{t.how.lead}</p>
          <div class="hz-hero-actions hz-pagehead-actions">
            <A href={routes.contact} class="hz-btn hz-btn-primary">
              {t.how.ctaPrimary}
            </A>
            <A href={anchors.products} class="hz-btn hz-btn-ghost">
              {t.how.ctaSecondary}
              <PixelArrowRight aria-hidden="true" />
            </A>
          </div>
        </div>
      </section>

      <section class="hz-band">
        <div class="hz-wrap">
          <Pipeline />
        </div>
      </section>

      <section class="hz-band hz-band-alt">
        <div class="hz-wrap">
          <SectionHeader
            label={t.how.contract.label}
            title={t.how.contract.title}
            description={t.how.contract.description}
          />
          <div class="hz-grid hz-grid-3">
            <For each={t.how.contract.items}>
              {(item, i) => {
                const Icon = contractIcons[item.id] ?? PixelFileText;
                return (
                  <Reveal index={i()}>
                    <article class="hz-card">
                      <span class="hz-card-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  </Reveal>
                );
              }}
            </For>
          </div>
        </div>
      </section>

      <section class="hz-band">
        <div class="hz-wrap">
          <SectionHeader
            label={t.how.gates.label}
            title={t.how.gates.title}
            description={t.how.gates.description}
          />
          <div class="hz-grid">
            <For each={t.how.gates.items}>
              {(item, i) => {
                const Icon = gateIcons[item.id] ?? PixelCheck;
                return (
                  <Reveal index={i()}>
                    <article class="hz-card">
                      <span class="hz-card-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  </Reveal>
                );
              }}
            </For>
          </div>
        </div>
      </section>

      <section class="hz-band hz-band-alt">
        <div class="hz-wrap">
          <SectionHeader
            label={t.how.map.label}
            title={t.how.map.title}
            description={t.how.map.description}
          />
          <div class="hz-rows">
            <For each={t.how.map.items}>
              {(item, i) => (
                <Reveal index={i()}>
                  <div class="hz-row">
                    <span class="hz-step-num">{item.stage}</span>
                    <h3 class="hz-h3">{item.name}</h3>
                    <p class="hz-small">{item.description}</p>
                  </div>
                </Reveal>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="hz-band">
        <div class="hz-wrap">
          <SectionHeader
            label={t.how.measures.label}
            title={t.how.measures.title}
            description={t.how.measures.description}
          />
          <Reveal>
            <ul class="hz-checks hz-checks-2">
              <For each={t.how.measures.items}>
                {item => (
                  <li>
                    <PixelCheck aria-hidden="true" />
                    {item}
                  </li>
                )}
              </For>
            </ul>
          </Reveal>

          <Reveal class="mt-12">
            <div class="hz-cta">
              <h2 class="hz-h2">{t.cta.panelTitle}</h2>
              <div class="hz-hero-actions">
                <A href={routes.contact} class="hz-btn hz-btn-primary hz-btn-lg">
                  {t.how.ctaPrimary}
                </A>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
