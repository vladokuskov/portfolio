import { LinksSection } from "@/components/linksSection";
import { ProjectsSection } from "@/components/projectsSection";
import { InternalLink } from "@/components/ui/InternalLink";
import Icon from "@/components/ui/icon";
import ArrowRightIcon from "@/public/assets/icons/arrow-right.svg";
import HeroImage from "@/public/face_logo.svg";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  const projects = null;

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[22rem] mx-auto">
        <HeroImage
          width={500}
          className="dark:text-white absolute text-neutral-800 max-w-[17rem] w-full z-10 left-0"
        />
        <h1 className=" text-black z-20 dark:text-white font-ruda text-3xl max-sm:text-2xl max-w-[40rem] mt-[22rem] ml-[10rem] max-sm:ml-6 min-w-[15rem]">
          {profile[0].shortBio}
        </h1>
        <InternalLink
          href="/about"
          variant="page"
          aria-label="Go to About me page"
          className="self-end"
        >
          More
          <Icon svg={ArrowRightIcon} />
        </InternalLink>
      </section>
      <div className="w-full flex justify-center gap-[20rem] items-center max-md:flex-col max-lg:gap-8 max-lg:justify-between px-[6rem] max-md:px-0">
        <ProjectsSection projects={projects} />
        <LinksSection links={profile[0].socialLinks} />
      </div>
    </>
  );
}
