/**
 * Pixel icons, inlined from Pixelarticons (https://pixelarticons.com)
 * by Gerrit Halfmann — MIT licensed, 24x24 grid, `fill="currentColor"`.
 *
 * Only the glyphs this page needs are vendored here, rather than pulling in a
 * 1000-icon package for a dozen of them; add more by pasting the `<path>`
 * data from `svg/<name>.svg` upstream. Keep `shape-rendering="crispEdges"`
 * so the pixels stay hard at any size, and prefer multiples of 24px where
 * the layout allows it.
 */
type IconProps = { class?: string };

function Pixel(props: IconProps & { d: string[] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      shape-rendering="crispEdges"
      aria-hidden="true"
      class={props.class}
    >
      {props.d.map(path => (
        <path d={path} />
      ))}
    </svg>
  );
}

export function PixelCpu(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M5 3h14v2H5zm0 16h14v2H5zM3 5h2v14H3zm16 0h2v14h-2zM9 7h6v2H9zm0 8h6v2H9zM7 9h2v6H7zm8 0h2v6h-2zm-4-8h2v2h-2zm0 20h2v2h-2zM1 11h2v2H1zm20 0h2v2h-2zm0-4h2v2h-2zm0 8h2v2h-2zM1 15h2v2H1zm0-8h2v2H1zm6-6h2v2H7zm8 0h2v2h-2zm0 20h2v2h-2zm-8 0h2v2H7z",
      ]}
    />
  );
}

export function PixelDatabase(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M2 6h2v4H2zm0 4h2v4H2zm0 4h2v4H2zm18-8h2v4h-2zm0 4h2v4h-2zm0 4h2v4h-2zM4 4h4v2H4zm0 8h4v-2H4zm0 4h4v-2H4zm0 4h4v-2H4zM16 4h4v2h-4zm0 8h4v-2h-4zm0 4h4v-2h-4zm0 4h4v-2h-4zM8 2h8v2H8zm0 12h8v-2H8zm0 4h8v-2H8zm0 4h8v-2H8z",
      ]}
    />
  );
}

export function PixelShield(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 2h16v2H4zM2 4h2v10H2zm18 0h2v10h-2zM4 14h2v2H4zm2 2h2v2H6zm4 4h4v2h-4zm10-6h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2zm-6 0H8v2h2z",
      ]}
    />
  );
}

export function PixelCheck(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z",
      ]}
    />
  );
}

export function PixelArrowRight(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 11v2h16v-2zm12 2v2h2v-2zm-2 2v2h2v-2zm-2 2v2h2v-2zm4-6V9h2v2z",
        "M14 15V7h2v8zm-2 2V5h2v12z",
      ]}
    />
  );
}

export function PixelArrowUp(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M11 20h2V4h-2zm2-12h2V6h-2zm2 2h2V8h-2zm2 2h2v-2h-2zm-6-4H9V6h2z",
        "M15 10H7V8h8zm2 2H5v-2h12z",
      ]}
    />
  );
}

/** Diagonal "open" arrow for cards and external links. */
export function PixelCornerUpRight(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M6 8h14v2H6zm-2 2h2v10H4zm12 4h-2v-2h2zm2-2h-2v-2h2zm0-4h-2V6h2z",
        "M16 12h-2V4h2z",
      ]}
    />
  );
}

export function PixelCloud(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M22 10h-4v2h4v-2Zm2 2h-2v6h2v-6Zm-2 6H2v2h20v-2ZM2 12H0v6h2v-6Zm2-2H2v2h2v-2Zm4-2H4v2h4V8Zm8-4h-6v2h6V4Zm-6 2H8v2h2V6Zm0 4H8v2h2v-2Zm8-4h-2v2h2V6Z",
        "M20 8h-2v4h2V8Zm-2 4h-2v2h2v-2Z",
      ]}
    />
  );
}

export function PixelServer(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M6 7h4v2H6zm0 8h4v2H6zM2 5h2v14H2zm18 0h2v14h-2zM4 19h16v2H4zM4 3h16v2H4zm0 8h16v2H4z",
      ]}
    />
  );
}

export function PixelMonitor(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 2h16v2H4zm0 14h16v2H4zM2 4h2v12H2zm18 0h2v12h-2zm-9 14h2v2h-2zm-3 2h8v2H8z",
      ]}
    />
  );
}

export function PixelCoffee(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 4h16v2H4zm0 2h2v8H4zm2 8h10v2H6zm14-8h2v4h-2zm-2 4h2v2h-2zm-2-4h2v8h-2zM2 18h18v2H2z",
      ]}
    />
  );
}
export function PixelBookOpen(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M2 3h9v2H2zM0 19h11v2H0zM13 3h9v2h-9zm0 16h11v2H13zM11 5h2v18h-2zM0 5h2v14H0zm22 0h2v14h-2zm-7 2h5v2h-5zm0 4h5v2h-5zm0 4h2v2h-2z",
      ]}
    />
  );
}
export function PixelSmartphone(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={["M6 2h12v2H6zm0 18h12v2H6zM4 4h2v16H4zm14 0h2v16h-2zm-7 13h2v2h-2z"]}
    />
  );
}
export function PixelCode(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z",
      ]}
    />
  );
}

export function PixelUsers(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M5 2h6v2H5zm10 0h4v2h-4zM5 10h6v2H5zm10 0h4v2h-4zm4-6h2v6h-2zm-8 0h2v6h-2zM3 4h2v6H3zM0 18h2v4H0zm14 0h2v4h-2zm8 0h2v4h-2zM4 14h8v2H4zm12 0h4v2h-4zM2 16h2v2H2zm10 0h2v2h-2zm8 0h2v2h-2z",
      ]}
    />
  );
}

export function PixelLayout(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M20 20H4v-2h4v-8H4v8H2V6h2v2h16V6h2v12h-2v-8H10v8h10v2Zm0-14H4V4h16v2Z",
      ]}
    />
  );
}

export function PixelWindowFrame(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 2h16v2H4zm0 6h16v2H4zm0 12h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM5 5h2v2H5zm3 0h2v2H8z",
      ]}
    />
  );
}

export function PixelZap(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z",
      ]}
    />
  );
}

export function PixelRobot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M5 7h14v2H5zm0 12h14v2H5zM3 9h2v10H3zm16 0h2v10h-2zM1 13h2v2H1zm20 0h2v2h-2zM11 5h2v2h-2zM7 3h4v2H7zm1 9h2v4H8zm6 0h2v4h-2z",
      ]}
    />
  );
}

export function PixelSparkles(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M11 1h2v4h-2zm0 22h2v-4h-2zM9 5h2v4H9zm0 14h2v-4H9zm4-14h2v4h-2zm0 14h2v-4h-2zM5 9h4v2H5zm14 0h-4v2h4zM1 11h4v2H1zm22 0h-4v2h4zM5 13h4v2H5zm14 0h-4v2h4zm0-12h2v6h-2z",
        "M17 3h6v2h-6zM3 17h2v2H3zm-2 2h2v2H1zm2 2h2v2H3zm2-2h2v2H5z",
      ]}
    />
  );
}

export function PixelBriefcase(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M2 8h2v12H2zm18 0h2v12h-2zM4 6h16v2H4zm0 14h16v2H4zM8 4h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2z",
      ]}
    />
  );
}

export function PixelShoppingCart(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M2 2h2v2H2zm2 6h2v4H4zm2 4h2v4H6zm2 4h10v2H8zm10-4h2v4h-2zm2-4h2v4h-2zM4 6h18v2H4zm0-4h2v4H4zm2 17h3v3H6zm11 0h3v3h-3z",
      ]}
    />
  );
}

export function PixelStore(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M3 13h2v8H3zm2 8h14v2H5zm14-8h2v8h-2zm-9-2h4v2h-4zm4-2h4v2h-4zm4 2h4v2h-4zM6 9h4v2H6zm-4 2h4v2H2zM0 7h2v4H0zm2-2h2v2H2zm18 0h2v2h-2zm2 2h2v4h-2zM4 3h16v2H4zm6 12h4v2h-4zm-2 2h2v4H8zm6 0h2v4h-2z",
      ]}
    />
  );
}

export function PixelNotebook(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M6 2h14v2H6zm0 18h14v2H6zM20 4h2v16h-2zM4 4h2v16H4z",
        "M2 7h6v2H2zm0 4h6v2H2zm0 4h6v2H2zM16 4h2v16h-2z",
      ]}
    />
  );
}

export function PixelUserPlus(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M9 2h6v2H9zm0 8h6v2H9zm6-6h2v6h-2zM7 4h2v6H7zM4 18h2v4H4zm14 0h2v4h-2zM8 14h8v2H8zm-2 2h2v2H6z",
        "M18 16h2v6h-2z",
        "M16 18h6v2h-6z",
      ]}
    />
  );
}
export function PixelMail(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M6 8h2v2H6zm2 2h2v2H8zm10-2h-2v2h2zm-2 2h-2v2h2zm-6 2h4v2h-4zM2 6h2v12H2zm18 0h2v12h-2zM4 4h16v2H4zm0 14h16v2H4z",
      ]}
    />
  );
}
export function PixelGlobe(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M6 2h12v2H6zm0 18h12v2H6zM4 4h2v2H4zm5 0h2v2H9zm0 14h2v2H9zm4 0h2v2h-2zM7 6h2v12H7zm8 0h2v12h-2zm-2-2h2v2h-2zm7 0h-2v2h2zM2 6h2v12H2zm20 0h-2v12h2zM4 18h2v2H4zm16 0h-2v2h2z",
        "M3 11h18v2H3z",
      ]}
    />
  );
}
export function PixelLock(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M5 8h14v2H5zm0 12h14v2H5zM3 10h2v10H3zm16 0h2v10h-2zM7 4h2v4H7zm2-2h6v2H9zm6 2h2v4h-2z",
      ]}
    />
  );
}
export function PixelTerminal(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM6 16h2v2H6zm2-2h2v2H8zm-2-2h2v2H6z",
      ]}
    />
  );
}
export function PixelClose(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M7 19H5V17H7V19ZM19 19H17V17H19V19ZM9 15V17H7V15H9ZM17 17H15V15H17V17ZM11 15H9V13H11V15ZM15 15H13V13H15V15ZM13 13H11V11H13V13ZM11 11H9V9H11V11ZM15 11H13V9H15V11ZM9 9H7V7H9V9ZM17 9H15V7H17V9ZM7 7H5V5H7V7ZM19 7H17V5H19V7Z",
      ]}
    />
  );
}
export function PixelSun(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M13 22h-2v-3h2v3Zm-6-3H5v-2h2v2Zm12 0h-2v-2h2v2Zm-4-2H9v-2h6v2Zm-6-2H7V9h2v6Zm8 0h-2V9h2v6ZM5 13H2v-2h3v2Zm17 0h-3v-2h3v2Zm-7-4H9V7h6v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Zm-6-2h-2V2h2v3Z",
      ]}
    />
  );
}
export function PixelMoon(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M18 22H8v-2h10v2ZM8 20H6v-2h2v2Zm12 0h-2v-2h2v2ZM6 18H4v-2h2v2Zm16 0h-2v-4h-2v-2h2v-2h2v8ZM4 16H2V6h2v10Zm14 0h-6v-2h6v2Zm-6-2h-2v-2h2v2Zm-2-2H8V6h2v6ZM6 6H4V4h2v2Zm8-2h-2v2h-2V4H6V2h8v2Z",
      ]}
    />
  );
}
export function PixelHome(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 20h16v2H4zm16-10h2v10h-2zM2 10h2v10H2zm2-2h2v2H4zm2-2h2v2H6zm2-2h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zM8 14h2v6H8zm2-2h4v2h-4zm4 2h2v6h-2z",
      ]}
    />
  );
}
export function PixelArrowLeft(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M20 11v2H4v-2zM8 13v2H6v-2zm2 2v2H8v-2zm2 2v2h-2v-2zm-4-6V9H6v2z",
        "M10 15V7H8v8zm2 2V5h-2v12z",
      ]}
    />
  );
}
export function PixelCalendar(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M5 4h14v2H5zm0 16h14v2H5zM3 10h2v10H3zm0-4h2v2H3zm16 0h2v2h-2zm0 4h2v10h-2zM3 8h18v2H3zm12-6h2v2h-2zM7 2h2v2H7z",
      ]}
    />
  );
}
export function PixelClock(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M6 2h12v2H6zM2 6h2v12H2zm18 0h2v12h-2zm-2-2h2v2h-2zM4 4h2v2H4zm2 18h12v-2H6zm12-2h2v-2h-2zM4 20h2v-2H4zm7-14h2v7h-2zm2 7h2v2h-2zm2 2h2v2h-2z",
      ]}
    />
  );
}
export function PixelExternalLink(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M11 5H5v2h6V5ZM5 7H3v12h2V7Zm12 12H5v2h12v-2Zm2-6h-2v6h2v-6Zm-8 0H9v2h2v-2Zm2-2h-2v2h2v-2Zm2-2h-2v2h2V9Zm2-2h-2v2h2V7Zm2-2h-2v2h2V5Zm2-2h-2v8h2V3Z",
        "M21 3h-8v2h8V3Z",
      ]}
    />
  );
}
export function PixelCircleInfo(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z",
      ]}
    />
  );
}
export function PixelMenu(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M20 18H4v-2h16v2Zm0-5H4v-2h16v2Zm0-5H4V6h16v2Z",
      ]}
    />
  );
}
export function PixelFileText(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M6 4H4v16h2zm10-2H6v2h10zm4 4h-2v14h2zm-2 14H6v2h12zM16 4h2v2h-2zm-4 0h2v6h-2z",
        "M12 8h6v2h-6zm-4 8h8v2H8zm0-4h8v2H8zm0-4h2v2H8z",
      ]}
    />
  );
}
export function PixelUser(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M9 2h6v2H9zm0 8h6v2H9zm6-6h2v6h-2zM7 4h2v6H7zM4 18h2v4H4zm14 0h2v4h-2zM8 14h8v2H8zm-2 2h2v2H6zm10 0h2v2h-2z",
      ]}
    />
  );
}
export function PixelImage(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zm-4 8h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm-8 0h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2z",
        "M20 16h2v2h-2zM8 16h2v2H8zm-2 2h2v2H6zM8 6h2v2H8zM6 8h2v2H6zm2 2h2v2H8zm2-2h2v2h-2z",
      ]}
    />
  );
}
export function PixelSend(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 19h4v2H2v-8h2v6Zm8 0H8v-2h4v2Zm4-2h-4v-2h4v2Zm4-2h-4v-2h4v2Zm-10-2H4v-2h6v2Zm12 0h-2v-2h2v2ZM8 5H4v6H2V3h6v2Zm12 6h-4V9h4v2Zm-4-2h-4V7h4v2Zm-4-2H8V5h4v2Z",
      ]}
    />
  );
}
export function PixelArrowDown(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M13 12h6v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2h6V4h2v8Z",
      ]}
    />
  );
}

/* The two below are not from Pixelarticons: they are brand marks redrawn by
   hand on the same 24x24 grid so the walker crew's mascots keep the pixel
   voice — Claude's starburst as eight rays meeting a solid hub, and OpenAI's
   knot as its silhouette, a hexagonal ring around a hexagonal void. The knot's
   interlace itself is hopeless at fifteen pixels: every version with spokes
   read as a compass needle. */
export function PixelClaudeMark(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M11 3h2v18h-2zM3 11h18v2H3z",
        "M5 5h2v2H5zm2 2h2v2H7zm2 2h2v2H9zM17 5h2v2h-2zm-2 2h2v2h-2zm-2 2h2v2h-2zM5 17h2v2H5zm2-2h2v2H7zm2-2h2v2H9zm8 4h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2z",
      ]}
    />
  );
}
export function PixelOpenAiMark(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M9 3h6v2H9zM6 5h5v2H6zm7 0h5v2h-5zM4 7h5v2H4zm11 0h5v2h-5zM2 9h5v6H2zm15 0h5v6h-5zM4 15h5v2H4zm11 0h5v2h-5zM6 17h5v2H6zm7 0h5v2h-5zM9 19h6v2H9z",
      ]}
    />
  );
}

/* Critter mascots, same hand-drawn grid. Solid bodies with the eyes left as
   gaps: the ground shows through, which is what makes them read as faces at
   fifteen pixels — a two-eyed droplet, a pincered crab, a wavy-hemmed ghost,
   Ferris with her spiked shell, the bucktoothed gopher, a long-necked llama,
   and Tux, whose white belly is the gap that names him. */
export function PixelDropMascot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M11 2h2v2h-2zM9 4h6v2H9zM7 6h10v2H7zM5 8h14v4H5zM3 12h5v3H3zm7 0h4v3h-4zm6 0h5v3h-5zM3 15h18v3H3zM5 18h14v2H5zM7 20h10v2H7z",
      ]}
    />
  );
}
export function PixelCrabMascot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M1 3h4v2H1zm0 2h2v3H1zm2 1h2v2H3zm16-3h4v2h-4zm2 2h2v3h-2zm-2 1h2v2h-2z",
        "M5 6h14v2H5zM3 8h4v2H3zm6 0h6v2H9zm8 0h4v2h-4zM3 10h18v2H3zM5 12h14v2H5zm0 2h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2z",
      ]}
    />
  );
}
export function PixelGhostMascot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M7 4h10v2H7zM5 6h14v2H5zm0 2h3v3H5zm5 0h4v3h-4zm6 0h3v3h-3zM5 11h14v7H5zm0 7h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2z",
      ]}
    />
  );
}
export function PixelFerrisMascot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M5 2h2v2H5zm6 0h2v2h-2zm6 0h2v2h-2zM3 4h18v2H3zM1 6h6v3H1zm8 0h6v3H9zm8 0h6v3h-6zM1 9h22v3H1zM3 12h18v2H3zm0 2h2v2H3zm4 0h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2z",
      ]}
    />
  );
}
export function PixelGopherMascot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 2h2v2H4zm14 0h2v2h-2zM6 4h12v2H6zM4 6h3v4H4zm6 0h4v4h-4zm7 0h3v4h-3zM4 10h16v2H4zm0 2h6v2H4zm10 0h6v2h-6zM4 14h16v4H4zm2 4h12v2H6z",
      ]}
    />
  );
}
export function PixelLlamaMascot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M4 2h2v2H4zm4 0h2v2H8zM3 4h8v1H3zM3 5h2v2H3zm4 0h4v2H7zM3 7h8v2H3zM7 9h4v5H7zM5 14h14v5H5zm14 0h2v2h-2zM6 19h2v3H6zm3 0h2v3H9zm5 0h2v3h-2zm3 0h2v3h-2z",
      ]}
    />
  );
}
export function PixelTuxMascot(props: IconProps) {
  return (
    <Pixel
      class={props.class}
      d={[
        "M9 2h6v1H9zM8 3h8v2H8zM8 5h1v2H8zm3 0h2v2h-2zm4 0h1v2h-1zM8 7h3v2H8zm5 0h3v2h-3zM6 9h12v1H6zm0 1h3v7H6zm9 0h3v7h-3zM6 17h12v2H6zM4 11h2v4H4zm14 0h2v4h-2zM3 19h7v2H3zm11 0h7v2h-7z",
      ]}
    />
  );
}
