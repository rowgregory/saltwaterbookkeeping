'use client'

import LogoWave from '@/app/components/svg/LogoWave'
import { securityQuestions } from '@/app/data/auth.data'
import AnimatedError from '@/app/forms/elements/AnimatedError'
import FloatingInput from '@/app/forms/elements/FloatingInput'
import FloatingSelect from '@/app/forms/elements/FloatingSelect'
import useForm from '@/app/hooks/useForm'
import { useRegisterMutation } from '@/app/redux/services/authApi'
import validateRegisterForm from '@/app/validations/validateRegisterForm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'

const Register = () => {
  const { push } = useRouter()
  const { inputs, handleInput, handleSelect, setErrors, errors, setSubmitted, submitted } = useForm(
    { username: '', password: '', securityQuestion: '', securityAnswer: '', code: '' },
    validateRegisterForm
  )
  const [registerUser, { isLoading, error }] = useRegisterMutation()

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const isValid = validateRegisterForm(inputs, setErrors)
    if (!isValid) return

    await registerUser(inputs)
      .unwrap()
      .then(() => push('/auth/login'))
      .catch(() => {})
  }

  const registerData = [
    {
      name: 'username',
      label: 'Username',
      value: inputs.username,
      onChange: handleInput,
      error: errors.username
    },
    {
      name: 'password',
      label: 'Password',
      value: inputs.password,
      onChange: handleInput,
      error: errors.password,
      type: 'password'
    },
    {
      name: 'securityQuestion',
      label: 'Security Question',
      value: inputs.securityQuestion,
      onChange: handleSelect,
      error: errors.securityQuestion,
      isSelect: true
    },
    {
      name: 'securityAnswer',
      label: 'Security Answer',
      value: inputs.securityAnswer,
      onChange: handleInput,
      error: errors.securityAnswer
    },
    {
      name: 'code',
      label: 'Code',
      value: inputs.code,
      onChange: handleInput,
      error: errors.code,
      isLoading: isLoading,
      showSubmitBtn: true
    }
  ]

  return (
    <div className="bg-white dark:bg-duskypalm w-full px-4 flex justify-center">
      <div className="shadow-lightauth dark:shadow-darkauth py-10 px-20 max-w-screen-sm mx-auto w-full flex items-center flex-col rounded-3xl mt-12">
        <LogoWave w="100" h="67.05" />
        <h1 className="text-[28px] font-bold mb-10 mt-2 dark:text-gray-300">
          Create Saltwater Account
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-6 w-full relative mb-40">
          {registerData.map((data: any, i) =>
            data.isSelect ? (
              <FloatingSelect
                key={i}
                value={data.value}
                handleSelect={data.onChange}
                submitted={submitted}
                error={data.error}
                name={data.name}
                capitalName={data.label}
                options={securityQuestions}
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
                isLoading={data.isLoading}
                showSubmitBtn={data.showSubmitBtn}
                type={data.type}
              />
            )
          )}
          <AnimatedError error={error?.data?.message} />
        </form>
        <Link
          href="/auth/login"
          className="text-sm text-aquablue dark:text-lavenderdream text-center"
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Register
