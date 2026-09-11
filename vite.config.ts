import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";

import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  plugins: [tailwindcss(), solidStart(), nitro()],

  // The build is a server under .output/, run with bun. Nothing is
  // prerendered: the page renders on request, which keeps one code path for
  // the landing page and for /sitemap.xml and /healthz beside it.

  define: {
    // The commit this build came from, answered by /healthz so the deploy can
    // tell a fresh process from a stale one still holding the port.
    __COMMIT__: JSON.stringify(process.env.GITHUB_SHA ?? "dev"),
  },

  optimizeDeps: {
    // SolidStart's dev error viewer imports these as ESM, but they ship
    // CommonJS. Unless Vite pre-bundles them the raw files are served as-is
    // and the named/default imports throw on load. Dev-only; the production
    // build never pulls the toolbar in.
    include: ["source-map-js", "error-stack-parser", "html-to-image"],
  },
});
