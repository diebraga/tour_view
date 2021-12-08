import * as THREE from 'three'
import { useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { Dome } from './Dome'

const store = [
  { name: 'outside', color: 'lightpink', position: [50, 0, -15], url: '/3601.jpeg', link: 1 },
  { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/3602.jpeg', link: 0 }
  // ...
]

export function Portals() {
  const [which, set] = useState(0)
  const { link, ...props } = store[which]
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) 
  return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
}
