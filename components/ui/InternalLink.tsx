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
        "text-neutral-800 hover:text-neutral-600 focus:text-neutral-600 focus:bg-neutral-100 font-semibold p-1 rounded-md",
        "dark:text-neutral-400 dark:hover:text-neutral-50 dark:focus:text-neutral-50 dark:focus:bg-neutral-800",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <a
      className={clsx(
        "text-neutral-900 hover:text-neutral-600 focus:text-neutral-600 focus:bg-neutral-100",
        "dark:text-neutral-300 dark:hover:text-neutral-100 dark:focus:text-neutral-100 dark:focus:bg-neutral-800 ",
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
