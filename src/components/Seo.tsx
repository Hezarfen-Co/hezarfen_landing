import { Link, Meta, Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import JsonLd from "~/components/JsonLd";
import { site } from "~/config";
import { t } from "~/i18n";
import { OG_IMAGE, pageGraph } from "~/lib/schema";

/** Per-page title/description plus the Open Graph tags link previews need. */
export default function Seo(props: {
  title: string;
  description: string;
  /** Use the title as given, rather than appending the brand suffix. */
  full?: boolean;
  /** Short nav label for the home → page trail. Off for the landing page. */
  breadcrumb?: string;
  /** Extra schema.org nodes describing what the page lists. */
  schema?: object[];
}) {
  const location = useLocation();

  const title = () => (props.full ? props.title : `${props.title} — ${t.meta.titleSuffix}`);
  const url = () => `${site.url}${location.pathname}`;

  return (
    <>
      <Title>{title()}</Title>
      <Meta name="description" content={props.description} />
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content={site.legalName} />
      <Meta property="og:title" content={title()} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:url" content={url()} />
      <Meta property="og:locale" content="tr_TR" />
      {/* The card is the brand lockup, so one image serves every page. Width
          and height let a scraper lay the preview out before it has the file. */}
      <Meta property="og:image" content={OG_IMAGE} />
      <Meta property="og:image:type" content="image/png" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" content={site.legalName} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title()} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={OG_IMAGE} />
      <Meta name="twitter:image:alt" content={site.legalName} />
      <Link rel="canonical" href={url()} />

      <JsonLd
        data={pageGraph({
          url: url(),
          title: title(),
          description: props.description,
          t,
          breadcrumb: props.breadcrumb,
          extra: props.schema,
        })}
      />
    </>
  );
}
