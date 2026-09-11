import { Show } from "solid-js";
import Reveal from "./Reveal";

/**
 * Every band opens with one of these: a small label, a statement, and the
 * sentence that qualifies it. Keeping them identical is what makes the page
 * read as one document rather than a pile of sections.
 */
export default function SectionHeader(props: {
  label?: string;
  title: string;
  description?: string;
  /** Centred for bands whose content is centred too. */
  center?: boolean;
}) {
  return (
    <Reveal>
      <div class="hz-sechead" classList={{ "hz-sechead-center": props.center }}>
        <Show when={props.label}>
          <span class="hz-label">{props.label}</span>
        </Show>
        <h2 class="hz-h2">{props.title}</h2>
        <Show when={props.description}>
          <p class="hz-lead">{props.description}</p>
        </Show>
      </div>
    </Reveal>
  );
}
