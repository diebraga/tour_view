import { IconButton, VStack } from "@chakra-ui/react";
import { FiNavigation } from "react-icons/fi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { GiSoundWaves, GiSoundOff } from "react-icons/gi";
import { useSound } from "../../contexts/useSoundContex";

export function NavigationButtons({ btnRef, onOpen }) {
  const { soundRef, playSound, soundStatus, pauseSound } = useSound()

  return (
    <>
    <audio
      ref={soundRef}
      src="/peruvianWoods.mp3"
      loop
    />

    <VStack
      className='z-20 absolute left-6 top-4'
      spacing='3'
    >
      <IconButton
        aria-label='open navigation'
        borderRadius='full' 
        ref={btnRef}
        icon={<FiNavigation size={18}/>}
        colorScheme='gray'
        onClick={onOpen} />

      <IconButton
        aria-label='open help'
        borderRadius='full' 
        ref={btnRef}
        icon={<MdOutlineLiveHelp size={20}/>}
        colorScheme='gray'
        onClick={() => alert('help')} />

      <IconButton
        aria-label='open help'
        borderRadius='full' 
        ref={btnRef}
        icon={soundStatus ? <GiSoundWaves size={25}/> : <GiSoundOff size={23}/>}
        colorScheme='gray'
        onClick={soundStatus ? pauseSound : playSound} />
    </VStack>
    </>
  )
}
