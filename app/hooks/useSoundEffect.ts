import { useEffect, useState } from 'react'
import UIFx from 'uifx'

const useSoundEffect = (soundFilePath: string, playSound: boolean) => {
  const [soundEffect, setSoundEffect] = useState<UIFx | null>(null)

  useEffect(() => {
    if (soundFilePath) {
      const effect = new UIFx(soundFilePath)
      effect.setVolume(0.7) // Set volume to 70%
      setSoundEffect(effect)
    }
  }, [soundFilePath])

  const play = () => {
    if (playSound && soundEffect) {
      soundEffect.play()
    }
  }

  return { play }
}

export default useSoundEffect
