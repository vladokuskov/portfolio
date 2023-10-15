import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  profileImage: {
    alt: string;
    image: string;
  };
  profileGallery: {
    image: string;
    alt: string;
  }[];
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  socialLinks: string[];
  skills: string[];
};

export type ProjectType = {
  _id: string;
  slug: { current: string };
  title: string;
  description: string;
  live: string;
  github: string;
  status: string;
  content: PortableTextBlock[];
};
