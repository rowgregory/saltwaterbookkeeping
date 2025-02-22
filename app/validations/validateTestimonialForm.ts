import { Inputs } from '../types/common.types'

interface ValidationErrors {
  customerName?: string
  feedback?: string
  rating?: string
}

const validateTestimonialForm = (inputs: Inputs, setErrors: (errors: any) => void): boolean => {
  const newErrors: ValidationErrors = {}

  if (!inputs?.customerName?.trim()) {
    newErrors.customerName = 'Customer name is required'
  }

  if (!inputs?.feedback?.trim()) {
    newErrors.feedback = 'Feedback is required'
  }

  if (!inputs?.rating) {
    newErrors.rating = 'Rating is required'
  } else if (
    isNaN(Number(inputs.rating)) ||
    Number(inputs.rating) < 1 ||
    Number(inputs.rating) > 5
  ) {
    newErrors.rating = 'Rating must be a number between 1 and 5'
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}

export default validateTestimonialForm
