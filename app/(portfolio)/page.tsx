import { LinksSection } from '@/components/layout/linksSection'
import { ProjectsSection } from '@/components/layout/projectsSection'
import { InternalLink } from '@/components/ui/InternalLink'
import Icon from '@/components/ui/icon'
import ArrowRightIcon from '@/public/assets/icons/arrow-right.svg'
import HeroImage from '@/public/face_logo.svg'
import {
  getArticleList,
  getProfile,
  getProjectsList,
} from '@/sanity/sanity.query'
import type { ArticleType, ProfileType, ProjectType } from '@/types'
import { ArticlesSection } from '@/components/layout/articlesSection'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/sanity.client'

export default async function Home() {
  const profile: ProfileType[] = await getProfile()

  const projects: ProjectType[] = await getProjectsList()

  const articles: ArticleType[] = await getArticleList()

  const currentPosition = profile[0].currentPosition

  const builder = imageUrlBuilder(client)

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[22rem] mx-auto">
        <HeroImage
          width={500}
          className="absolute text-foreground max-w-[17rem] w-full z-10 left-0"
        />
        <h1 className="text-foreground font-ruda text-3xl max-sm:text-2xl max-w-[40rem] mt-[22rem] ml-[10rem] max-sm:ml-6 min-w-[15rem]">
          {profile[0].shortBio}
        </h1>
        <div className="w-full flex gap-2 items-center justify-center mt-4">
          <h2 className="text-foreground/80">
            Works as a{' '}
            <span className="text-foreground">
              {currentPosition.positionName}
            </span>{' '}
            at{' '}
            <span className="text-foreground">{currentPosition.company}</span>
          </h2>
          <Image
            src={builder.image(currentPosition.companyIcon.image).url()}
            width={15}
            height={15}
            alt={currentPosition.companyIcon.alt}
          />
        </div>

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
      <div className="w-full flex justify-between items-center max-md:flex-col max-md:px-0">
        <ProjectsSection projects={projects} />
        <LinksSection links={profile[0].socialLinks} />
      </div>
      <ArticlesSection articles={articles} />
    </>
  )
}
