import { useEffect, useState } from 'react'

const useTypewriterEffect = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prevIndex) => prevIndex + 1)
      }, speed)

      return () => clearInterval(intervalId)
    }
  }, [text, index, speed])

  return displayedText
}

export default useTypewriterEffect
