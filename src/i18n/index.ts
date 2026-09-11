import { tr } from "./tr";
import { trPages } from "./tr-pages";

/**
 * Every string on the site, in one object. The site is Turkish only, so this
 * is a plain module rather than a provider: there is no locale to resolve, no
 * cookie to read and nothing to re-render when it changes. Components import
 * `t` and read it like the object it is.
 *
 * The copy still lives apart from the components that render it, because that
 * is what makes it possible to read the whole site's voice in two files: the
 * landing page in `tr.ts`, the two standing pages in `tr-pages.ts`.
 */
export const t = { ...tr, ...trPages };

export type Dictionary = typeof t;
