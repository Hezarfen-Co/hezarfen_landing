import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { routes, site } from "~/config";

/**
 * The brand mark: a wing drawn in pixels, climbing to the right — Hezarfen
 * Ahmed Çelebi's flight, and the shape a student's data takes once it becomes
 * a plan. The leading edge is the accent; the trailing feathers are the ink
 * of whatever surface the mark sits on, at low alpha.
 *
 * Below ~24px the trailing cells close up into a smudge, so those sizes drop
 * to the reduced cut the favicon uses: leading edge only.
 */
export function LogoMark(props: { size?: number; class?: string }) {
  const size = () => props.size ?? 26;
  const compact = () => size() < 24;

  return (
    <svg
      width={size()}
      height={size()}
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden="true"
      shape-rendering="crispEdges"
      class={props.class}
    >
      <g fill="var(--brand, #00add8)">
        <rect x="30" y="166" width="44" height="44" rx="6" />
        <rect x="86" y="122" width="44" height="44" rx="6" />
        <rect x="142" y="78" width="44" height="44" rx="6" />
        <rect x="198" y="34" width="44" height="44" rx="6" />
      </g>

      <Show when={!compact()}>
        <g fill="currentColor" opacity="0.22">
          <rect x="86" y="178" width="44" height="32" rx="6" />
          <rect x="142" y="134" width="44" height="32" rx="6" />
          <rect x="142" y="178" width="44" height="32" rx="6" />
          <rect x="198" y="90" width="44" height="32" rx="6" />
          <rect x="198" y="134" width="44" height="32" rx="6" />
        </g>
      </Show>
    </svg>
  );
}

export default function Logo(props: { size?: number }) {
  return (
    <A href={routes.home} aria-label={site.name} class="hz-logo">
      <LogoMark size={props.size} />
      <span>Hezarfen</span>
    </A>
  );
}
