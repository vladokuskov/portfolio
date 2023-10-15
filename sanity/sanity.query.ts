import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      profileImage {alt, "image": asset->url},
      profileGallery[] {"alt": alt, "image": asset},
      shortBio,
      location,
      fullBio,
      email,
      socialLinks,
      skills
    }`
  );
}
