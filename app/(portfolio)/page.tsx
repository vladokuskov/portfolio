import { InternalLink } from "@/components/ui/InternalLink";
import Icon from "@/components/ui/icon";
import ArrowRightIcon from "@/public/assets/icons/arrow-right.svg";
import HeroImage from "@/public/face_logo.svg";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

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
    </>
  );
}
