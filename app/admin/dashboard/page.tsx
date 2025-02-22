'use client'

import React, { FormEvent } from 'react'
import AdminPageHeader from '@/app/components/admin/AdminPageHeader'
import useForm from '@/app/hooks/useForm'
import { RootState, useAppSelector } from '@/app/redux/store'
import { useUpdateUserMutation } from '@/app/redux/services/userApi'
import validateDashboardAccountInformation from '@/app/validations/validateDashboardAccountInformation'
import Checkmark from '@/app/components/common/Checkmark'
import FloatingInput from '@/app/forms/elements/FloatingInput'
import AnimatedError from '@/app/forms/elements/AnimatedError'
import useSoundManager from '@/app/hooks/useSoundManager'
import Spinner from '@/app/components/common/Spinner'
import { useFetchComponentClickCountQuery } from '@/app/redux/services/componentInteractionApi'

const Dashboard = () => {
  const [updateUser, { isLoading, error }] = useUpdateUserMutation()
  const user = useAppSelector((state: RootState) => state.user)
  const { inputs, errors, handleInput, setErrors, setSubmitted, submitted } = useForm(
    { username: '', id: '' },
    validateDashboardAccountInformation,
    user
  )
  const { data, isLoading: loading } = useFetchComponentClickCountQuery()
  const { playError, playSuccess } = useSoundManager(user.isSoundEffectsOn)

  const handleSumit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const isValid = validateDashboardAccountInformation(inputs, setErrors)
    if (!isValid) return

    await updateUser({ username: inputs.username, id: inputs.id })
      .unwrap()
      .then(() => {
        playSuccess()
      })
      .catch(() => {
        playError()
      })
  }

  return (
    <>
      <AdminPageHeader
        title="Dashboard"
        text={`Hey, it’s Sqysh! Welcome to your Saltwater Bookkeeping dashboard, where navigating your account feels like a smooth journey through the deep sea and the stars—effortless, intuitive, and under the control of your cosmic octopus guide.`}
      />
      <h2 className="text-charcoal dark:text-white text-xl font-semibold mt-10 mb-0.5">
        Account Information {user.success && <Checkmark success={user.success} />}
      </h2>
      <h3 className="text-sm mt-0.5 text-shadowamathyst dark:text-smokysage max-w-xl mb-7">
        Update your username—this is the one you use to log in and access your account.
      </h3>
      <form onSubmit={handleSumit} className="max-w-sm w-full flex flex-col gap-y-1 relative">
        <FloatingInput
          value={inputs.username}
          handleInput={handleInput}
          submitted={submitted}
          error={errors.username}
          name="username"
          capitalName="Username"
          isLoading={isLoading}
          showSubmitBtn={true}
        />
        <AnimatedError error={error?.data?.message} />
      </form>
      <h2 className="text-charcoal dark:text-white text-xl font-semibold mt-10 mb-0.5">
        Logo Clicks
      </h2>
      <h3 className="text-sm mt-0.5 text-shadowamathyst dark:text-smokysage max-w-xl mb-7">
        Tracks how many times users have clicked the main logo, providing insights into engagement
        and navigation behavior.
      </h3>
      <div className="p-5 rounded-2xl bg-testimonialcardlight dark:dark:bg-testimonialcard border-1 border-zinc-300 dark:border-darkgrape shadow-testimonialcardlight dark:shadow-testimonialcard aspect-square text-[64px] font-bold max-w-40 flex items-center justify-center text-aquablue dark:text-lime-400 relative z-10">
        {loading ? (
          <Spinner wAndH="w-7 h-7" />
        ) : (
          <div className="animate-fadeIn">{data?.clickCount}</div>
        )}
      </div>
    </>
  )
}

export default Dashboard
