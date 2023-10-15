import { InternalLink } from "@/components/ui/InternalLink";
import ExternalIcon from "@/public/assets/icons/external.svg";
import GithubIcon from "@/public/assets/icons/github-project.svg";
import { getProject } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project: ProjectType = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto w-full flex flex-col justify-center items-start gap-2">
      <div className="w-full flex flex-wrap justify-between items-center gap-2 p-2 rounded-md border-2 border-neutral-700">
        <div>
          <h1 className="text-foreground text-2xl font-ruda font-bold">
            {project.title}
          </h1>
          <p className="text-foreground/80 leading-5 font-ruda">
            {project.description}
          </p>
          <p className="text-foreground/60 leading-5 font-ruda mt-1">
            Status: <span className="text-blue-400">{project.status}</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <InternalLink
            variant="external"
            href={project.github}
            svg={GithubIcon}
            width="30"
            height="30"
            aria-label="Go to github repository"
          >
            Github
          </InternalLink>
          <InternalLink
            variant="external"
            href={project.live}
            svg={ExternalIcon}
            width="30"
            height="30"
            aria-label="Go to live website"
          >
            Live
          </InternalLink>
        </div>
      </div>
      <div
        className={clsx(
          "w-full flex flex-col justify-center items-start !max-w-[90ch]",
          "prose font-roboto prose-base prose-img:rounded-md prose-headings:mt-4 prose-headings:font-inter prose-neutral",
          "prose-strong:text-foreground prose-a:text-yellow-400 prose-headings:text-foreground prose-p:text-foreground/95 prose-li:text-foreground/95 prose-ul:text-foreground/95 "
        )}
      >
        <PortableText value={project.content} />
      </div>
    </section>
  );
}
