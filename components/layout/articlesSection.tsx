import { ArticleType } from '@/types'
import { ArticleCard } from '@/components/articleCard'

const ArticlesSection = ({ articles }: { articles: ArticleType[] | null }) => {
  return (
    <section className="w-full flex flex-col items-start justify-start gap-4 mt-[4rem] max-sm:pr-4">
      <h2 className="font-ramaraja text-[#02bf8e] text-3xl w-full text-end pr-2">
        articles
      </h2>
      {articles &&
        articles.map((article) => {
          return <ArticleCard article={article} key={article._id} />
        })}
    </section>
  )
}

export { ArticlesSection }
