import Link from 'next/link'
import { format } from 'date-fns'

import { ArticleType } from '@/types'

const ArticleCard = ({ article }: { article: ArticleType }) => {
  return (
    <Link
      href={`article/${article.slug.current}`}
      title={`Read about ${article.title}`}
      aria-label={`Read about ${article.title}`}
      className="w-full max-w-md"
    >
      <article className="w-full flex flex-col items-start center gap-1 text-base">
        <h3 className="w-full text-foreground/95 font-poppins font-semibold">
          {article.title}
        </h3>
        {article.publishedDate && (
          <p className="w-full text-foreground/60 font-ruda text-sm">
            {format(new Date(article.publishedDate), 'dd MMM yyyy')}
          </p>
        )}
        <p className="w-full text-foreground/60 font-ruda text-sm">
          {article.excerpt.length > 120
            ? article.excerpt.slice(0, 120) + '...'
            : article.excerpt}
        </p>
      </article>
    </Link>
  )
}

export { ArticleCard }
