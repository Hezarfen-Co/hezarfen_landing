import { pageUpdated, routes, site } from "~/config";

/**
 * One page, one entry. The bands are fragments of `/`, and a crawler does not
 * index fragments separately — listing them would only claim URLs that resolve
 * to the same document.
 */
export function GET() {
  const urls = (Object.entries(routes) as [keyof typeof routes, string][])
    .map(
      ([key, path]) =>
        `  <url><loc>${site.url}${path}</loc><lastmod>${pageUpdated[key]}</lastmod></url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "content-type": "application/xml; charset=utf-8" } },
  );
}
