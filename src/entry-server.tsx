// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      /* Turkish, and one palette: the page ships the way it renders, so there
         is no class for a theme to toggle and no locale to resolve. */
      <html lang="tr">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          {/* One cut, and a version token: Chrome caches favicons hard, keyed
              by URL, so bump the token whenever the mark changes or the old
              one keeps showing. */}
          <link rel="icon" href="/favicon.svg?v=1" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
