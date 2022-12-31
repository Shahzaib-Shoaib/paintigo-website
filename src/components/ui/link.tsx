import NextLink, { LinkProps as NextLinkProps } from "next/link";

const Link: React.FC<NextLinkProps & { className?: string, children?:any }> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
