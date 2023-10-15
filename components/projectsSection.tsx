import { ProjectType } from "@/types";
import { ProjectCard } from "./projectCard";

const ProjectsSection = ({ projects }: { projects: ProjectType[] | null }) => {
  return (
    <section className="w-full max-w-lg flex flex-col items-start justify-start gap-4 mt-[8rem] max-sm:pr-4">
      <h2 className="font-ramaraja text-[#daa85d] dark:text-[#FFE5BD] text-3xl">
        projects
      </h2>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="flex justify-between w-full border-b-2 border-b-neutral-500 pb-2">
          <h4 className="text-black dark:text-white font-ruda w-2/3 text-2xl font-semibold">
            TITLE
          </h4>
          <h4 className="text-black dark:text-white font-ruda w-full text-2xl font-semibold">
            DESCRIPTION
          </h4>
        </div>
        {projects &&
          projects.map((project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
      </div>
    </section>
  );
};

export { ProjectsSection };
