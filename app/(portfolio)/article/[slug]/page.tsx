import { getArticle } from '@/sanity/sanity.query'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ArticleType } from '@/types'
import { ContentViewer } from '@/components/contentViewer'
import { InternalLink } from '@/components/ui/InternalLink'
import Icon from '@/components/ui/icon'
import ArrowLeftIcon from '@/public/assets/icons/arrow-left.svg'
import { format } from 'date-fns'

type Props = {
  params: { slug: string }
}

export const generateMetadata = async (
  props: Props
): Promise<Metadata | undefined> => {
  const { params } = props
  const article: ArticleType = await getArticle(params.slug)

  if (article) {
    return {
      title: article.title,
      description: article.excerpt,
    }
  }
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const article: ArticleType = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <section className="mx-auto w-full flex flex-col justify-center items-start gap-2">
      <InternalLink
        href="/"
        variant="page"
        aria-label="Back to Home page"
        className="mr-auto self-end"
      >
        <Icon svg={ArrowLeftIcon} />
        Back
      </InternalLink>
      {article.publishedDate && (
        <p className="w-full text-foreground/60 font-ruda text-sm mb-2 text-end">
          {format(new Date(article.publishedDate), 'dd MMM yyyy')}
        </p>
      )}
      <ContentViewer content={article.content} />
    </section>
  )
}
