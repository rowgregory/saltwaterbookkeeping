import React from 'react'
import Picture from '../common/Picture'
import AnimatedText from '../common/AnimatedText'
import { whoWeAre } from '@/app/data/elements.data'
import LogoWave from '../svg/LogoWave'

const WhoWeAre = () => {
  return (
    <div className="px-4 mb-24">
      <div className="max-w-1200 mx-auto w-full py-32 flex flex-col lg:flex-row gap-y-10 md:gap-10">
        <div className="who-we-are-img flex-1"></div>
        <div className="flex-1">
          <div className="flex items-center gap-x-4 mb-7">
            <LogoWave w="40" h="26.82" darktext="text-aquablue" />
            <span className="text-15 roboto-bold uppercase tracking-widest">Who We Are</span>
          </div>
          <AnimatedText text="Here to guide you through every wave of life" />
          <h2 className="mt-5 poppins-semibold text-aquablue bg-[#f2fcfc] dark:bg-[#0A1017] p-5 border-l-4 border-l-aquablue mb-8">
            Saltwater Bookkeeping, founded by a seasoned software engineer, is a new venture
            dedicated to delivering efficient and personalized financial solutions with a foundation
            of technical expertise and problem-solving skills.
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-y-5 sm:gap-x-5 mb-10">
            {whoWeAre.map((data, i) => (
              <div key={i} className=" flex items-center gap-x-4 relative group">
                <div className="absolute sm:bg-gray-100 sm:dark:bg-[#343434] flex items-center justify-center w-8 h-8 rounded-full z-0 duration-200 ease-in-out  sm:-translate-x-4 sm:group-hover:translate-x-0"></div>
                {data.icon}

                <span className="poppins-medium">{data.text}</span>
              </div>
            ))}
          </div>
          <span className="leading-7 roboto-regular text-dimgray">
            Accurate bookkeeping is essential to your company’s long-term viability. Experienced,
            affordable, and reliable, we serve a variety of industries and clients from
            self-employed home-based business owners to small and medium-sized businesses with
            employees.
          </span>
          <div className="flex items-center mt-6 gap-x-3">
            <div className="bg-aqua-g overflow-hidden w-14 h-14 rounded-full flex items-center justify-center">
              <Picture
                src="/images/pam.png"
                alt="CEO Saltwater Bookkeeping"
                className="w-14 h-14"
                priority={false}
              ></Picture>
            </div>
            <div className="roboto-regular text-dimgray ">CEO, Saltwater Bookkeeping</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
