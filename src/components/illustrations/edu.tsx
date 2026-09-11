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
 * They are illustrations, not screenshots: a classroom, a marked answer
 * sheet, a weekly plan, a screen being pointed at, a recorded lesson. None of
 * them pretends to be the product's interface.
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
 * The hero's centrepiece: the platform as one screen — the class on the left
 * with its answers stored option by option, the topic chart and the week's
 * plan on the right. It is a drawing, not a screenshot: no real interface has
 * this few pixels, and a mock that pretends otherwise ages the moment the
 * product moves.
 */
export function AppScreenIllustration(props: Props) {
  const students = [0, 1, 2, 3, 4, 5];
  /** Which option each student marked: the data the rest of the page is about. */
  const marked = [2, 0, 3, 1, 2, 0];
  const chart = [28, 44, 36, 60, 52, 76];
  const plan = [
    [1, 0, 2, 0, 1],
    [0, 2, 0, 1, 0],
    [2, 0, 1, 2, 0],
  ];

  return (
    <svg
      viewBox="0 0 960 520"
      fill="none"
      role="img"
      aria-label="Hezarfen ekranı: sınıf listesi, konu grafiği ve haftalık plan"
      shape-rendering="crispEdges"
      class={props.class}
    >
      {/* Window */}
      <Frame x={0} y={0} w={960} h={520} />
      <rect x={4} y={44} width={952} height={4} fill="currentColor" />
      {/* Title bar: three dots and a search field */}
      <g fill="currentColor" opacity="0.55">
        <rect x={20} y={18} width={10} height={10} />
        <rect x={38} y={18} width={10} height={10} />
        <rect x={56} y={18} width={10} height={10} />
      </g>
      <rect x={96} y={14} width={220} height={18} fill="currentColor" opacity="0.14" />
      <rect x={880} y={14} width={56} height={18} fill={brand} opacity="0.9" />

      {/* Sidebar: the modules, one of them open */}
      <rect x={196} y={48} width={4} height={468} fill="currentColor" />
      <g>
        <rect x={24} y={72} width={104} height={10} fill="currentColor" opacity="0.3" />
        <rect x={20} y={104} width={4} height={14} fill={brand} />
        <rect x={32} y={104} width={128} height={14} fill={brand} opacity="0.22" />
        <For each={[0, 1, 2, 3, 4]}>
          {row => (
            <rect
              x={32}
              y={140 + row * 32}
              width={row % 2 === 0 ? 132 : 108}
              height={12}
              fill="currentColor"
              opacity="0.2"
            />
          )}
        </For>
        <rect x={32} y={452} width={96} height={12} fill="currentColor" opacity="0.14" />
      </g>

      {/* Page heading */}
      <rect x={228} y={72} width={188} height={16} fill="currentColor" opacity="0.45" />
      <rect x={228} y={98} width={120} height={10} fill="currentColor" opacity="0.2" />

      {/* Left panel: the class, answered option by option */}
      <Frame x={228} y={128} w={352} h={356} t={2} />
      <rect x={244} y={148} width={96} height={10} fill="currentColor" opacity="0.35" />
      <For each={students}>
        {(_, i) => {
          const y = 180 + i() * 48;
          return (
            <g>
              <rect x={244} y={y} width={72} height={10} fill="currentColor" opacity="0.26" />
              <For each={[0, 1, 2, 3]}>
                {option => (
                  <rect
                    x={336 + option * 26}
                    y={y - 2}
                    width={16}
                    height={14}
                    fill={marked[i()] === option ? brand : "currentColor"}
                    opacity={marked[i()] === option ? 1 : 0.16}
                  />
                )}
              </For>
              <rect x={520} y={y - 2} width={40} height={14} fill={brandDeep} opacity="0.5" />
            </g>
          );
        }}
      </For>

      {/* Right, top: topic mastery */}
      <Frame x={604} y={128} w={332} h={168} t={2} />
      <rect x={620} y={148} width={112} height={10} fill="currentColor" opacity="0.35" />
      <rect x={620} y={272} width={300} height={2} fill="currentColor" opacity="0.4" />
      <For each={chart}>
        {(height, i) => (
          <rect
            x={628 + i() * 48}
            y={272 - height}
            width={30}
            height={height}
            fill={i() >= 4 ? brand : brandDeep}
            opacity={i() >= 4 ? 1 : 0.6}
          />
        )}
      </For>

      {/* Right, bottom: the week the data turns into */}
      <Frame x={604} y={316} w={332} h={168} t={2} />
      <rect x={620} y={336} width={92} height={10} fill="currentColor" opacity="0.35" />
      <For each={plan}>
        {(row, r) => (
          <For each={row}>
            {(cell, c) => (
              <rect
                x={620 + c() * 62}
                y={360 + r() * 38}
                width={50}
                height={28}
                fill={cell === 2 ? brand : cell === 1 ? brandDeep : "currentColor"}
                opacity={cell === 0 ? 0.12 : cell === 1 ? 0.55 : 1}
              />
            )}
          </For>
        )}
      </For>
    </svg>
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
      aria-label="Sınıf panosunda yükselen kazanım grafiği"
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
 * Hezarfen Platform: an answer sheet where every question carries its topic
 * tag and every answer is stored per option — the marks are the point, so
 * they are the brand.
 */
export function AnswerSheetIllustration(props: Props) {
  const rows = [0, 1, 2, 3, 4];
  const marked = [1, 3, 0, 2, 3];

  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      role="img"
      aria-label="Madde düzeyinde işaretlenmiş cevap kâğıdı"
      shape-rendering="crispEdges"
      class={props.class}
    >
      <Frame x={40} y={12} w={180} h={176} />
      {/* Header band: the exam's own line */}
      <rect x={56} y={28} width={72} height={6} fill={brandDeep} />
      <rect x={56} y={40} width={44} height={4} fill="currentColor" opacity="0.45" />

      <For each={rows}>
        {row => {
          const y = 64 + row * 24;
          return (
            <g>
              {/* Topic tag */}
              <rect x={56} y={y + 2} width={24} height={6} fill="currentColor" opacity="0.4" />
              {/* Four options, one of them marked */}
              <For each={[0, 1, 2, 3]}>
                {option => (
                  <rect
                    x={96 + option * 26}
                    y={y}
                    width={14}
                    height={10}
                    fill={marked[row] === option ? brand : "currentColor"}
                    opacity={marked[row] === option ? 1 : 0.28}
                  />
                )}
              </For>
              <rect x={204} y={y + 2} width={6} height={6} fill={brandDeep} />
            </g>
          );
        }}
      </For>
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
 * Çelebi: a screen with the right row lit and a cursor arriving at it. The
 * assistant's whole job is “the thing you are looking for is here”.
 */
export function GuidedScreenIllustration(props: Props) {
  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      role="img"
      aria-label="Kullanıcıyı doğru ekrana yönlendiren asistan"
      shape-rendering="crispEdges"
      class={props.class}
    >
      <Frame x={24} y={24} w={212} h={132} />
      {/* Window bar */}
      <rect x={28} y={40} width={204} height={4} fill="currentColor" opacity="0.5" />
      {/* Side menu, one row highlighted */}
      <g>
        <rect x={40} y={56} width={56} height={10} fill="currentColor" opacity="0.25" />
        <rect x={40} y={74} width={56} height={10} fill={brand} />
        <rect x={40} y={92} width={56} height={10} fill="currentColor" opacity="0.25" />
        <rect x={40} y={110} width={56} height={10} fill="currentColor" opacity="0.25" />
      </g>
      {/* Content area: the screen the row opens */}
      <g fill="currentColor" opacity="0.3">
        <rect x={112} y={56} width={104} height={8} />
        <rect x={112} y={72} width={80} height={8} />
        <rect x={112} y={88} width={92} height={8} />
      </g>
      <rect x={112} y={106} width={48} height={14} fill={brandDeep} />
      {/* Pixel cursor, landing on the highlighted row */}
      <g fill="currentColor">
        <rect x={96} y={78} width={6} height={6} />
        <rect x={102} y={84} width={6} height={6} />
        <rect x={108} y={90} width={6} height={6} />
        <rect x={102} y={90} width={6} height={6} />
      </g>
      {/* Stand */}
      <g fill="currentColor">
        <rect x={116} y={156} width={28} height={16} />
        <rect x={92} y={172} width={76} height={6} />
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
      aria-label="Ders PDF'inden üretilen sesli ders"
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
      aria-label="Bulunamayan sayfa"
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
