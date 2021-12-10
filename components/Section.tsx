import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { SectionTypes } from '../@types'
import { Interaction } from './Interaction'

type SectionProps = {
  section: SectionTypes
}

export function Section({ section }: SectionProps) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={useLoader(THREE.TextureLoader, `${section.textureUrl}`)} side={THREE.BackSide} />
      </mesh>
      <group>
        <Interaction />
      </group>
    </group>
  )
}

