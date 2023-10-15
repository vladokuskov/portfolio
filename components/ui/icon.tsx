import React from "react";
import clsx from "clsx";

type Icon = {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: string;
  height?: string;
  className?: string;
};

const Icon = ({
  svg: Icon,
  width = "24",
  height = "24",
  className = "",
}: Icon) => {
  if (Icon && typeof Icon === "function") {
    return (
      <span className={clsx("flex items-center justify-center", className)}>
        <Icon width={width} height={height} />
      </span>
    );
  } else return <></>;
};

export default Icon;
