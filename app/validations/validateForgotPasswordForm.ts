import { Inputs } from '../types/common.types'

interface ValidationErrors {
  username?: string
  securityQuestion?: string
  securityAnswer?: string
}

const validateForgotPasswordForm = (inputs: Inputs, setErrors: (errors: any) => void): boolean => {
  const newErrors: ValidationErrors = {}

  if (!inputs?.username?.trim()) {
    newErrors.username = 'Username is required'
  }

  if (!inputs?.securityQuestion?.trim()) {
    newErrors.securityQuestion = 'Security question is required'
  }

  if (!inputs?.securityAnswer?.trim()) {
    newErrors.securityAnswer = 'Security answer is required'
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}

export default validateForgotPasswordForm
