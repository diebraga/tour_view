import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { SectionTypes } from '../@types'

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
      <mesh position={[-45, 0, 0]}>
        <Html center>
          <div style={{ background: '#ffff', height: '30px' }}>
            <div style={{ paddingTop: '5px', paddingLeft: '5px', paddingRight: '5px' }}>
              lllll
            </div>
          </div>
        </Html>
      </mesh>
    </group>
  )
}

