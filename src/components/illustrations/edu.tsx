import { For } from "solid-js";

/**
 * Education illustrations, drawn on a pixel grid.
 *
 * Every shape is an axis-aligned rectangle on a 4-unit grid with
 * `shape-rendering: crispEdges`, so the drawings match the pixel icons rather
 * than sitting beside them as a second, smoother style. Structure takes
 * `currentColor`; only what the drawing is *about* takes the brand, so a
 * panel never turns into a block of colour.
 *
 * They stand in where the product has no screen to show: a classroom, a
 * weekly plan, a recorded lesson, a missing page. Where a real screen exists the page uses a
 * screenshot instead (`ProductShot`), so none of these pretends to be the
 * product's interface.
 */
type Props = { class?: string };

const brand = "var(--dz-brand, #00add8)";
const brandDeep = "var(--dz-brand-deep, #5dc9e2)";

/** A 4-sided pixel border, drawn as four bars so the corners stay square. */
function Frame(props: { x: number; y: number; w: number; h: number; t?: number; fill?: string }) {
  const t = props.t ?? 4;
  return (
    <g fill={props.fill ?? "currentColor"}>
      <rect x={props.x} y={props.y} width={props.w} height={t} />
      <rect x={props.x} y={props.y + props.h - t} width={props.w} height={t} />
      <rect x={props.x} y={props.y} width={t} height={props.h} />
      <rect x={props.x + props.w - t} y={props.y} width={t} height={props.h} />
    </g>
  );
}

/**
 * A board with the class's progress on it, a desk, a book stack and a piece of
 * chalk. The bars are the one thing in brand — the data is the subject of the
 * whole page.
 */
export function ClassroomIllustration(props: Props) {
  const bars = [
    { x: 52, h: 24, fill: brandDeep },
    { x: 80, h: 40, fill: brandDeep },
    { x: 108, h: 56, fill: brand },
    { x: 136, h: 76, fill: brand },
  ];

  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      role="img"
      aria-label="Tahtada yükselen kazanım grafiği"
      shape-rendering="crispEdges"
      class={props.class}
    >
      {/* Board */}
      <Frame x={24} y={16} w={196} h={124} />
      {/* Chalk baseline and the bars standing on it */}
      <rect x={40} y={124} width={164} height={4} fill="currentColor" opacity="0.5" />
      <For each={bars}>
        {bar => <rect x={bar.x} y={124 - bar.h} width={20} height={bar.h} fill={bar.fill} />}
      </For>
      {/* Written lines, top left: the lesson the bars came from */}
      <g fill="currentColor" opacity="0.45">
        <rect x={40} y={32} width={56} height={4} />
        <rect x={40} y={44} width={36} height={4} />
      </g>
      {/* Desk */}
      <g fill="currentColor">
        <rect x={12} y={152} width={236} height={6} />
        <rect x={36} y={158} width={6} height={26} />
        <rect x={218} y={158} width={6} height={26} />
      </g>
      {/* Book stack on the desk */}
      <g>
        <rect x={60} y={140} width={48} height={6} fill={brand} />
        <rect x={64} y={146} width={40} height={6} fill="currentColor" opacity="0.55" />
      </g>
      {/* Chalk */}
      <rect x={168} y={142} width={26} height={6} fill="currentColor" opacity="0.75" />
    </svg>
  );
}

/**
 * Hezarfen Zekâ: a week of study, laid out as a grid and filled in by what
 * the data says. The arrow is the plan updating itself when new data lands.
 */
export function StudyPlanIllustration(props: Props) {
  const cells = [
    [1, 0, 2, 0, 1],
    [0, 2, 0, 1, 0],
    [2, 0, 1, 0, 2],
  ];

  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      role="img"
      aria-label="Haftalık kişisel çalışma programı"
      shape-rendering="crispEdges"
      class={props.class}
    >
      <Frame x={20} y={20} w={220} h={160} />
      {/* Day headers */}
      <For each={[0, 1, 2, 3, 4]}>
        {day => <rect x={40 + day * 38} y={36} width={22} height={5} fill="currentColor" opacity="0.45" />}
      </For>
      {/* Plan cells: filled where there is work to do */}
      <For each={cells}>
        {(row, r) => (
          <For each={row}>
            {(cell, c) => (
              <rect
                x={40 + c() * 38}
                y={56 + r() * 36}
                width={26}
                height={22}
                fill={cell === 2 ? brand : cell === 1 ? brandDeep : "currentColor"}
                opacity={cell === 0 ? 0.18 : 1}
              />
            )}
          </For>
        )}
      </For>
      {/* The plan climbing as new data arrives */}
      <g fill={brand}>
        <rect x={40} y={166} width={14} height={4} />
        <rect x={54} y={160} width={14} height={4} />
        <rect x={68} y={154} width={14} height={4} />
        <rect x={82} y={148} width={14} height={4} />
        <rect x={96} y={142} width={14} height={4} />
        <rect x={104} y={134} width={6} height={8} />
        <rect x={110} y={138} width={6} height={6} />
      </g>
    </svg>
  );
}

/**
 * Ses Atölyesi: a lesson page turning into sound, with the pause the content
 * stops at to ask a question.
 */
export function AudioLessonIllustration(props: Props) {
  const wave = [16, 28, 44, 24, 52, 36, 20, 40, 28, 16];

  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      role="img"
      aria-label="Ders PDF'inden hazırlanan sesli ders"
      shape-rendering="crispEdges"
      class={props.class}
    >
      {/* The source page */}
      <Frame x={20} y={28} w={84} h={116} />
      <g fill="currentColor" opacity="0.4">
        <rect x={34} y={48} width={48} height={5} />
        <rect x={34} y={62} width={56} height={5} />
        <rect x={34} y={76} width={40} height={5} />
        <rect x={34} y={90} width={52} height={5} />
      </g>
      <rect x={34} y={112} width={30} height={8} fill={brandDeep} />

      {/* Headphone arc, stepped rather than curved */}
      <g fill="currentColor">
        <rect x={148} y={36} width={56} height={6} />
        <rect x={140} y={42} width={8} height={8} />
        <rect x={204} y={42} width={8} height={8} />
        <rect x={136} y={50} width={12} height={28} />
        <rect x={204} y={50} width={12} height={28} />
      </g>

      {/* Waveform: the produced lesson */}
      <For each={wave}>
        {(height, i) => (
          <rect
            x={128 + i() * 12}
            y={120 - height / 2}
            width={6}
            height={height}
            fill={i() === 4 ? brand : brandDeep}
            opacity={i() === 4 ? 1 : 0.55}
          />
        )}
      </For>
      {/* The DUR-CEVAPLA pause sitting in the middle of the take */}
      <g fill={brand}>
        <rect x={172} y={136} width={6} height={16} />
        <rect x={182} y={136} width={6} height={16} />
      </g>
    </svg>
  );
}

/** 404: a page that is not where it was. */
export function MissingPageIllustration(props: Props) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      role="img"
      aria-label="Bulunamayan sayfa çizimi"
      shape-rendering="crispEdges"
      class={props.class}
    >
      <Frame x={28} y={20} w={104} h={120} />
      <g fill="currentColor" opacity="0.35">
        <rect x={44} y={44} width={56} height={6} />
        <rect x={44} y={60} width={40} height={6} />
      </g>
      <g fill={brand}>
        <rect x={60} y={84} width={24} height={8} />
        <rect x={76} y={92} width={8} height={12} />
        <rect x={68} y={104} width={16} height={8} />
        <rect x={68} y={120} width={16} height={8} />
      </g>
    </svg>
  );
}
