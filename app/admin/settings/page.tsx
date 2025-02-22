'use client'

import React, { useState } from 'react'
import { RootState, useAppSelector } from '@/app/redux/store'
import { useUpdateUserMutation } from '@/app/redux/services/userApi'
import useSoundManager from '@/app/hooks/useSoundManager'
import AdminPageHeader from '@/app/components/admin/AdminPageHeader'
import Switch from '@/app/forms/elements/Switch'
import Checkmark from '@/app/components/common/Checkmark'
import AnimatedError from '@/app/forms/elements/AnimatedError'

const Settings = () => {
  const [updateUser, { error }] = useUpdateUserMutation()
  const {
    success,
    id,
    isSoundEffectsOn,
    isBackgroundMusicOn,
    loading: loadingUser
  } = useAppSelector((state: RootState) => state.user)
  const { switchSounds } = useSoundManager(isSoundEffectsOn)
  const [loading, setLoading] = useState<Record<string, boolean>>({})

  const handleUpdateUserSoundEffects = async () => {
    setLoading((prev) => ({ ...prev, soundeffects: true }))
    switchSounds(!isSoundEffectsOn)

    await updateUser({ id: id, isSoundEffectsOn: !isSoundEffectsOn })
      .unwrap()
      .catch(() => {})

    setLoading((prev) => ({ ...prev, soundEffects: false }))
  }

  const handleUpdateUserBackgroundMusic = async () => {
    setLoading((prev) => ({ ...prev, backgroundMusic: true }))
    switchSounds(!isBackgroundMusicOn)

    await updateUser({ id: id, isBackgroundMusicOn: !isBackgroundMusicOn })
      .unwrap()
      .catch(() => {})

    setLoading((prev) => ({ ...prev, backgroundMusic: false }))
  }

  const switchData = [
    {
      enabled: isSoundEffectsOn,
      onChange: handleUpdateUserSoundEffects,
      isLoading: loading['soundEffects'],
      textKey: 'Sound Effects'
    },
    {
      enabled: isBackgroundMusicOn,
      onChange: handleUpdateUserBackgroundMusic,
      isLoading: loading['backgroundMusic'],
      textKey: 'Background Music'
    }
  ]

  const settingsPageHeaderText = `Welcome to your settings! For now, you can toggle sound effects on or off. We’re just getting started, so keep an eye out for more cool options coming soon. Sqysh's settings, made simple.`

  if (loadingUser) return

  return (
    <>
      <AdminPageHeader title="Settings" text={settingsPageHeaderText} />
      <h2 className="text-xl font-semibold mb-7 mt-10">
        Audio {success && <Checkmark success={success} />}
      </h2>
      <div className="flex flex-col gap-y-10 mt-12 relative w-fit">
        {switchData.map((data) => (
          <div key={data.textKey} className="flex items-center gap-x-8">
            <Switch enabled={data.enabled} onChange={data.onChange} isLoading={data.isLoading} />
            <h5 className="uppercase text-midnightshadow dark:text-gray-100 font-bold text-15 tracking-widest">
              {data.textKey}
            </h5>
          </div>
        ))}
        <AnimatedError error={error?.data?.message} />
      </div>
    </>
  )
}

export default Settings
