'use client'

import React, { FormEvent, useState } from 'react'
import LogoWave from '@/app/components/svg/LogoWave'
import FloatingInput from '@/app/forms/elements/FloatingInput'
import FloatingSelect from '@/app/forms/elements/FloatingSelect'
import useForm from '@/app/hooks/useForm'
import { useForgotPasswordMutation, useResetPasswordMutation } from '@/app/redux/services/authApi'
import validateForgotPasswordForm from '@/app/validations/validateForgotPasswordForm'
import { securityQuestions } from '@/app/data/auth.data'
import validateResetPasswordForm from '@/app/validations/validateResetPasswordForm'
import { useRouter } from 'next/navigation'
import AnimatedError from '@/app/forms/elements/AnimatedError'

const ForgotPassword = () => {
  const { push } = useRouter()
  const [showResetPassword, setShowResetPassword] = useState(false)
  const [forgotPassword, { isLoading: loadingForgotPassword, error: errorForgotPassword }] =
    useForgotPasswordMutation()
  const [resetPassword, { isLoading: loadingResetPassword, error: errorResetPassword }] =
    useResetPasswordMutation()
  const { inputs, handleInput, handleSelect, setErrors, errors, setSubmitted, submitted } = useForm(
    { username: '', securityQuestion: '', securityAnswer: '', password: '' },
    validateForgotPasswordForm
  )

  const handleForgotPassword = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const isValid = validateForgotPasswordForm(inputs, setErrors)
    if (!isValid) return

    await forgotPassword({
      username: inputs.username,
      securityQuestion: inputs.securityQuestion,
      securityAnswer: inputs.securityAnswer
    })
      .unwrap()
      .then(() => setShowResetPassword(true))
      .catch(() => {})
  }

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const isValid = validateResetPasswordForm(inputs, setErrors)
    if (!isValid) return

    await resetPassword({ username: inputs.username, newPassword: inputs.password })
      .unwrap()
      .then(() => push('/auth/login'))
      .catch(() => {})
  }

  return (
    <div className="w-full px-4 flex justify-center">
      <div className="shadow-lightauth dark:shadow-darkauth py-10 px-20 max-w-screen-sm mx-auto w-full flex items-center flex-col rounded-3xl mt-12">
        <LogoWave w="100" h="67.05" />
        <h1 className="text-[28px] font-bold mb-10 mt-2 dark:text-gray-300">
          {showResetPassword ? 'Reset' : 'Forgot'} Password
        </h1>
        {showResetPassword ? (
          <form
            onSubmit={handleResetPassword}
            className="flex flex-col gap-y-6 w-full relative mb-40"
          >
            <FloatingInput
              value={inputs.password}
              handleInput={handleInput}
              submitted={submitted}
              error={errors.password}
              name="password"
              capitalName="Password"
              isLoading={loadingResetPassword}
              showSubmitBtn={true}
            />
            <AnimatedError error={errorResetPassword?.data?.message} />
          </form>
        ) : (
          <form
            onSubmit={handleForgotPassword}
            className="flex flex-col gap-y-6 w-full relative mb-40"
          >
            <FloatingInput
              value={inputs.username}
              handleInput={handleInput}
              submitted={submitted}
              error={errors.username}
              name="username"
              capitalName="Username"
            />
            <FloatingSelect
              value={inputs.securityQuestion}
              handleSelect={handleSelect}
              submitted={submitted}
              error={errors.securityQuestion}
              name="securityQuestion"
              capitalName="Secret Question"
              options={securityQuestions}
            />
            <FloatingInput
              value={inputs.securityAnswer}
              handleInput={handleInput}
              submitted={submitted}
              error={errors.securityAnswer}
              name="securityAnswer"
              capitalName="Secret Answer"
              isLoading={loadingForgotPassword}
              showSubmitBtn={true}
            />
            <AnimatedError error={errorForgotPassword?.data?.message} />
          </form>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
