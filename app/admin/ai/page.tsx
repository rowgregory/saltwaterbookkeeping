'use client'

import AdminPageHeader from '@/app/components/admin/AdminPageHeader'
import AwesomeIcon from '@/app/components/common/AwesomeIcon'
import { aiFeaturesForTestimonials } from '@/app/data/ai.data'
import useTypewriterEffect from '@/app/hooks/useTypewriterEffect'
import { arrowRightIcon, robotIcon } from '@/app/lib/icons'
import React from 'react'

const Ai = () => {
  const text = `Explore AI’s potential for testimonials—auto-summarize feedback, spotlight key quotes, and pick the best ones for your site effortlessly.`
  const speed = 20
  const typewrittenText = useTypewriterEffect(text, speed)
  return (
    <>
      <AdminPageHeader title="AI" text={typewrittenText} />
      <h2 className="text-charcoal dark:text-white text-xl font-semibold mt-10 mb-7">
        Leveraging AI to Improve and Organize Testimonials
      </h2>
      <div className="grid grid-cols-12 gap-y-7 md:gap-7 animate-fadeIn pb-20">
        {aiFeaturesForTestimonials.map((feature, i) => (
          <div
            key={i}
            className="col-span-12 lg:col-span-6 2xl:col-span-4 2000:col-span-3 p-5 rounded-2xl bg-testimonialcardlight dark:dark:bg-testimonialcard border-1 border-zinc-300 dark:border-darkgrape shadow-testimonialcardlight dark:shadow-testimonialcard group"
          >
            <div className="flex gap-x-5 justify-between mb-2">
              <h1 className="text-[21px] font-bold">{feature.title}</h1>
              <AwesomeIcon
                icon={robotIcon}
                className="w-5 h-5 text-aquablue dark:text-oceanicnocturne group-hover:animate-rotateToTwoOClock"
              />
            </div>
            <p className="mb-5 text-15">{feature.description}</p>
            <div className="flex gap-x-5">
              <div className="flex gap-x-1 whitespace-nowrap">
                <h5 className="text-xs">Use case </h5>
                <AwesomeIcon
                  icon={arrowRightIcon}
                  className="w-3 h-3 text-aquablue dark:text-oceanicnocturne"
                />
              </div>
              <h2 className="font-semibold text-sm">{feature.useCase}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Ai
