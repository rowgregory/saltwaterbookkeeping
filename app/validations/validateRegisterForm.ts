import { Inputs } from '../types/common.types'

interface ValidationErrors {
  username?: string
  password?: string
  securityQuestion?: string
  securityAnswer?: string
  code?: string
}

const validateRegisterForm = (inputs: Inputs, setErrors: (errors: any) => void): boolean => {
  const newErrors: ValidationErrors = {}

  if (!inputs?.username?.trim()) {
    newErrors.username = 'Username is required'
  }

  if (!inputs?.password?.trim()) {
    newErrors.password = 'Password is required'
  } else if (inputs.password.length < 10) {
    newErrors.password = 'Password must be at least 10 characters long'
  } else if (!/[0-9]/.test(inputs.password)) {
    newErrors.password = 'Password must contain at least one number'
  } else if (!/[a-z]/.test(inputs.password)) {
    newErrors.password = 'Password must contain at least one lowercase letter'
  } else if (!/[A-Z]/.test(inputs.password)) {
    newErrors.password = 'Password must contain at least one uppercase letter'
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputs.password)) {
    newErrors.password = 'Password must contain at least one special character: !@#$%^&*(),'
  }

  if (!inputs?.securityQuestion?.trim()) {
    newErrors.securityQuestion = 'Security question is required'
  }

  if (!inputs?.securityAnswer?.trim()) {
    newErrors.securityAnswer = 'Security answer is required'
  }

  if (!inputs?.code?.trim()) {
    newErrors.code = 'Code is required'
  } else if (inputs?.code !== process.env.NEXT_PUBLIC_REGISTER_CODE) {
    newErrors.code = 'Incorrect code'
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}

export default validateRegisterForm
