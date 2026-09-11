import { For } from "solid-js";
import { PixelArrowRight } from "../icons/pixel";
import { AppScreenIllustration } from "../illustrations/edu";
import { anchors, mailto } from "~/config";
import { t } from "~/i18n";

/**
 * The first screen: a sentence, what it means, two actions, and a drawing of
 * the thing itself on a framed card. The roles the platform serves close the
 * hero on a ruled row, so the page visibly continues below without anything
 * having to move.
 */
export default function Hero() {
  return (
    <section class="hz-hero">
      <div class="hz-hero-copy">
        <h1 class="hz-display">
          {t.hero.line1}
          <br />
          {t.hero.line2}
        </h1>
        <p class="hz-lead">{t.hero.lead}</p>
        <div class="hz-hero-actions">
          <a href={mailto(t.cta.subject)} class="hz-btn hz-btn-primary hz-btn-lg">
            {t.hero.primary}
          </a>
          <a href={anchors.products} class="hz-btn hz-btn-ghost hz-btn-lg">
            {t.hero.secondary}
            <PixelArrowRight aria-hidden="true" />
          </a>
        </div>
        <p class="hz-hero-note">{t.hero.note}</p>
      </div>

      {/* The product as one screen, on a card that reads as a frame without
          pretending to be a screenshot. */}
      <div class="hz-art-card">
        <AppScreenIllustration class="hz-illustration" />
      </div>

      <div class="hz-roles">
        <For each={t.hero.roles}>
          {role => (
            <span>
              <i aria-hidden="true" />
              {role}
            </span>
          )}
        </For>
      </div>
    </section>
  );
}
