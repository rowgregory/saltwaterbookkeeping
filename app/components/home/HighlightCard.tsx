import React, { FC } from 'react'
import Link from 'next/link'
import ArrowAnimatedLink from '../common/ArrowAnimated'

interface HightlightCardProps {
  card: { img: string; icon: string; title: string }
}

const HighlightCard: FC<HightlightCardProps> = ({ card }) => {
  return (
    <Link
      href="/services"
      className="staggered-animation card-container col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center group"
    >
      <div className="w-full overflow-hidden">
        <div
          style={{ backgroundImage: `url(${card.img})` }}
          className="bg-cover bg-no-repeat w-full aspect-[16/10] relative"
        >
          <div className="wave-container">
            <div className="wave-inner-container">
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full sm:w-5/6 bg-graphite h-28 -mt-16 flex items-center justify-between gap-5 p-4 sm:p-7 relative z-40 overflow-hidden
      before:absolute before:content-[''] before:top-0 before:-left-3 before:bg-aqua-g before:w-20 before:h-40 before:skew-x-[20deg]
      before:z-0
      `}
      >
        <div className="grid grid-cols-12 gap-x-3 relative z-10">
          <span className="col-span-4 h-14 w-14 border-[3px] border-[#343434] rounded-full bg-aquablue flex items-center justify-center">
            <div
              style={{ backgroundImage: `url(${card.icon})` }}
              className="w-8 h-8 bg-cover bg-no-repeat"
            ></div>
          </span>
          <span className="col-span-8 poppins-bold text-17 sm:text-lg max-w-28">{card.title}</span>
        </div>
        <ArrowAnimatedLink />
      </div>
    </Link>
  )
}

export default HighlightCard
