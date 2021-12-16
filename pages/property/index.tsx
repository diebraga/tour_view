import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'
import { Section } from '../../components/Section'
import SideBarNavigation from '../../components/SideBarNavigation'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { FiNavigation } from "react-icons/fi";

const sections = [
  {
    id: 1,
    name: 'room 1',
    ref: 0,
    texture: {
      url: 'https://res.cloudinary.com/diptjllxr/image/upload/v1639225916/1485962_Comedor_VU_26b64c35ab.jpg'
    },
    links: [
      { name: 'inside', position: [15, 0, 0], ref: 1 }  
    ],
    infos: []
  },
  {
    id: 2,
    name: 'room 2',
    // ref e a referencia da section * array position
    ref: 1,
    texture: {
      url: 'https://res.cloudinary.com/diptjllxr/image/upload/v1639164158/create_interactive_360_vr_architectural_interior_view_b956291a14.jpg'
    },
    links: [
      // ref do link e onde ele vai levar
      { name: 'outside', position: [10, 0, -15], ref: 0 },
    ],
    infos: [
      { name: 'televilsion', position: [15, 0, 0], description: 'great television so much fun whatching it you should buy one for your kids!' },
    ]  
  },
]

export default function Index() {
  const [sceneRef, setSceneRef] = useState(0)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
    <SideBarNavigation onClose={onClose} isOpen={isOpen} btnRef={btnRef} sections={sections} sceneRef={sceneRef} setSceneRef={setSceneRef}/>

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
        <Section navigationIsOpen={isOpen} sections={sections} sceneRef={sceneRef} setSceneRef={setSceneRef}/>
      </Suspense>
    </Canvas>
    </>
  )
}

