import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { SectionTypes } from '../@types'
import { Interaction } from './Interaction'

type SectionProps = {
  section: SectionTypes
  navigationIsOpen: boolean
}

export function Section({ section, navigationIsOpen }: SectionProps) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={useLoader(THREE.TextureLoader, `${section.textureUrl}`)} side={THREE.BackSide} />
      </mesh>
      <group>
        {!navigationIsOpen && section.interactions.map((interaction, index) => {
          return <Interaction key={index} interaction={interaction}/>
        })}
      </group>
    </group>
  )
}

