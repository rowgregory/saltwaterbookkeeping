import { Inputs } from '../types/common.types'

interface ValidationErrors {
  username?: string
}

const validateDashboardAccountInformation = (
  inputs: Inputs,
  setErrors: (errors: any) => void
): boolean => {
  const newErrors: ValidationErrors = {}

  if (!inputs?.username?.trim()) {
    newErrors.username = 'Username is required'
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}

export default validateDashboardAccountInformation
