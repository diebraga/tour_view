import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'
import { Portals } from '../components/Portals'

export default function Home() { 
  
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 4, 0.1] }}>
      {/* @ts-ignore */}
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Preload all />
        <Portals />
      </Suspense>
    </Canvas>
  )
}
