import React, { FC } from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import { starIcon, trashIcon } from '@/app/lib/icons'
import { setOpenModalEdit } from '@/app/redux/features/testimonialSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import { truncateString } from '@/app/utils/string.functions'
import {
  useDeleteTestimonialMutation,
  useUpdateTestimonialMutation
} from '@/app/redux/services/testimonialApi'
import Spinner from '../common/Spinner'
import Switch from '@/app/forms/elements/Switch'
import AnimatedError from '@/app/forms/elements/AnimatedError'
import useSoundManager from '@/app/hooks/useSoundManager'

const AdminTestimonialCard: FC<{ testimonial: any; enabled: boolean }> = ({
  testimonial,
  enabled
}) => {
  const dispatch = useAppDispatch()
  const [deleteTestimonial, { isLoading, error: errorDelete }] = useDeleteTestimonialMutation()
  const [updateTestimonial, { isLoading: loadingUpdate, error: errorUpdate }] =
    useUpdateTestimonialMutation()
  const user = useAppSelector((state: RootState) => state.user)
  const { playError, playSuccess, playBubbles, playDelete3, switchSounds } = useSoundManager(
    user.isSoundEffectsOn
  )

  const handleDelete = async (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    await deleteTestimonial(testimonial.id)
      .unwrap()
      .then(() => {
        playDelete3()
      })
      .catch(() => {
        playError()
      })
  }

  const handleUpdateTestimonial = async () => {
    switchSounds(!testimonial.isVisible)
    await updateTestimonial({ id: testimonial.id, isVisible: !testimonial.isVisible })
      .unwrap()
      .then(() => {
        playSuccess()
      })
      .catch(() => {
        playError()
      })
  }

  return (
    <div className="col-span-12 lg:col-span-6 2xl:col-span-4 2000:col-span-3 flex flex-col p-5 rounded-2xl bg-testimonialcardlight dark:bg-testimonialcard border-1 border-zinc-300 dark:border-darkgrape shadow-testimonialcardlight dark:shadow-testimonialcard">
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-x-2">
          <div>
            <h1 className="text-charcoalblack dark:text-softlavender font-bold text-2xl">
              {testimonial?.customerName}
            </h1>
            <div className="flex gap-x-1.5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <AwesomeIcon
                  key={i}
                  icon={starIcon}
                  className="text-aquablue mt-0.5 dark:text-oceanicnocturne w-3 h-3"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 relative">
          <Switch enabled={enabled} onChange={handleUpdateTestimonial} isLoading={loadingUpdate} />
          <div className="absolute bottom-0 right-0 w-fit whitespace-nowrap">
            <AnimatedError error={errorUpdate?.data?.message} />
          </div>
        </div>
      </div>
      <div className="text-mediumgray dark:text-lavenderdream mb-10 h-28">
        {truncateString(testimonial?.feedback, 160)}
      </div>
      <div className="flex justify-between items-center gap-x-2">
        <button
          onClick={() => {
            playBubbles()
            dispatch(setOpenModalEdit(testimonial))
          }}
          className="text-13 text-aquablue dark:text-lime-500 font-bold uppercase tracking-widest"
        >
          Edit
        </button>
        <div className="relative">
          {isLoading && <Spinner />}
          <div className="absolute top-[1px] right-6 z-30 whitespace-nowrap">
            <AnimatedError error={errorDelete?.data?.message} />
          </div>
          <AwesomeIcon
            onClick={isLoading ? () => {} : handleDelete}
            icon={trashIcon}
            className={`${
              isLoading ? 'text-red-600' : ''
            } text-red-500 dark:text-lime-600 hover:text-red-600 duration-300 w-4 h-4 cursor-pointer ml-3`}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminTestimonialCard
