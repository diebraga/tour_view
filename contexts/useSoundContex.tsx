import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useRef } from 'react'

interface SoundProviderProp {
  children: ReactNode
}

interface SoundContextProps {
  playSound: () => void
  pauseSound: () => void
  soundRef: any
  soundStatus: boolean
}

export const SoundContext = createContext({} as SoundContextProps)

export function SoundProvider({ children }: SoundProviderProp) {
  const [soundStatus, setSoundStatus] = useState(false)
  const soundRef = useRef(null)

  function pauseSound() {
    soundRef.current?.pause()
    setSoundStatus(false)
  }

  function playSound() {
    soundRef.current?.play()
    soundRef.current.volume = 0.2

    setSoundStatus(true)
  }

  return(
    <SoundContext.Provider value={{
      playSound,
      pauseSound,
      soundRef,
      soundStatus,
    }}>
      {children}
    </SoundContext.Provider>
  )
}

export function useSound() {
  const context = useContext(SoundContext)

  return context
}