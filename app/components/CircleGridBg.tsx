import React, { useEffect, useRef } from 'react'

const CircleGridBg = () => {
  const containerRef = useRef(null) as any

  const updateGrid = () => {
    const container = containerRef.current
    const circleSize = 4 // Each circle's size in px
    const gap = 24 // Space between circles

    // Clear existing circles
    container.innerHTML = ''

    // Calculate how many circles fit on the screen
    const width = window.innerWidth
    const height = window.innerHeight
    const cols = Math.floor(width / (circleSize + gap)) + 2
    const rows = Math.floor(height / (circleSize + gap)) + 2

    // Generate grid of circles
    container.style.display = 'grid'
    container.style.gridTemplateColumns = `repeat(${cols}, ${circleSize}px)`
    container.style.gridTemplateRows = `repeat(${rows}, ${circleSize}px)`
    container.style.gap = `${gap}px`

    for (let i = 0; i < cols * rows; i++) {
      const circle = document.createElement('div')
      circle.className = 'w-0.5 h-0.5 bg-black/10 dark:bg-white/10 rounded-full'
      container.appendChild(circle)
    }
  }

  useEffect(() => {
    updateGrid() // Initial grid setup

    // Add resize event listener
    window.addEventListener('resize', updateGrid)

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateGrid)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-duskypalm w-full h-dvh fixed inset-0 -z-10 overflow-hidden"
    ></div>
  )
}

export default CircleGridBg
