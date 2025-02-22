'use client'

import React from 'react'
import AnimatedText from '../common/AnimatedText'
import useVideo from '@/app/hooks/useVideo'
import Video from '../Video'

const TailoredSolutions = () => {
  const { videoRef } = useVideo()

  return (
    <div className="relative w-full text-white">
      <Video
        videoRef={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/t-s-vid.mp4"
      />
      <div className="relative flex justify-center items-center w-full h-full py-28 z-10 px-4">
        <div className="max-w-1200 w-full mx-auto grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div
              style={{ backgroundImage: `url('/images/t-s.png')` }}
              className="bg-contain bg-no-repeat bg-center w-full max-w-xl h-full aspect-square"
            ></div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <AnimatedText text="Bookkeeping on the North Shore" />
            <span className="roboto-regular leading-7 mt-8">
              Accurate bookkeeping is essential to your company&apos;s long-term viability.
              Experienced, affordable, and reliable, we serve a variety of industries and clients
              from self-employed home-based business owners to small and medium-sized businesses
              with employees. When you outsource your bookkeeping services to us you get one on one
              personalized service and state of the art technology software.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TailoredSolutions
