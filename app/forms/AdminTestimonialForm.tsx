import React, { FC, FormEvent } from 'react'
import { Errors, Inputs } from '../types/common.types'
import Spinner from '../components/common/Spinner'
import Rating from '../components/Rating'
import TestimonialSVG from '../components/svg/TestimonialSVG'
import AnimatedError from './elements/AnimatedError'
import FloatingInput from './elements/FloatingInput'
import FloatingTextarea from './elements/FloatingTextarea'

interface AdminTestimonialFormProps {
  handleSubmit: (e: FormEvent) => void
  inputs: Inputs
  submitted: boolean
  errors: Errors
  handleInput: any
  error: { data: { message: string } }
  isLoading: boolean
  isUpdating: boolean
  setInputs: (inputs: Inputs) => void
  reset: () => void
}

const AdminTestimonialForm: FC<AdminTestimonialFormProps> = ({
  handleSubmit,
  inputs,
  submitted,
  errors,
  handleInput,
  error,
  isLoading,
  isUpdating,
  setInputs,
  reset
}) => {
  const testimonialData = [
    {
      name: 'customerName',
      label: 'Customer Name',
      value: inputs.customerName,
      onChange: handleInput,
      error: errors.customerName
    },
    {
      name: 'feedback',
      label: 'Feedback',
      value: inputs.feedback,
      onChange: handleInput,
      error: errors.feedback,
      isTextarea: true
    }
  ]
  return (
    <form onSubmit={handleSubmit} className="overflow-hidden">
      <div className="flex flex-col gap-y-6 p-5 md:p-20 relative">
        <div className="flex items-center flex-col">
          <TestimonialSVG />
          <h1 className="text-deepcharcoal mt-2 mb-4 dark:text-white text-xl font-semibold">
            {isUpdating ? 'Update' : 'Create'} Testimonial
          </h1>
        </div>
        {testimonialData.map((data, i) =>
          data.isTextarea ? (
            <FloatingTextarea
              key={i}
              value={data.value}
              handleInput={data.onChange}
              submitted={submitted}
              error={data.error}
              name={data.name}
              capitalName={data.label}
            />
          ) : (
            <FloatingInput
              key={i}
              value={data.value}
              handleInput={data.onChange}
              submitted={submitted}
              error={data.error}
              name={data.name}
              capitalName={data.label}
            />
          )
        )}
        <div className="flex flex-col md:flex-row items-center md:justify-between relative">
          <Rating rating={inputs.rating} setInputs={setInputs} />
          {submitted && errors?.rating && (
            <div className="text-red-500 text-xs">{errors?.rating}</div>
          )}
        </div>
        <AnimatedError error={error?.data?.message} className="absolute bottom-7 right-5 w-fit" />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-3 md:gap-x-3 p-5 bg-zinc-100 dark:bg-velveteclipse">
        <button
          onClick={reset}
          type="button"
          className="order-2 md:order-1 bg-gray-400 hover:bg-gray-500 duration-300 dark:bg-onyxshadow hover:dark:bg-mignightabyss px-14 py-[9px] rounded-md font-semibold text-white dark:text-zinc-300 w-full md:w-fit text-13"
        >
          Back
        </button>
        <div className="order-1 md:order-2 flex items-center gap-x-2">
          {isLoading && <Spinner />}
          <button
            type="submit"
            className=" bg-aquablue hover:bg-tealbreeze duration-300 dark:bg-violetember hover:dark:bg-oceanicnocturne px-5 py-[9px] rounded-md font-semibold text-white dark:text-zinc-300 w-full md:w-fit text-13"
          >
            {isUpdating ? 'Update' : 'Create'} Testimonial
          </button>
        </div>
      </div>
    </form>
  )
}

export default AdminTestimonialForm
