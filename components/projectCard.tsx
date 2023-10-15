import Link from "next/link";
import ArrowRightIcon from "@/public/assets/icons/arrow-right.svg";

import { ProjectType } from "@/types";
import clsx from "clsx";
import Icon from "./ui/icon";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <article className="w-full flex items-start justify-between gap-8">
      <h3 className="text-black dark:text-white font-ruda w-1/3 font-semibold">
        {project.title}
      </h3>
      <p className="text-neutral-800 dark:text-neutral-400 font-ruda w-1/2 text-sm">
        {project.description}
      </p>
      <Link
        href={`project/${project.slug}`}
        title="More about project"
        aria-label="More about project"
        className={clsx(
          "text-neutral-900 hover:text-neutral-600 focus:text-neutral-600 focus:bg-neutral-100 focus:scale-90 rounded-md",
          "dark:text-neutral-300 dark:hover:text-neutral-100 dark:focus:text-neutral-100 dark:focus:bg-neutral-800"
        )}
      >
        <Icon svg={ArrowRightIcon} width="25" height="25" />
      </Link>
    </article>
  );
};

export { ProjectCard };
