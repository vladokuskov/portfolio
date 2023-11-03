import { PortableTextBlock } from 'sanity'
import clsx from 'clsx'
import { PortableText } from '@portabletext/react'

const ContentViewer = ({ content }: { content: PortableTextBlock[] }) => {
  return (
    <div
      className={clsx(
        'w-full flex flex-col justify-center items-start !max-w-[90ch]',
        'prose font-poppins prose-base prose-img:rounded-md prose-headings:mt-4 prose-headings:font-inter prose-neutral',
        'prose-strong:text-foreground prose-a:text-yellow-400 prose-headings:text-foreground prose-p:text-foreground/95 prose-p:tracking-wider prose-li:text-foreground/95 prose-ul:text-foreground/95 '
      )}
    >
      <PortableText value={content} />
    </div>
  )
}

export { ContentViewer }
