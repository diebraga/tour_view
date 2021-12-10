import { Html } from "@react-three/drei";
import { InteractionTypes } from "../@types";

type InteractionProps = {
  interaction: InteractionTypes
}
export function Interaction({ interaction }: InteractionProps) {
  return (
    // position: [x: number, y: number, z: number]
    <Html center position={[interaction.positionX, interaction.positionY, interaction.positionZ]}>
      <div className="flex justify-center items-center cursor-pointer">
        <div className="max-w-xs rounded-full overflow-hidden shadow-lg my-2 bg-gray-100 fixed">
          <div className="p-6">
            <div className="font-bold text-sm mb-2 ">Click</div>
          </div>
        </div>
      </div>
    </Html>
  )
}
