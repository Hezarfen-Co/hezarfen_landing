import { tr } from "./tr";

/**
 * Every string on the site, in one place. The site is Turkish only, so this
 * is a plain module rather than a provider: there is no locale to resolve, no
 * cookie to read and nothing to re-render when it changes. Components import
 * `t` and read it like the object it is.
 *
 * The copy still lives apart from the components that render it, because that
 * is what makes it possible to read the whole site's voice in one file.
 */
export const t = tr;

export type Dictionary = typeof tr;
