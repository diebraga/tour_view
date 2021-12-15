import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Html, Preload, OrbitControls } from '@react-three/drei'
import { InteractionLink } from '../../components/InteractionLink'
import { InteractionInfo } from '../../components/InteractionInfo'

const sections = [
  {
    id: 1,
    name: 'room 1',
    ref: 0,
    texture: 'https://res.cloudinary.com/diptjllxr/image/upload/v1639225916/1485962_Comedor_VU_26b64c35ab.jpg',
    links: [
      { name: 'inside', position: [15, 0, 0], ref: 1 }  
    ],
    infos: []
  },
  {
    id: 2,
    name: 'room 2',
    // ref e a referencia da section
    ref: 1,
    texture: 'https://res.cloudinary.com/diptjllxr/image/upload/v1639164158/create_interactive_360_vr_architectural_interior_view_b956291a14.jpg',
    links: [
      // ref do link e onde ele vai levar
      { name: 'outside', position: [10, 0, -15], ref: 0 },
    ],
    infos: [
      { name: 'televilsion', position: [15, 0, 0], description: 'great television so much fun whatching it you should buy one for your kids!' },
    ]  
  },
]
function Section() {
  const [sceneRef, setSceneRef] = useState(0)
  const maps = useLoader(THREE.TextureLoader, sections[sceneRef].texture) // prettier-ignore
  
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        
        <meshBasicMaterial map={maps} side={THREE.BackSide} />
      </mesh>
      <group>
        {sections[sceneRef].links && sections[sceneRef].links.map(({ name, position, ref }, index) => {
          return <InteractionLink key={index} name={name} position={position} onClick={() => setSceneRef(ref)}/>
        })}
        {sections[sceneRef].infos && sections[sceneRef].infos.map(({ name, position, description }, index) => {
          return <InteractionInfo key={index} name={name} position={position} description={description}/>
        })}
      </group>

    </group>
  )
}

export default function Index() {
  
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <primitive object={new THREE.AxesHelper(10)} />

      <Suspense fallback={null}>
        <Preload all />
        <Section />
      </Suspense>
    </Canvas>
  )
}

