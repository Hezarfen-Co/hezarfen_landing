import { createSignal, onCleanup, onMount, type JSX } from "solid-js";

/**
 * Scroll-triggered entrance. `armed` is only ever set on the client, so the
 * server-rendered markup stays readable when the script never arrives, and
 * `shown` latches the first time the block enters the viewport. `--i`
 * staggers siblings sharing one grid.
 */
export default function Reveal(props: {
  index?: number;
  class?: string;
  children: JSX.Element;
}) {
  const [armed, setArmed] = createSignal(false);
  const [shown, setShown] = createSignal(false);
  let el!: HTMLDivElement;

  onMount(() => {
    if (!("IntersectionObserver" in window)) return;
    setArmed(true);
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div
      ref={el}
      class={`hz-reveal ${props.class ?? ""}`}
      classList={{ "is-armed": armed(), "is-in": shown() }}
      style={{ "--i": String(props.index ?? 0) }}
    >
      {props.children}
    </div>
  );
}
