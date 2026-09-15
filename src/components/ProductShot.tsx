import { products, type ProductShotName } from "~/lib/product-shots";

type Props = {
  name: ProductShotName;
  /** The hero shot is the largest paint on the page: load it first. */
  priority?: boolean;
  class?: string;
};

/**
 * A screenshot of the real frontend inside a thin browser frame.
 *
 * The frame is what tells a visitor this is the product and not a mock: an
 * address bar with the page's path, nothing else. Width and height come from
 * the image itself, so the card reserves its space before the file arrives
 * and the page does not shift under the reader.
 */
export default function ProductShot(props: Props) {
  const shot = () => products[props.name];

  return (
    <figure class={`hz-shot ${props.class ?? ""}`}>
      <div class="hz-shot-bar" aria-hidden="true">
        <span class="hz-shot-dots">
          <i />
          <i />
          <i />
        </span>
        <span class="hz-shot-url">{shot().url}</span>
      </div>
      <img
        src={shot().src}
        alt={shot().alt}
        width={shot().width}
        height={shot().height}
        loading={props.priority ? "eager" : "lazy"}
        fetchpriority={props.priority ? "high" : "auto"}
        decoding="async"
      />
    </figure>
  );
}
