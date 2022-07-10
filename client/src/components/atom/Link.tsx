import NextLink from "next/link";
import { Link as NULink, LinkProps as NULinkProps } from "@nextui-org/react";

export type LinkProps = Omittable<SomeRequired<NULinkProps, "href">, "icon">;

export const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <NULink {...props}>{children}</NULink>
    </NextLink>
  );
};
