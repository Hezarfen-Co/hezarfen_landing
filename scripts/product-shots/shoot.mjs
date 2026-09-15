/**
 * Photographs the real Hezarfen frontend, filled with the fixture school, for
 * the landing page's product shots.
 *
 * Usage (frontend dev server running, see README):
 *   bun scripts/product-shots/shoot.mjs [frontendUrl] [outDir] [only...]
 *
 * Playwright is resolved from `PLAYWRIGHT` (the frontend repo already carries
 * it) and drives the system Chrome, so no browser download is needed. Each
 * shot is written as WebP, which needs `cwebp` (`brew install webp`).
 */
import { buildSchool } from "./fixtures.mjs";
import { createApi } from "./api.mjs";
import { shots } from "./shots.mjs";

const { chromium } = await import(process.env.PLAYWRIGHT ?? "playwright");
const base = process.argv[2] ?? "http://127.0.0.1:4173";
const out = process.argv[3] ?? "public/product";
const only = process.argv.slice(4);

const school = buildSchool();
const browser = await chromium.launch({ channel: "chrome" });

for (const shot of shots(school)) {
  if (only.length && !only.includes(shot.name)) continue;
  const ctx = await browser.newContext({
    viewport: shot.viewport ?? { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    locale: "tr-TR",
    colorScheme: "light",
  });
  // The router devtools badge is dev-only chrome that would end up in every shot.
  await ctx.addInitScript(() => {
    const css = "[class*='TanStackRouterDevtools'],.TanStackRouterDevtools,button[aria-label*='TanStack']{display:none!important}";
    addEventListener("DOMContentLoaded", () => { const s = document.createElement("style"); s.textContent = css; document.head.append(s); });
  });
  const page = await ctx.newPage();
  await page.route(url => url.pathname.startsWith("/api/"), createApi(school, { as: shot.as }));
  await page.goto(base + shot.path, { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(1500);
  if (shot.prepare) await shot.prepare(page);
  const png = `${out}/${shot.name}.png`;
  if (shot.locator) await shot.locator(page).screenshot({ path: png });
  else await page.screenshot({ path: png, clip: shot.clip });
  // WebP at q86 keeps UI text crisp at a fifth of the PNG's weight.
  const webp = Bun.spawnSync(["cwebp", "-quiet", "-q", "86", png, "-o", `${out}/${shot.name}.webp`]);
  if (webp.exitCode !== 0) throw new Error(`cwebp failed for ${shot.name} (brew install webp)`);
  await Bun.file(png).delete();
  console.log(`shot ${shot.name}`);
  await ctx.close();
}
await browser.close();
