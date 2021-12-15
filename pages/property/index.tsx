import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Html, Preload, OrbitControls } from '@react-three/drei'

const portal = [
  { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: 'https://res.cloudinary.com/diptjllxr/image/upload/v1639225916/1485962_Comedor_VU_26b64c35ab.jpg', link: 1 },
  { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: 'https://res.cloudinary.com/diptjllxr/image/upload/v1639164158/create_interactive_360_vr_architectural_interior_view_b956291a14.jpg', link: 0 }
  // ...
]

function Section({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
        <Html center >
          <a href="#" onClick={onClick}>{name}</a>
        </Html>
      </mesh>
    </group>
  )
}

function Portals() {
  const [which, set] = useState(0)
  const { link, ...props } = portal[which]
  const maps = useLoader(THREE.TextureLoader, portal.map((entry) => entry.url)) // prettier-ignore
  return <Section onClick={() => set(link)} {...props} texture={maps[which]} />
}

export default function Index() {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <primitive object={new THREE.AxesHelper(10)} />

      <Suspense fallback={null}>
        <Preload all />
        <Portals />
      </Suspense>
    </Canvas>
  )
}

