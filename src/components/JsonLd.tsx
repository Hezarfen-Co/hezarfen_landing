import { useHead } from "@solidjs/meta";
import { createUniqueId } from "solid-js";

/**
 * Emits a `application/ld+json` block into the head. `@solidjs/meta` ships no
 * `<Script>` of its own, but `useHead` takes any tag — `close` renders the
 * children between an opening and closing tag, and escaping stays off so the
 * JSON is not entity-encoded on the way out.
 */
export default function JsonLd(props: { data: object }) {
  useHead({
    tag: "script",
    props: {
      type: "application/ld+json",
      get children() {
        // A literal `<` inside a string would let the payload close the script
        // element early; JSON keeps its meaning with the escape in place.
        return JSON.stringify(props.data).replace(/</g, "\\u003c");
      },
    },
    setting: { close: true },
    id: createUniqueId(),
  });

  return null;
}
