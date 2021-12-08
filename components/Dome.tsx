import * as THREE from 'three'
import React, {  } from 'react'
import { Html } from '@react-three/drei'

export function Dome({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <Html center>
          <div style={{ background: '#ffff', height: '30px' }} onClick={onClick}>
            <div style={{ paddingTop: '5px', paddingLeft: '5px', paddingRight: '5px' }}>
              {name}
            </div>
          </div>
        </Html>
      </mesh>
    </group>
  )
}

