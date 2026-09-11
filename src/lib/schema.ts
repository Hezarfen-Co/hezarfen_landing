import { anchors, site } from "~/config";
import type { Dictionary } from "~/i18n";

/**
 * schema.org payloads, built from the same `config.ts` and dictionary the page
 * renders from — so the markup search engines read cannot drift from the copy
 * a visitor reads.
 *
 * The site is one page, so it emits one `@graph`: the organisation, the site,
 * the page, and the list of products the page is about. Nodes are referenced
 * by `@id` rather than repeated, which is what lets a crawler tie them into
 * one entity.
 */

const ORGANIZATION = `${site.url}/#organization`;
const WEBSITE = `${site.url}/#website`;

/** The logo Google reads has to be a raster; `image` is the link preview card. */
const LOGO = `${site.url}/brand/hezarfen-mark-512.png`;
export const OG_IMAGE = `${site.url}/og.png`;

/** The site publishes in one language, so this is a constant, not a lookup. */
const inLanguage = "tr-TR";

type PageInput = {
  url: string;
  title: string;
  description: string;
  t: Dictionary;
  /** Nodes describing what the page lists, from the builders below. */
  extra?: object[];
};

export function pageGraph(input: PageInput) {
  const page: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${input.url}#webpage`,
    url: input.url,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": WEBSITE },
    about: { "@id": ORGANIZATION },
    primaryImageOfPage: OG_IMAGE,
    inLanguage,
  };

  const nodes: object[] = [
    {
      "@type": "Organization",
      "@id": ORGANIZATION,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      email: site.email,
      foundingDate: String(site.founded),
      description: input.t.meta.homeDescription,
      logo: { "@type": "ImageObject", url: LOGO, width: 512, height: 512 },
      image: OG_IMAGE,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressCountry: "TR",
      },
      // Who builds it, so the credit in the about band is part of the entity
      // rather than only a link in the footer.
      parentOrganization: {
        "@type": "Organization",
        name: site.builder.name,
        url: site.builder.url,
      },
      // The four products are what the entity is known for, so they are part
      // of the organisation rather than only body copy on the page.
      knowsAbout: input.t.products.items.map(item => item.name),
      // Accounts with no address yet are dropped rather than sent as an empty
      // string, which would make the whole property unusable.
      sameAs: Object.values(site.social).filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE,
      url: site.url,
      name: site.legalName,
      publisher: { "@id": ORGANIZATION },
      inLanguage,
    },
    page,
  ];

  return { "@context": "https://schema.org", "@graph": [...nodes, ...(input.extra ?? [])] };
}

/**
 * The four products, as the page lists them. No `Offer`: the licence is
 * quoted per kurum after a conversation, and publishing a number here that
 * the page itself does not state is how a crawler ends up quoting a price we
 * never gave.
 */
export function productList(t: Dictionary, url: string) {
  return {
    "@type": "ItemList",
    "@id": `${url}#urunler`,
    name: t.products.title,
    itemListElement: t.products.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: item.name,
        description: item.description,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web",
        url: `${site.url}${anchors.products}`,
        author: { "@id": ORGANIZATION },
        featureList: item.pills,
      },
    })),
  };
}

/**
 * The FAQ band, as the rich result reads it. The answers are the page's own
 * copy verbatim — Google drops a `FAQPage` whose answers are not visible on
 * the page, and rewriting them for the markup is exactly that.
 */
export function faqPage(t: Dictionary, url: string) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#sss`,
    mainEntity: t.faq.items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
