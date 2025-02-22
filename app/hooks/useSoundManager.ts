import useSoundEffect from '@/app/hooks/useSoundEffect'

const useSoundManager = (isSoundEffectsOn: boolean) => {
  const { play: playError } = useSoundEffect('/sound-effects/error-2.mp3', isSoundEffectsOn)
  const { play: playSuccess } = useSoundEffect('/sound-effects/success.mp3', isSoundEffectsOn)
  const { play: playBubbles } = useSoundEffect('/sound-effects/bubbles.mp3', isSoundEffectsOn)
  const { play: playMystery } = useSoundEffect('/sound-effects/mystery.mp3', isSoundEffectsOn)
  const { play: playSonicBoom } = useSoundEffect('/sound-effects/sonic-boom.mp3', isSoundEffectsOn)
  const { play: playDelete3 } = useSoundEffect('/sound-effects/delete-3.mp3', isSoundEffectsOn)
  const { play: playPluckOn } = useSoundEffect('/sound-effects/pluck-on.mp3', isSoundEffectsOn)
  const { play: playPluckOff } = useSoundEffect('/sound-effects/pluck-off.mp3', isSoundEffectsOn)
  const { play: playIsland } = useSoundEffect('/sound-effects/island.mp3', isSoundEffectsOn)

  const switchSounds = (checked: boolean) => {
    switch (checked) {
      case true:
        playPluckOn()
        break
      case false:
        playPluckOff()
        break
    }
  }

  return {
    playError,
    playSuccess,
    playBubbles,
    playMystery,
    playSonicBoom,
    playDelete3,
    switchSounds,
    playIsland
  }
}

export default useSoundManager
