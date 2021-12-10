import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'

export function Dome({ property }) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={useLoader(THREE.TextureLoader, `${property.textureUrl}`)} side={THREE.BackSide} />
      </mesh>
      <mesh position={[-15, 0, 0]}>
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

