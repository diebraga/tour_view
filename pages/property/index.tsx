import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'
import { Section } from '../../components/Section'
import SideBarNavigation from '../../components/SideBarNavigation'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { FiNavigation } from "react-icons/fi";


export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
    <SideBarNavigation onClose={onClose} isOpen={isOpen} btnRef={btnRef}/>

    <IconButton
      aria-label='open navigation'
      position='absolute'
      left='6'
      top='4'
      borderRadius='full'
      className='z-20'
      ref={btnRef}
      icon={<FiNavigation size={18}/>}
      colorScheme='gray'
      onClick={onOpen} />

    <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <primitive object={new THREE.AxesHelper(10)} />

      <Suspense fallback={null}>
        <Preload all />
        <Section navigationIsOpen={isOpen}/>
      </Suspense>
    </Canvas>
    </>
  )
}

