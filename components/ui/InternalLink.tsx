import Icon from "./icon";
import clsx from "clsx";
import Link from "next/link";

interface InternalLinkI extends React.HTMLProps<HTMLAnchorElement> {
  variant: "external" | "page";
  svg?: React.FC<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  width?: string;
  height?: string;
}

const InternalLink = ({
  variant = "external",
  svg,
  children,
  href,
  className,
  width = "40",
  height = "40",
  ...props
}: InternalLinkI) => {
  return variant === "page" && href ? (
    <Link
      className={clsx(
        "text-foreground hover:text-foreground/90 focus:text-foreground/90 font-semibold p-1 rounded-md",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <a
      className={clsx(
        "text-foreground hover:text-foreground/90  focus:text-foreground/90",
        variant === "external" && "p-1 rounded-md cursor-pointer",
        className
      )}
      target="_blank"
      href={href}
      {...props}
    >
      {variant === "external" && svg ? (
        <Icon
          svg={svg}
          width={width ? width : "40"}
          height={height ? height : "40"}
        />
      ) : (
        children
      )}
    </a>
  );
};

export { InternalLink };
