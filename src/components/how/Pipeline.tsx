import { For } from "solid-js";
import Reveal from "../Reveal";
import { PixelCheck } from "../icons/pixel";
import { t } from "~/i18n";

/**
 * The animated pipeline: four stages, connected, with the loop back to
 * analysis drawn underneath.
 *
 * The motion carries meaning rather than decoration — a dot travelling a
 * connector is a record moving between stages, and the little drawing inside
 * each stage animates the thing that stage does: marks landing, bars rising,
 * an approval tick, cells filling. Everything is CSS keyframes on `hz-flow-*`
 * classes, so `prefers-reduced-motion` switches the whole thing off in one
 * rule and the page still reads as a diagram.
 */
export default function Pipeline() {
  return (
    <div class="hz-flow" aria-label={t.how.flowLabel}>
      <For each={t.how.stages}>
        {(stage, i) => (
          <Reveal index={i()} class="hz-flow-item">
            <article class="hz-flow-card">
              <header>
                <span class="hz-step-num">{stage.num}</span>
                <h3 class="hz-h3">{stage.title}</h3>
                <p class="hz-flow-sub">{stage.subtitle}</p>
              </header>

              <div class="hz-flow-art" aria-hidden="true">
                <StageArt index={i()} />
              </div>

              <p class="hz-small">{stage.description}</p>

              <ul class="hz-checks">
                <For each={stage.bullets}>
                  {bullet => (
                    <li>
                      <PixelCheck aria-hidden="true" />
                      {bullet}
                    </li>
                  )}
                </For>
              </ul>
            </article>

            {/* The connector belongs to the stage on its left, so the last
                stage simply does not draw one. */}
            <span class="hz-flow-link" aria-hidden="true" classList={{ "is-last": i() === 3 }}>
              <i class="hz-flow-dot" />
              <i class="hz-flow-dot hz-flow-dot-b" />
            </span>
          </Reveal>
        )}
      </For>

      {/* The feedback loop: usage becomes data again. */}
      <div class="hz-flow-loop" aria-hidden="true">
        <span class="hz-flow-loop-line" />
        <span class="hz-flow-loop-label">{t.how.flowNote}</span>
      </div>
    </div>
  );
}

/** The small drawing inside a stage card: one per stage, in order. */
function StageArt(props: { index: number }) {
  const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <svg viewBox="0 0 220 120" fill="none" shape-rendering="crispEdges" class="hz-illustration">
      {/* 01 — collection: answers landing on the sheet, option by option */}
      {props.index === 0 && (
        <g>
          <rect x={16} y={12} width={188} height={96} stroke="currentColor" stroke-width="2" />
          <For each={[0, 1, 2, 3]}>
            {row => (
              <g>
                <rect x={30} y={28 + row * 20} width={44} height={8} fill="currentColor" opacity="0.22" />
                <For each={[0, 1, 2, 3]}>
                  {col => (
                    <rect
                      x={88 + col * 28}
                      y={26 + row * 20}
                      width={18}
                      height={12}
                      class={col === (row + 2) % 4 ? "hz-flow-mark" : undefined}
                      fill={col === (row + 2) % 4 ? "var(--brand)" : "currentColor"}
                      opacity={col === (row + 2) % 4 ? 1 : 0.14}
                      style={{ "animation-delay": `${row * 0.22}s` }}
                    />
                  )}
                </For>
              </g>
            )}
          </For>
        </g>
      )}

      {/* 02 — analysis: topic mastery rising out of that sheet */}
      {props.index === 1 && (
        <g>
          <rect x={16} y={100} width={188} height={2} fill="currentColor" opacity="0.4" />
          <For each={[34, 56, 44, 72, 60, 88]}>
            {(height, i) => (
              <rect
                x={24 + i() * 31}
                y={100 - height}
                width={20}
                height={height}
                class="hz-flow-bar"
                fill={i() >= 4 ? "var(--brand)" : "var(--brand-deep, #5dc9e2)"}
                opacity={i() >= 4 ? 1 : 0.55}
                style={{ "animation-delay": `${i() * 0.12}s` }}
              />
            )}
          </For>
        </g>
      )}

      {/* 03 — the plan, and the tick that lets it out */}
      {props.index === 2 && (
        <g>
          <rect x={16} y={12} width={132} height={96} stroke="currentColor" stroke-width="2" />
          <For each={[0, 1, 2, 3]}>
            {row => (
              <g>
                <rect x={30} y={26 + row * 20} width={60} height={9} fill="currentColor" opacity="0.18" />
                <rect
                  x={98}
                  y={26 + row * 20}
                  width={36}
                  height={9}
                  fill="var(--brand-deep, #5dc9e2)"
                  opacity="0.55"
                />
              </g>
            )}
          </For>
          <g class="hz-flow-stamp">
            <rect x={158} y={44} width={44} height={34} fill="var(--brand)" />
            <path
              d="M167 61 l6 7 l12 -14"
              stroke="#fff"
              stroke-width="4"
              fill="none"
              shape-rendering="geometricPrecision"
            />
          </g>
        </g>
      )}

      {/* 04 — four screens, each showing its own slice */}
      {props.index === 3 && (
        <g>
          <For each={grid}>
            {(_, i) => {
              const col = i() % 4;
              const row = Math.floor(i() / 4);
              // Only the lit cells animate: the keyframe ends on `opacity: 1`,
              // so running it on a recessive cell would darken it to solid.
              const lit = (col + row) % 3 === 0;
              return (
                <rect
                  x={20 + col * 48}
                  y={18 + row * 34}
                  width={40}
                  height={26}
                  class={lit ? "hz-flow-cell" : undefined}
                  fill={lit ? "var(--brand)" : "currentColor"}
                  opacity={lit ? 1 : 0.14}
                  style={lit ? { "animation-delay": `${i() * 0.06}s` } : undefined}
                />
              );
            }}
          </For>
        </g>
      )}
    </svg>
  );
}
