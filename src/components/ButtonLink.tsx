import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className="inline-flex min-h-11 items-center"
      {...restProps}
    />
  );
}
