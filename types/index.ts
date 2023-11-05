import { PortableTextBlock } from 'sanity'

export type ProfileType = {
  _id: string
  fullName: string
  profileImage: {
    alt: string
    image: string
  }
  profileGallery: {
    image: string
    alt: string
  }[]
  shortBio: string
  email: string
  fullBio: PortableTextBlock[]
  location: string
  socialLinks: string[]
  skills: string[]
  currentPosition: {
    positionName: string
    company: string
    companyURL: string
    companyIcon: {
      alt: string
      image: string
    }
  }
}

export type ProjectType = {
  _id: string
  slug: { current: string }
  title: string
  description: string
  live: string
  github: string
  status: string
  content: PortableTextBlock[]
}

export type ArticleType = {
  _id: string
  title: string
  slug: {
    current: string
  }
  content: PortableTextBlock[]
  author: {
    _ref: string
    _type: 'reference'
  }
  publishedDate: string
  excerpt: string
  relatedArticles: {
    _ref: string
    _type: 'reference'
  }[]
}
