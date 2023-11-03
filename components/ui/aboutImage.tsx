'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

type AboutImage = {
  src: string
  alt: string
  label: string
}

const AboutImage = ({ src, alt, label }: AboutImage) => {
  const [isHovering, setIsHovered] = useState(false)

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <div
      className="relative min-w-[15rem] ease-in rounded-md w-[15em] h-[15rem] min-h-[15rem] bg-neutral-800 cursor-help"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="bg-gray-400 object-cover rounded-md"
      />
      <span
        className={clsx(
          'absolute cursor-default text-neutral-100 dark:text-neutral-200 bg-gray-500 rounded-md p-1 text-sm font-semibold top-2 left-1/2 -translate-x-1/2 transition-opacity',
          isHovering ? 'opacity-95' : 'opacity-0'
        )}
      >
        {label}
      </span>
    </div>
  )
}

export default AboutImage
