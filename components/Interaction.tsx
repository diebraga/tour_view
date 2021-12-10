import { Html } from "@react-three/drei";

export function Interaction() {
  return (
    <Html center position={[-5, 1, -1]}>
      <div className="flex justify-center items-center cursor-pointer">
        <div className="max-w-xs rounded-full overflow-hidden shadow-lg my-2 bg-gray-100 fixed">
          <div className="p-6">
            <div className="font-bold text-sm mb-2">Click</div>
          </div>
        </div>
      </div>
    </Html>
  )
}
