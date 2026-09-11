import { A, useLocation } from "@solidjs/router";
import { createSignal, For, onCleanup, onMount, Show } from "solid-js";
import Logo from "./Logo";
import { PixelClose, PixelMenu } from "./icons/pixel";
import { anchors, routes, site } from "~/config";
import { t } from "~/i18n";

/**
 * The site is one page, so the bar is a table of contents rather than a set of
 * routes: every label is an in-page anchor, and the band currently under the
 * header is the one marked as current.
 */
export default function Header() {
  const location = useLocation();
  const [open, setOpen] = createSignal(false);
  const [active, setActive] = createSignal<string | null>(null);

  /**
   * The bar carries four stops; the sheet carries every one. "Nasıl çalışır"
   * is the diagram page rather than the band of the same name — the band is a
   * summary, and anyone who clicks the label wants the long version.
   */
  const primary = [
    { href: anchors.products, label: t.nav.products },
    { href: routes.how, label: t.nav.theory },
    { href: anchors.audience, label: t.nav.audience },
    { href: anchors.about, label: t.nav.about },
  ];

  const all = [
    { href: anchors.problem, label: t.nav.problem },
    ...primary,
    { href: anchors.platform, label: t.nav.platform },
    { href: anchors.roles, label: t.nav.roles },
    { href: anchors.trust, label: t.nav.trust },
    { href: anchors.faq, label: t.nav.faq },
    { href: routes.contact, label: t.nav.contact },
  ];

  /** Anchors carry a fragment; the two standing pages do not. */
  const id = (href: string) => href.split("#")[1] ?? "";
  const isCurrent = (href: string) =>
    href.includes("#") ? active() === id(href) : location.pathname === href;

  /**
   * Which band is current. The observer's top margin is the header's own
   * height, so a section counts as "under the bar" rather than merely on
   * screen, and the bottom margin keeps a band that is only just visible from
   * taking the mark from the one filling the viewport.
   */
  onMount(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = all
      .filter(item => item.href.includes("#"))
      .map(item => document.getElementById(id(item.href)))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0]!.target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach(section => observer.observe(section));
    onCleanup(() => observer.disconnect());
  });

  return (
    <header class="hz-header">
      <div class="hz-header-inner">
        <Logo />

        <nav class="hz-nav" aria-label={t.nav.menu}>
          <For each={primary}>
            {item => (
              <a
                href={item.href}
                class={isCurrent(item.href) ? "is-current" : undefined}
                aria-current={isCurrent(item.href) ? "true" : undefined}
              >
                {item.label}
              </a>
            )}
          </For>
        </nav>

        <div class="hz-header-actions">
          <A href={routes.contact} class="hz-btn hz-btn-primary">
            {t.nav.demo}
          </A>
          <button
            type="button"
            class="hz-menu-btn"
            aria-expanded={open()}
            aria-controls="site-menu"
            aria-label={open() ? t.nav.close : t.nav.menu}
            onClick={() => setOpen(!open())}
          >
            <Show when={open()} fallback={<PixelMenu class="size-5" />}>
              <PixelClose class="size-5" />
            </Show>
          </button>
        </div>
      </div>

      <Show when={open()}>
        <div id="site-menu" class="hz-sheet">
          <For each={all}>
            {item => (
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            )}
          </For>
          <A href={routes.contact} onClick={() => setOpen(false)} class="hz-btn hz-btn-primary">
            {t.nav.demo}
          </A>
          <p class="hz-small mt-3 px-3">{site.email}</p>
        </div>
      </Show>
    </header>
  );
}
