import React from 'react'
import AwesomeIcon from './AwesomeIcon'
import { arrowRightIcon } from '@/app/lib/icons'

const ArrowAnimated = () => {
  return (
    <div className="relative w-10 h-10 overflow-hidden bg-darkeraquablue">
      <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full transform transition-transform duration-300 group-hover:translate-x-full">
        <AwesomeIcon icon={arrowRightIcon} className="w-5 h-5 text-white" />
      </div>
      <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
        <AwesomeIcon icon={arrowRightIcon} className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}

export default ArrowAnimated
