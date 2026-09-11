import Seo from "~/components/Seo";
import Hero from "~/components/home/Hero";
import {
  About,
  Audience,
  Contact,
  Faq,
  Platform,
  Problem,
  Products,
  Roles,
  Theory,
  Trust,
} from "~/components/home/Sections";
import { routes, site } from "~/config";
import { t } from "~/i18n";
import { faqPage, productList } from "~/lib/schema";

/**
 * The landing page is the site: one stack of bands, in the order a kurum
 * müdürü asks the questions — what is wrong today, what the products are,
 * what is inside the platform, how it works, who sees what, what keeps the
 * AI honest, who it is for, what it is, and the six things asked before a
 * demo — closing on the single brand panel before the footer.
 */
export default function Home() {
  const url = () => `${site.url}${routes.home}`;

  return (
    <>
      <Seo
        title={t.meta.homeTitle}
        description={t.meta.homeDescription}
        full
        schema={[productList(t, url()), faqPage(t, url())]}
      />
      {/* Bands alternate white and the off-white ground, so a section
          boundary is a change of surface rather than a rule. */}
      <Hero />
      <Problem />
      <Products />
      <Platform />
      <Theory />
      <Roles />
      <Trust />
      <Audience />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
