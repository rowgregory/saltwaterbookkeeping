import { useState, useEffect, useRef } from 'react'

const useAnimateTextOnScroll = (text: string) => {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const words = text.split(' ')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          } else {
            setVisible(false)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return { containerRef, visible, words }
}

export default useAnimateTextOnScroll
