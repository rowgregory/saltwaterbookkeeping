import React, { FC } from 'react'
import Picture from '../common/Picture'
import Breadcrumb from '../common/Breadcrumb'

interface HeroProps {
  src: string
  title: string
}

const Hero: FC<HeroProps> = ({ src, title }) => {
  return (
    <div className="relative w-full h-60 sm:h-96">
      <Picture
        src={src}
        alt="Saltwater Bookkeeping"
        className="w-full h-full object-cover"
        priority={true}
      />
      <div
        className="absolute z-10 top-1/2 bg-black/40 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full 
      h-full flex justify-center px-3"
      >
        <div className="max-w-screen-md mx-auto w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-center">
            {title}
          </h1>
          <Breadcrumb breadcrumb={title} />
        </div>
      </div>
    </div>
  )
}

export default Hero
