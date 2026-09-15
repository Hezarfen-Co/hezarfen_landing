/**
 * Which screens to photograph, as whom, and how to set each one up.
 *
 * Feature shots crop the sidebar away: at the size a landing card renders
 * them, the content is what has to stay legible, and the hero shot already
 * shows the whole shell.
 */
const SIDEBAR = 260;

export function shots(s) {
  return [
    {
      name: "dashboard",
      path: "/",
      as: s.manager,
      clip: { x: 0, y: 0, width: 1440, height: 790 },
    },
    {
      name: "exam-question",
      path: `/exams/${s.exams[9].id}`,
      as: s.teachers.mat,
      viewport: { width: 1080, height: 1000 },
      // Only the question card: at half a column's width, the tag, the points
      // and the options are what has to stay readable.
      prepare: async page => {
        await page.getByRole("tab", { name: /Sorular/ }).click();
        await page.waitForTimeout(1200);
      },
      locator: page => page.locator("main .data-shell:visible").first(),
    },
    {
      name: "celebi",
      path: "/",
      as: s.teachers.mat,
      clip: { x: 896, y: 0, width: 544, height: 900 },
      prepare: async page => {
        await page.getByRole("button", { name: /Çelebi.ye sor/ }).first().click();
        await page.waitForTimeout(800);
        await page.getByRole("button", { name: s.chat.threads[0].title }).click();
        await page.waitForTimeout(1200);
      },
    },
  ];
}
