'use client'

import useVideo from '@/app/hooks/useVideo'
import React from 'react'
import SlideEffectLink from '../common/SlideEffectLink'

const Hero = () => {
  const { videoRef } = useVideo()

  return (
    <div className="w-full relative">
      <video
        ref={videoRef}
        className="w-full min-h-96 max-h-[900px] fade-in block object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-0 top-0 left-0 flex-col w-full min-h-96 h-full max-h-[900px] flex justify-center bg-[#1c1c1c]/20">
        <div className="max-w-1200 w-full mx-auto px-3 xl:px-0 flex flex-col gap-5">
          <h1 className="clip-slide-down hidden sm:block mb-5 text-white roboto-bold text-2xl">
            Bookkeeping Made Easy
          </h1>
          <p className="clip-slide-down mb-10 border-l-4 border-l-graphite pl-12 scale-in w-fit text-white text-3xl sm:text-4xl lg:text-6xl xl:text-7xl poppins-bold">
            Accurate,
            <br /> hassle-free solutions <br /> for your business.
          </p>
          <SlideEffectLink linkKey="/contact" linkText="Contact Us" />
        </div>
      </div>
    </div>
  )
}

export default Hero
