'use client'

import React from 'react'
import AnimatedText from '../common/AnimatedText'
import useVideo from '@/app/hooks/useVideo'

const TailoredSolutions = () => {
  const { videoRef } = useVideo()

  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/t-s-vid.mp4" type="video/mp4" />
      </video>
      <div className="relative flex justify-center items-center w-full h-full py-28 z-10 px-4">
        <div className="max-w-1200 w-full mx-auto grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div
              style={{ backgroundImage: `url('/images/t-s.png')` }}
              className="bg-contain bg-no-repeat bg-center w-full max-w-xl h-full aspect-square"
            ></div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col">
            <AnimatedText text="Tailored Financial Strategies Just for You" />
            <span className="roboto-regular leading-7 mt-8">
              Accurate bookkeeping is essential to your company’s long-term viability. Experienced,
              affordable, and reliable, we serve a variety of industries and clients from
              self-employed home-based business owners to small and medium-sized businesses with
              employees. When you outsource your bookkeeping services to us you get one on one
              personalized service and state of the art technology software.
            </span>
            <div className="flex mt-10 gap-x-10">
              <div className="w-40 h-40 p-5 bg-darkeraqua-g rounded-2xl flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <div className="text-7xl poppins-bold">25</div>
                  <span className="poppins-regular">Years of Experience</span>
                </div>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col">
                  <div className="text-lg poppins-bold mb-1">100% Secure</div>
                  <div className="text-sm roboto-regular">
                    With over four decades of <br /> experience providing solutions
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg poppins-bold mb-1">100% Secure</div>
                  <div className="text-sm roboto-regular">
                    With over four decades of <br /> experience providing solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TailoredSolutions
