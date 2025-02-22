'use client'

import useAnimateTextOnScroll from '@/app/hooks/useAnimateTextOnScroll'
import { FC } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: FC<AnimatedTextProps> = ({ text, className }) => {
  const { containerRef, visible, words } = useAnimateTextOnScroll(text)

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
            transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
          }}
        >
          <span className="text-4xl sm:text-5xl poppins-bold leading-[60px]">{word}&nbsp;</span>
        </span>
      ))}
    </div>
  )
}

export default AnimatedText
