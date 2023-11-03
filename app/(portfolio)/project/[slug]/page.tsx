import { InternalLink } from '@/components/ui/InternalLink'
import ExternalIcon from '@/public/assets/icons/external.svg'
import GithubIcon from '@/public/assets/icons/github-project.svg'
import { getProject } from '@/sanity/sanity.query'
import { ProjectType } from '@/types'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ContentViewer } from '@/components/contentViewer'

type Props = {
  params: { slug: string }
}

export const generateMetadata = async (
  props: Props
): Promise<Metadata | undefined> => {
  const { params } = props
  const project: ProjectType = await getProject(params.slug)

  if (project) {
    return {
      title: project.title,
      description: project.description,
    }
  }
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project: ProjectType = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="mx-auto w-full flex flex-col justify-center items-start gap-2">
      <div className="w-full flex flex-wrap justify-between items-center gap-2 p-2">
        <div>
          <h1 className="text-foreground text-2xl font-ruda font-bold">
            {project.title}
          </h1>
          <p className="text-foreground/80 leading-5 font-ruda">
            {project.description}
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
      <ContentViewer content={project.content} />
      <div className="flex items-center justify-center gap-2 mt-8">
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
    </section>
  )
}
