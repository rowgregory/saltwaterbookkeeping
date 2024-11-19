import { highlightCards } from '@/app/data/home.data'
import React from 'react'
import HighlightCard from './HighlightCard'

const HighlightCards = () => {
  return (
    <div className="bg-almostblack pb-20">
      <div className="px-3 pt-16 md:pt-0 md:-mt-24 relative z-40">
        <div className="max-w-screen-1200 w-full mx-auto grid grid-cols-12 gap-y-8 md:gap-8 ">
          {highlightCards.map((card, i) => (
            <HighlightCard key={i} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HighlightCards
