import { A } from "@solidjs/router";
import { For } from "solid-js";
import { PixelArrowRight } from "../icons/pixel";
import ProductShot from "../ProductShot";
import { routes } from "~/config";
import { t } from "~/i18n";

/**
 * The first screen: a sentence, what it means, two actions, and the product
 * itself — the manager's dashboard — on a framed card. The roles the platform serves close the
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
        {/* The demo goes to the form, and "how does it work" to the diagram:
            both are pages, because both are longer than a band. */}
        <div class="hz-hero-actions">
          <A href={routes.contact} class="hz-btn hz-btn-primary hz-btn-lg">
            {t.hero.primary}
          </A>
          <A href={routes.how} class="hz-btn hz-btn-ghost hz-btn-lg">
            {t.hero.secondary}
            <PixelArrowRight aria-hidden="true" />
          </A>
        </div>
        <p class="hz-hero-note">{t.hero.note}</p>
      </div>

      {/* The product as one screen: the first thing a müdür opens. */}
      <div class="hz-art-card">
        <ProductShot name="dashboard" priority />
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
