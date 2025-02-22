import { useState, useRef } from 'react'
import AwesomeIcon from './common/AwesomeIcon'
import { starIcon } from '../lib/icons'

interface RatingProps {
  rating: any
  setInputs: any
}

const RatingComponent: React.FC<RatingProps> = ({ rating, setInputs }) => {
  const [hoveredRating, setHoveredRating] = useState(0)
  const starRefs = useRef<(HTMLDivElement | null)[]>(Array(5).fill(null))

  const handleClick = (index: number) => {
    setInputs((prev: any) => ({ ...prev, rating: index + 1 }))
  }

  const handleMouseEnter = (index: number) => {
    setHoveredRating(index + 1) // Set hovered rating on mouse enter
  }

  const handleMouseLeave = () => {
    setHoveredRating(0) // Reset hovered rating on mouse leave
  }

  const handleTouchStart = (index: number) => {
    setInputs((prev: any) => ({ ...prev, rating: index + 1 }))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    // Calculate the position of touch and update hovered rating accordingly
    const touchPosition = e.touches[0].clientX
    const newRating = Math.min(Math.max(0, Math.floor(touchPosition / 60)), 4)
    setHoveredRating(newRating + 1)
  }

  const handleTouchEnd = () => {
    setHoveredRating(0) // Reset on touch end
  }

  return (
    <div
      className="rating-container flex space-x-2 cursor-pointer"
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleTouchEnd}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          ref={(el: any) => (starRefs.current[index] = el)}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          className={`star w-10 h-10 flex items-center justify-center ${
            index < (hoveredRating || rating) ? 'filled' : ''
          }`}
          onTouchStart={() => handleTouchStart(index)}
          onTouchMove={handleTouchMove}
        >
          <AwesomeIcon
            icon={starIcon}
            className={` ${
              index < (hoveredRating || rating)
                ? 'text-aquablue dark:text-lime-400'
                : 'text-gray-300 dark:text-darkgrape'
            }`}
          />
        </div>
      ))}
    </div>
  )
}

export default RatingComponent
