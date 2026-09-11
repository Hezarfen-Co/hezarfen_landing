import { A } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import Seo from "./Seo";
import { MissingPageIllustration } from "./illustrations/edu";
import { PixelArrowRight } from "./icons/pixel";
import { routes } from "~/config";
import { t } from "~/i18n";

export default function NotFound() {
  return (
    <>
      <HttpStatusCode code={404} />
      <Seo title={t.notFound.title} description={t.notFound.subtitle} />

      <section class="hz-404">
        <MissingPageIllustration />
        <h1 class="hz-h2">{t.notFound.title}</h1>
        <p class="hz-lead">{t.notFound.subtitle}</p>
        <A href={routes.home} class="hz-btn hz-btn-ghost mt-2">
          {t.notFound.action}
          <PixelArrowRight aria-hidden="true" />
        </A>
      </section>
    </>
  );
}
