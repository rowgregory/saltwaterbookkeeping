'use client'

import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import useForm from '@/app/hooks/useForm'
import { useLoginMutation } from '@/app/redux/services/authApi'
import validateLoginForm from '@/app/validations/validateLoginForm'
import Link from 'next/link'
import LogoWave from '@/app/components/svg/LogoWave'
import FloatingInput from '@/app/forms/elements/FloatingInput'
import AwesomeIcon from '@/app/components/common/AwesomeIcon'
import { arrowRightIcon } from '@/app/lib/icons'
import AnimatedError from '@/app/forms/elements/AnimatedError'
import { useAppDispatch } from '@/app/redux/store'
import { setUser } from '@/app/redux/features/userSlice'
import useSoundManager from '@/app/hooks/useSoundManager'

const Login = () => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const { inputs, handleInput, setErrors, errors, setSubmitted, submitted } = useForm(
    { username: '', password: '' },
    validateLoginForm
  )
  const [loginUser, { isLoading, error }] = useLoginMutation()
  const { playMystery } = useSoundManager(true)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const isValid = validateLoginForm(inputs, setErrors)
    if (!isValid) return

    await loginUser(inputs)
      .unwrap()
      .then((data: any) => {
        push('/admin/dashboard')
        dispatch(setUser(data))
        if (data.isSoundEffectsOn) {
          playMystery()
        }
      })
      .catch(() => {})
  }

  const loginData = [
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
      isLoading,
      showSubmitBtn: true,
      type: 'password'
    }
  ]

  return (
    <div className="w-full px-4 flex justify-center">
      <div className="md:shadow-lightauth md:dark:shadow-darkauth md:py-10 px-5 sm:px-20 max-w-screen-sm mx-auto w-full flex items-center flex-col rounded-3xl mt-12">
        <LogoWave w="100" h="67.05" />
        <h1 className="text-[28px] text-center font-bold mb-10 mt-2 dark:text-gray-300">
          Saltwater Bookkeepping
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-6 w-full relative mb-40">
          {loginData.map((data, i) => (
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
              isLogin
            />
          ))}
          <AnimatedError error={error?.data?.message} />
        </form>
        <div className="flex items-center space-x-1 mb-3.5">
          <Link
            target="_blank"
            href="/auth/forgot-password"
            className="text-sm text-aquablue dark:text-lavenderdream text-center hover:underline"
          >
            Forgot Password?
          </Link>
          <AwesomeIcon
            icon={arrowRightIcon}
            className="w-3 h-3 text-aquablue dark:text-lavenderdream transform -rotate-45"
          />
        </div>
        <Link
          href="/auth/register"
          className="text-sm text-aquablue dark:text-lavenderdream text-center"
        >
          Create Saltwater Account
        </Link>
      </div>
    </div>
  )
}

export default Login
