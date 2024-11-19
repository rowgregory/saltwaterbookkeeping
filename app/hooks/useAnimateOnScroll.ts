'use client'

import { useState, useEffect, useRef } from 'react'

const useAnimateOnScroll = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const refs = useRef<Element[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement

          if (entry.isIntersecting) {
            const index = refs.current.indexOf(target)
            if (index !== -1) {
              setVisibleItems((prev) => new Set(prev).add(index))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return { refs, visibleItems }
}

export default useAnimateOnScroll
