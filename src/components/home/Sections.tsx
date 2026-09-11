import { For } from "solid-js";
import {
  PixelArrowRight,
  PixelBookOpen,
  PixelCalendar,
  PixelCheck,
  PixelCircleInfo,
  PixelClock,
  PixelFileText,
  PixelGlobe,
  PixelLayout,
  PixelLock,
  PixelMail,
  PixelMonitor,
  PixelNotebook,
  PixelServer,
  PixelShield,
  PixelShoppingCart,
  PixelSmartphone,
  PixelStore,
  PixelUser,
  PixelUserPlus,
  PixelUsers,
} from "../icons/pixel";
import {
  AnswerSheetIllustration,
  AudioLessonIllustration,
  GuidedScreenIllustration,
  StudyPlanIllustration,
} from "../illustrations/edu";
import { A } from "@solidjs/router";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { mailto, routes, site } from "~/config";
import { t } from "~/i18n";

/** The four things that go wrong today, as four cards. */
export function Problem() {
  const icons = [PixelLayout, PixelUsers, PixelClock, PixelShield];

  return (
    <section class="hz-band hz-anchor" id="neden">
      <div class="hz-wrap">
        <SectionHeader
          label={t.problem.label}
          title={t.problem.title}
          description={t.problem.description}
        />
        <div class="hz-grid">
          <For each={t.problem.items}>
            {(item, i) => {
              const Icon = icons[i() % icons.length]!;
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
  );
}

/** One feature row per product: copy beside a drawing of what it does. */
export function Products() {
  const art = [
    AnswerSheetIllustration,
    StudyPlanIllustration,
    GuidedScreenIllustration,
    AudioLessonIllustration,
  ];

  return (
    <section class="hz-band hz-band-alt hz-anchor" id="urunler">
      <div class="hz-wrap">
        <SectionHeader
          label={t.products.label}
          title={t.products.title}
          description={t.products.description}
          center
        />

        <div class="mt-10">
          <For each={t.products.items}>
            {(item, i) => {
              const Art = art[i() % art.length]!;
              return (
                <Reveal>
                  <div class="hz-feature" classList={{ "hz-feature-flip": i() % 2 === 1 }}>
                    <div class="hz-feature-copy">
                      <span class="hz-tag">{item.tag}</span>
                      <h3 class="hz-h2">{item.name}</h3>
                      <p>{item.description}</p>
                      <ul class="hz-checks">
                        <For each={item.rows}>
                          {row => (
                            <li>
                              <PixelCheck aria-hidden="true" />
                              {row}
                            </li>
                          )}
                        </For>
                      </ul>
                      <div class="hz-pills">
                        <For each={item.pills}>{pill => <span>{pill}</span>}</For>
                      </div>
                    </div>
                    <div class="hz-feature-art">
                      <Art class="hz-illustration" />
                    </div>
                  </div>
                </Reveal>
              );
            }}
          </For>
        </div>

        <Reveal>
          <p class="hz-note">
            <PixelCircleInfo aria-hidden="true" />
            {t.products.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** What is inside the platform, as a grid of small cards. */
export function Platform() {
  const icons: Record<string, typeof PixelLock> = {
    roller: PixelLock,
    dersler: PixelCalendar,
    sinav: PixelFileText,
    yoklama: PixelCheck,
    odev: PixelNotebook,
    iletisim: PixelMail,
    odeme: PixelShoppingCart,
    panolar: PixelMonitor,
  };

  return (
    <section class="hz-band hz-anchor" id="moduller">
      <div class="hz-wrap">
        <SectionHeader
          label={t.platform.label}
          title={t.platform.title}
          description={t.platform.description}
        />
        <div class="hz-grid">
          <For each={t.platform.items}>
            {(item, i) => {
              const Icon = icons[item.id] ?? PixelLayout;
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
  );
}

/** The chain from a marked exam to an approved plan, as four steps. */
export function Theory() {
  return (
    <section class="hz-band hz-band-alt hz-anchor" id="akis">
      <div class="hz-wrap">
        <SectionHeader
          label={t.theory.label}
          title={t.theory.title}
          description={t.theory.description}
          center
        />
        <div class="hz-steps">
          <For each={t.theory.steps}>
            {(step, i) => (
              <Reveal index={i()}>
                <div class="hz-step">
                  <span class="hz-step-num">{step.num}</span>
                  <h3 class="hz-h3">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            )}
          </For>
        </div>

        {/* The band is the summary; the diagram page is the long version. */}
        <Reveal class="mt-10 flex justify-center">
          <A href={routes.how} class="hz-btn hz-btn-ghost">
            {t.theory.more}
            <PixelArrowRight aria-hidden="true" />
          </A>
        </Reveal>
      </div>
    </section>
  );
}

/** One card per role: the same data, four screens. */
export function Roles() {
  const icons: Record<string, typeof PixelUser> = {
    yonetici: PixelLayout,
    ogretmen: PixelUserPlus,
    ogrenci: PixelUser,
    veli: PixelUsers,
  };

  return (
    <section class="hz-band hz-anchor" id="roller">
      <div class="hz-wrap">
        <SectionHeader
          label={t.roles.label}
          title={t.roles.title}
          description={t.roles.description}
        />
        <div class="hz-grid">
          <For each={t.roles.items}>
            {(item, i) => {
              const Icon = icons[item.id] ?? PixelUser;
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
  );
}

/** What keeps the system inside its bounds. */
export function Trust() {
  const icons: Record<string, typeof PixelShield> = {
    kanit: PixelFileText,
    kaynak: PixelBookOpen,
    onay: PixelCheck,
    yetki: PixelLock,
    kvkk: PixelShield,
    yerel: PixelServer,
  };

  return (
    <section class="hz-band hz-band-alt hz-anchor" id="guven">
      <div class="hz-wrap">
        <SectionHeader
          label={t.trust.label}
          title={t.trust.title}
          description={t.trust.description}
        />
        <div class="hz-grid hz-grid-3">
          <For each={t.trust.items}>
            {(item, i) => {
              const Icon = icons[item.id] ?? PixelShield;
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
  );
}

/** Who it is built for, in the order they come on board. */
export function Audience() {
  const icons: Record<string, typeof PixelStore> = {
    kurslar: PixelStore,
    okullar: PixelGlobe,
    ogrenciler: PixelSmartphone,
  };

  return (
    <section class="hz-band hz-anchor" id="kimler-icin">
      <div class="hz-wrap">
        <SectionHeader
          label={t.audience.label}
          title={t.audience.title}
          description={t.audience.description}
        />
        <div class="hz-grid hz-grid-3">
          <For each={t.audience.items}>
            {(item, i) => {
              const Icon = icons[item.id] ?? PixelStore;
              return (
                <Reveal index={i()}>
                  <article class="hz-card">
                    <span class="hz-card-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span class="hz-tag">{item.tag}</span>
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
  );
}

/**
 * What the product is, and who builds it. The page is about Hezarfen, so this
 * band stays about Hezarfen: the engineering credit is one card at the end,
 * not a team roster.
 */
export function About() {
  return (
    <section class="hz-band hz-band-alt hz-anchor" id="hakkimizda">
      <div class="hz-wrap">
        <SectionHeader
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <Reveal>
          <div class="hz-prose">
            <For each={t.about.paragraphs}>{paragraph => <p>{paragraph}</p>}</For>
          </div>
        </Reveal>

        <Reveal>
          <div class="hz-facts">
            <dl class="hz-figures">
              <For each={t.about.facts}>
                {fact => (
                  <div>
                    <dt>{fact.value}</dt>
                    <dd>{fact.label}</dd>
                  </div>
                )}
              </For>
            </dl>
            <div class="hz-builder">
              <h3 class="hz-h3">{t.about.builder.title}</h3>
              <p class="hz-small">{t.about.builder.description}</p>
              <a
                class="hz-btn hz-btn-quiet"
                href={site.builder.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {t.about.builder.linkLabel}
                <PixelArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * The questions a müdür asks before a demo. Native `<details>`: it opens with
 * no script, the page can be searched for an answer that is closed, and
 * assistive tech already knows the pattern.
 */
export function Faq() {
  return (
    <section class="hz-band hz-anchor" id="sss">
      <div class="hz-wrap">
        <div class="hz-narrow">
          <SectionHeader
            label={t.faq.label}
            title={t.faq.title}
            description={t.faq.description}
          />
          <div class="hz-faq">
            <For each={t.faq.items}>
              {item => (
                <details class="hz-faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <PixelArrowRight aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The ask: how a first conversation turns into a pilot, then the panel the
 * page closes on. Both live in one band so the four stops read as the
 * explanation of the button underneath them.
 */
export function Contact() {
  return (
    <section class="hz-band hz-band-alt hz-anchor" id="iletisim">
      <div class="hz-wrap">
        <SectionHeader
          label={t.cta.label}
          title={t.cta.title}
          description={t.cta.subtitle}
          center
        />

        <div class="hz-steps">
          <For each={t.cta.journey}>
            {(stop, i) => (
              <Reveal index={i()}>
                <div class="hz-step">
                  <span class="hz-step-num">0{stop.step}</span>
                  <h3 class="hz-h3">{stop.title}</h3>
                  <p>{stop.description}</p>
                </div>
              </Reveal>
            )}
          </For>
        </div>

        <Reveal class="mt-14">
          <div class="hz-cta">
            <h2 class="hz-h2">{t.cta.panelTitle}</h2>
            <div class="hz-hero-actions">
              <A class="hz-btn hz-btn-primary hz-btn-lg" href={routes.contact}>
                {t.nav.demo}
              </A>
              <a class="hz-btn hz-btn-ghost hz-btn-lg" href={mailto(t.cta.pilotSubject)}>
                {t.cta.secondary}
                <PixelArrowRight aria-hidden="true" />
              </a>
            </div>
            <a class="hz-cta-mail" href={mailto(t.cta.subject)}>
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
