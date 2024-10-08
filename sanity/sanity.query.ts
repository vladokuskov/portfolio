import { groq } from 'next-sanity'
import client from './sanity.client'

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
      skills,
      currentPosition {
        positionName,
        company,
        companyURL,
        companyIcon {alt, "image": asset->url}
      }
    }`
  )
}

export async function getProjectsList() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      slug,
      title,
      description,
    }`
  )
}

export async function getProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      slug,
      title,
      description,
      live,
      github,
      content,
    }`,
    { slug }
  )
}

export async function getArticleList() {
  return client.fetch(
    groq`*[_type == "article"]{
      _id,
      slug,
      title,
      author,
      publishedDate,
      excerpt,
    }`
  )
}

export async function getArticle(slug: string) {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      slug,
      title,
      content,
      author,
      publishedDate,
      excerpt,
      relatedArticles,
    }`,
    { slug }
  )
}
