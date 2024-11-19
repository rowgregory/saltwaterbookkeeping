import Link from 'next/link'
import React from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import { arrowRightIcon } from '@/app/lib/icons'

const ArrowAnimatedLink = () => {
  return (
    <Link
      href="/contact"
      className="bg-aquablue py-2 pl-4 pr-6 flex items-center justify-between gap-x-5 group overflow-hidden relative"
    >
      <div className="relative w-10 h-10 overflow-hidden bg-darkeraquablue">
        <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full transform transition-transform duration-300 group-hover:translate-x-full">
          <AwesomeIcon icon={arrowRightIcon} className="w-5 h-5 text-white" />
        </div>
        <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
          <AwesomeIcon icon={arrowRightIcon} className="w-5 h-5 text-white" />
        </div>
      </div>
      <span className="text-white text-sm poppins-semibold">Get A Quick Quote</span>
    </Link>
  )
}

export default ArrowAnimatedLink
