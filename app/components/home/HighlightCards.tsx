import React from 'react'
import HighlightCard from './HighlightCard'
import Link from 'next/link'
import AwesomeIcon from '../common/AwesomeIcon'
import { arrowRightIcon } from '@/app/lib/icons'
import services from '@/app/data/services.data'

const HighlightCards = () => {
  return (
    <div className="bg-almostblack pb-20">
      <div className="px-4 pt-16 md:pt-0 md:-mt-24 relative z-40">
        <div className="max-w-screen-1200 w-full mx-auto grid grid-cols-12 gap-y-8 md:gap-8 ">
          {services
            .map((service, i) => <HighlightCard key={i} card={service} />)
            .reverse()
            .filter((_: any, i: number) => i < 3)}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link
          href="/services"
          className="text-white roboto-bold flex items-center gap-x-3 w-fit group"
        >
          Businesses and individuals rely on our services.{' '}
          <span className="flex items-center gap-x-2 text-sm text-aquablue">
            All Services{' '}
            <AwesomeIcon
              icon={arrowRightIcon}
              className="w-3 h-3 group-hover:translate-x-2 duration-200 group-hover:rotate-[360deg]"
            />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HighlightCards
