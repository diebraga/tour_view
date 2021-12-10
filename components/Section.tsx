import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { SectionTypes } from '../@types'

type SectionProps = {
  section: SectionTypes
}

function ToolTip1() {
  return (
    <Html center position={[-5, 1, -1]}>
      <div className="flex justify-center items-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-red-100">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
          </div>
        </div>
      </div>
    </Html>
  );
}

export function Section({ section }: SectionProps) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={useLoader(THREE.TextureLoader, `${section.textureUrl}`)} side={THREE.BackSide} />
      </mesh>
      <group>
        <ToolTip1/>
      </group>
    </group>
  )
}

