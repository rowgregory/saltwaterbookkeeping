'use client'

import React from 'react'
import AdminPageHeader from '@/app/components/admin/AdminPageHeader'
import Spinner from '@/app/components/common/Spinner'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import { setOpenModal, Testimonial } from '@/app/redux/features/testimonialSlice'
import { useFetchTestimonialsPrivateQuery } from '@/app/redux/services/testimonialApi'
import AwesomeIcon from '@/app/components/common/AwesomeIcon'
import { arrowRightIcon } from '@/app/lib/icons'
import AdminTestimonialCard from '@/app/components/admin/AdminTestimonialCard'
import useSoundManager from '@/app/hooks/useSoundManager'

const AdminTestimonials = () => {
  const dispatch = useAppDispatch()
  const { isLoading, error, data } = useFetchTestimonialsPrivateQuery()
  const user = useAppSelector((state: RootState) => state.user)
  const { playBubbles } = useSoundManager(user.isSoundEffectsOn)

  return (
    <>
      <AdminPageHeader
        title="Testimonials"
        text={`Need to tweak your testimonials? Just add, edit, or remove with a few clicks—it’s that simple. See the trash can? Activate it, and the testimonial vanishes into the cosmic void. Want to control whether the testimonials are visible to the public? The big switch toggles between showing them off or keeping them in orbit.`}
      />
      <button
        className="text-aquablue hover:text-tealbreeze dark:text-violetember dark:hover:text-oceanicnocturne duration-300 font-semibold flex items-center gap-x-1.5 group mt-10 mb-7"
        onClick={() => {
          playBubbles()
          dispatch(setOpenModal())
        }}
      >
        Create testimonial
        <AwesomeIcon
          icon={arrowRightIcon}
          className="w-3.5 h-3.5 duration-200 -rotate-45 group-hover:-rotate-90 text-aquablue hover:text-tealbreeze dark:text-violetember dark:hover:text-oceanicnocturne"
        />
      </button>
      {isLoading ? (
        <div className="overflow-hidden">
          <div className="bg-transparent fixed w-full inset-0 flex items-center justify-center z-50">
            <Spinner wAndH="w-10 h-10" />
          </div>
        </div>
      ) : error ? (
        <div className="text-sm text-red-500 text-medium">{error?.data?.message}</div>
      ) : (
        <div className="grid grid-cols-12 gap-y-7 md:gap-7 animate-fadeIn pb-20">
          {data?.testimonials?.map((testimonial: Testimonial) => (
            <AdminTestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              enabled={testimonial.isVisible}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default AdminTestimonials
