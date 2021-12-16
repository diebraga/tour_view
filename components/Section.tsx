import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { Dispatch, SetStateAction, useState } from 'react'
import { InteractionLink } from './InteractionLink'
import { InteractionInfo } from './InteractionInfo'
import { SectionType } from '../@types'

type SectionProps = {
  navigationIsOpen: boolean
  sections: SectionType[]
  sceneRef: number
  setSceneRef: Dispatch<SetStateAction<number>>
}

export function Section({ navigationIsOpen, sections, sceneRef, setSceneRef }: SectionProps) {
  const maps = useLoader(THREE.TextureLoader, sections[sceneRef].texture.url) 

  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        {/* @ts-ignore */}
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

