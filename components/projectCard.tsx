import Link from "next/link";
import ArrowRightIcon from "@/public/assets/icons/arrow-right.svg";

import { ProjectType } from "@/types";
import clsx from "clsx";
import Icon from "./ui/icon";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <article className="w-full flex items-start justify-between gap-8">
      <h3 className="text-foreground/95  font-ruda w-1/3 font-semibold">
        {project.title}
      </h3>
      <p className="text-foreground/90  font-ruda w-1/2 text-sm">
        {project.description}
      </p>
      <Link
        href={`project/${project.slug.current}`}
        title="More about project"
        aria-label="More about project"
        className={clsx(
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "text-foreground hover:text-foreground/90 focus:text-foreground/90 focus:scale-90 rounded-md"
        )}
      >
        <Icon svg={ArrowRightIcon} width="25" height="25" />
      </Link>
    </article>
  );
};

export { ProjectCard };
