'use client'

import { RootState, useAppSelector } from '@/app/redux/store'
import React, { useEffect, useRef, useState } from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import { chevronLeftIcon, chevronRightIcon, starIcon } from '@/app/lib/icons'
import AnimatedText from '../common/AnimatedText'
import { motion } from 'framer-motion'
import LogoWave from '../svg/LogoWave'
import { useFetchTestimonialsPublicQuery } from '@/app/redux/services/testimonialApi'
import Spinner from '../common/Spinner'

const TestimonialBlock = () => {
  const { testimonials } = useAppSelector((state: RootState) => state.testimonial)
  const carouselRef = useRef(null) as any
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const { data, isLoading } = useFetchTestimonialsPublicQuery()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setWindowWidth(window.innerWidth)
        setIsMobile(true)
      } else {
        setWindowWidth(window.innerWidth)
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [testimonials])

  const moveToSlide = (direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex === data?.testimomials?.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? data?.testimomials?.length - 1 : prevIndex - 1
      }
    })
  }

  const isLastSlide = currentIndex === data?.testimomials?.length - 1
  const isFirstSlide = currentIndex === 0

  return (
    <div className="h-full w-full bg-[#f1f1f1] dark:bg-deepcharcoal relative overflow-hidden">
      <div className="bg-spherelight dark:bg-spheredark bg-no-repeat bg-center bg-contain w-full h-full max-w-[500px] lg:max-w-[750px] absolute z-0 left-1/2 transform -translate-x-1/2" />
      <div className="h-full px-4 py-44 flex justify-center">
        <div className="max-w-1200 w-full mx-auto relative">
          <div className="flex items-center gap-x-4 mb-7">
            <LogoWave w="40" h="26.82" darktext="text-aquablue" />
            <span className="text-15 roboto-bold uppercase tracking-widest">Testimonials</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <AnimatedText text="Client Experiences" />

            <div
              className={`${
                data?.testimonials?.length === 0 ? 'hidden' : 'block'
              } flex items-center gap-x-3 mt-4 md:mt-0`}
            >
              <AwesomeIcon
                icon={chevronLeftIcon}
                className={`w-4 h-4 aspect-square dark:bg-midnightshadow text-midnightshadow dark:text-white p-3 rounded-full shadow-lg ${
                  isFirstSlide
                    ? 'bg-gray-200 dark:bg-[#201e25] dark:text-[#555459]'
                    : 'bg-white cursor-pointer'
                }`}
                onClick={() => (isFirstSlide ? {} : moveToSlide('prev'))}
              />
              <AwesomeIcon
                icon={chevronRightIcon}
                className={`w-4 h-4 aspect-square dark:bg-midnightshadow text-midnightshadow dark:text-white p-3 rounded-full shadow-lg ${
                  isLastSlide
                    ? 'bg-gray-200 dark:bg-[#201e25] dark:text-[#555459]'
                    : 'bg-white cursor-pointer'
                }`}
                onClick={() => (isLastSlide ? {} : moveToSlide('next'))}
              />
            </div>
          </div>
          {isLoading ? (
            <Spinner />
          ) : data?.testimonials?.length === 0 ? (
            <div className="text-sm font-medium mt-4">
              No testimonials yet—check back soon to see what people are saying!
            </div>
          ) : (
            <div className="md:mr-[-700px] mt-16">
              <div className="relative w-full mx-auto  overflow-hidden">
                <motion.div
                  ref={carouselRef}
                  className="flex gap-x-10 py-8 relative left-0"
                  drag="x"
                  dragConstraints={{ left: (data?.length - 1) * -640, right: 0 }}
                  style={{ cursor: 'grab' }}
                  animate={{
                    x: !isMobile ? -currentIndex * 640 : -currentIndex * windowWidth
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5
                  }}
                >
                  {data?.testimonials?.map((testimonial: any) => (
                    <motion.div
                      key={testimonial.id}
                      className="md:min-w-[450px] w-full md:max-w-[600px] md:aspect-[13/9] bg-white dark:bg-[#111] p-8 flex flex-col shrink-0"
                    >
                      <div className="bg-aqua-g p-3 w-fit -mt-12 mb-10 relative after:absolute after:content-[''] after:top-0 after:-left-[9px] after:h-0 after:border-r-[9px] after:border-r-aquablue after:border-t-[16px] after:border-t-transparent">
                        <div
                          style={{ backgroundImage: `url('/images/quotations.png')` }}
                          className="bg-no-repeat bg-cover bg-center w-14 h-14"
                        ></div>
                      </div>
                      <div className="flex flex-col h-full justify-between">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-x-1.5 mb-3">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <AwesomeIcon
                                key={i}
                                icon={starIcon}
                                className="w-4 h-4 text-aquablue"
                              />
                            ))}
                          </div>
                          <span className="text-lg roboto-regular text-dimgray dark:text-gray-100 mb-9 leading-relaxed">
                            {testimonial.feedback}
                          </span>
                        </div>
                        <span className="text-almostblack dark:text-white text-[22px] poppins-bold">
                          {testimonial.customerName}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TestimonialBlock
