import { InternalLink } from "@/components/ui/InternalLink";
import AboutImage from "@/components/ui/aboutImage";
import Icon from "@/components/ui/icon";
import ArrowLeftIcon from "@/public/assets/icons/arrow-left.svg";
import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";

export const metadata = { title: `About me` };

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  const builder = imageUrlBuilder(client);

  const profileGalleryImages = profile[0].profileGallery
    ? profile[0].profileGallery.map((item) => ({
        url: builder.image(item.image).url(),
        alt: item.alt,
      }))
    : null;

  return (
    <>
      <Head>
        <title>Vladyslav Okuskov</title>
      </Head>
      <section className="flex flex-col w-full items-center justify-start max-w-4xl min-h-[75vh] mx-auto">
        <InternalLink
          href="/"
          variant="page"
          aria-label="Back to Home page"
          className="mr-auto self-end"
        >
          <Icon svg={ArrowLeftIcon} />
          Back
        </InternalLink>
        <div className="w-full flex items-start flex-row-reverse justify-center gap-4 max-md:flex-col my-8 ">
          <AboutImage
            src={profile[0].profileImage.image}
            alt="Picture of author"
            label={profile[0].profileImage.alt}
          />
        </div>
        <div className="font-ruda my-2 text-foreground">
          <PortableText value={profile[0].fullBio} />
        </div>
        <p className="text-foreground/80 font-ruda tracking-wide my-8  mr-auto ">
          Shhh.. some of my photos right there :)
        </p>
        <div className="w-full flex flex-wrap flex-auto items-start justify-center gap-8">
          {profileGalleryImages &&
            profileGalleryImages.map((image) => {
              return (
                <AboutImage
                  src={image.url}
                  key={image.url}
                  alt="Picture of author"
                  label={image.alt}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}
