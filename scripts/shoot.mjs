/**
 * Screenshots the running site, band by band, so a layout regression is
 * something you can look at rather than something you have to notice.
 *
 * Usage: start a server (`bun .output/server/index.mjs`), then
 *   bun scripts/shoot.mjs [baseUrl] [outDir]
 *
 * Playwright is not a dependency of this project: the script resolves it from
 * wherever it is installed via `PLAYWRIGHT` so CI does not have to carry a
 * browser download for a tool only used by hand.
 */
const { chromium } = await import(process.env.PLAYWRIGHT ?? "playwright");

const base = process.argv[2] ?? "http://localhost:3000";
const out = process.argv[3] ?? "/tmp/hezarfen-shots";

const shots = [
  { name: "hero", width: 1440, height: 900, y: 0 },
  { name: "mobile", width: 390, height: 844, y: 0 },
];

const browser = await chromium.launch();

for (const shot of shots) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${out}/${shot.name}.png` });
  await page.close();
}

// Every band, at desktop width, in one tall pass.
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(base, { waitUntil: "networkidle" });

// Walk the whole page first: the reveal observer only fires for blocks that
// have been in the viewport, and a section taller than the window would
// otherwise be photographed with its lower half still at opacity 0.
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 600) {
  await page.evaluate(offset => window.scrollTo(0, offset), y);
  await page.waitForTimeout(120);
}
await page.waitForTimeout(900);
await page.evaluate(() => window.scrollTo(0, 0));
for (const id of [
  "neden",
  "urunler",
  "moduller",
  "nasil-calisir",
  "roller",
  "guven",
  "kimler-icin",
  "hakkimizda",
  "sss",
  "iletisim",
]) {
  const band = page.locator(`#${id}`);
  await band.scrollIntoViewIfNeeded();
  // The reveal transitions run for 700ms plus an 80ms per-card stagger.
  await page.waitForTimeout(1400);
  await band.screenshot({ path: `${out}/${id}.png` });
}
await browser.close();

console.log(`wrote ${out}`);
