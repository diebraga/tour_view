import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { useState } from 'react'
import { InteractionLink } from './InteractionLink'
import { InteractionInfo } from './InteractionInfo'

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
    // ref e a referencia da section * array position
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

export function Section({ navigationIsOpen }) {
  const [sceneRef, setSceneRef] = useState(0)
  const maps = useLoader(THREE.TextureLoader, sections[sceneRef].texture) 

  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        
        <meshBasicMaterial map={maps} side={THREE.BackSide} />
      </mesh>
      <group>
        {!navigationIsOpen && sections[sceneRef].links && sections[sceneRef].links.map(({ name, position, ref }, index) => {
          return <InteractionLink key={index} name={name} position={position} onClick={() => setSceneRef(ref)}/>
        })}
        {!navigationIsOpen && sections[sceneRef].infos && sections[sceneRef].infos.map(({ name, position, description }, index) => {
          return <InteractionInfo key={index} name={name} position={position} description={description}/>
        })}
      </group>

    </group>
  )
}

