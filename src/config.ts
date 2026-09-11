/**
 * Single source of truth for contact details, canonical URLs and the anchors
 * the landing page is built out of.
 *
 * The site is one page: every nav label, footer link and structured-data URL
 * resolves to a band on `/`. Adding a band means adding its anchor here, not
 * editing three components.
 */
export const site = {
  name: "Hezarfen",
  legalName: "Hezarfen",
  /** Not registered yet — swap the two lines below when the domain is live. */
  domain: "hezarfen.app",
  url: "https://hezarfen.app",
  /* Mail runs on the Dizey domain: it is the address that already receives
     and is already answered, and a contact address nobody reads is worse
     than one that does not match the site's domain. */
  email: "merhaba@dizey.sh",
  phone: "+90 352 000 00 00",
  city: "Kayseri",
  founded: 2026,
  /** Who builds it. The product speaks for itself; this is the credit line. */
  builder: { name: "Dizey Lab", url: "https://dizey.sh" },
  /**
   * Only accounts we actually run. The footer row and `sameAs` in the
   * structured data both read this list and treat it as complete, so an
   * account added here shows up in both with no other change needed.
   */
  social: {
    linkedin: "https://www.linkedin.com/company/hezarfen/",
  },
} as const;

/** The standing pages. The landing page is the site; the rest are utilities. */
export const routes = {
  home: "/",
} as const;

/**
 * Bands on the landing page, in the order they are rendered. The header nav,
 * the footer columns and the sitemap all iterate these, which is what keeps a
 * renamed section from leaving a dead link behind.
 */
export const anchors = {
  problem: "/#neden",
  products: "/#urunler",
  platform: "/#moduller",
  theory: "/#nasil-calisir",
  roles: "/#roller",
  trust: "/#guven",
  audience: "/#kimler-icin",
  about: "/#hakkimizda",
  faq: "/#sss",
  contact: "/#iletisim",
} as const;

/** `mailto:` with a subject, so a cold enquiry arrives already labelled. */
export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

/**
 * Last meaningful content change, in ISO form, for `<lastmod>` in the sitemap.
 * Kept by hand on purpose: stamping the build time would tell crawlers the
 * page changed on every deploy, and Google stops trusting the field when it
 * does. Bump it when the copy actually changes.
 */
export const pageUpdated: Record<keyof typeof routes, string> = {
  home: "2026-09-12",
};
