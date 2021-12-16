import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'
import { Section } from '../../components/Section'
import SideBarNavigation from '../../components/SideBarNavigation'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { FiNavigation } from "react-icons/fi";
import { NavigationButtons } from '../../components/NavigationButtons'

const sections = [
  {
    id: 1,
    name: 'room 1',
    ref: 0,
    texture: {
      url: 'https://res.cloudinary.com/diptjllxr/image/upload/v1639225916/1485962_Comedor_VU_26b64c35ab.jpg'
    },
    links: [
      { name: 'room 2', position: [15, 0, 0], ref: 1 }  
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
          // position: [x: number, y: number, z: number]
      { name: 'room 1', position: [10, 0, -15], ref: 0 },
    ],
    infos: [
      { name: 'televilsion', position: [-15, 0, 7], description: 'great television so much fun whatching it you should buy one for your kids!', demo: {
        url: 'https://i.gifer.com/59fy.gif'
      } },
    ]  
  },
]

export default function Index() {
  const [sceneRef, setSceneRef] = useState(0)

  const { 
    isOpen: isOpenSideBarNavigation, 
    onOpen: onOpenSideBarNavigation, 
    onClose: onCloseSideBarNavigation
  } = useDisclosure()
  const btnRefSideBarNavigation = useRef()

  return (
    <>
    <NavigationButtons onOpen={onOpenSideBarNavigation} btnRef={btnRefSideBarNavigation}/>

    <Canvas frameloop="demand" camera={{ position: [-1, 0, 0.3] }}>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <primitive object={new THREE.AxesHelper(10)} />

      <Suspense fallback={null}>
        <Preload all />
        <Section navigationIsOpen={isOpenSideBarNavigation} sections={sections} sceneRef={sceneRef} setSceneRef={setSceneRef}/>
      </Suspense>
    </Canvas>

    <SideBarNavigation onClose={onCloseSideBarNavigation} isOpen={isOpenSideBarNavigation} btnRef={btnRefSideBarNavigation} sections={sections} sceneRef={sceneRef} setSceneRef={setSceneRef}/>
    </>
  )
}

