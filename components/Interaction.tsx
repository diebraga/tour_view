import { Html } from "@react-three/drei";
import { InteractionTypes } from "../@types";

type InteractionProps = {
  interaction: InteractionTypes
}

export function Interaction({ interaction }: InteractionProps) {
  const { positionX, positionY, positionZ, link, name } = interaction;

  return (
    // position: [x: number, y: number, z: number]
    <Html center position={[positionX, positionY, positionZ]} className='html-interaction'>
      <a href={`/property/${link}`}>
        <div className="flex justify-center items-center cursor-pointer w-60">
          <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-yellow-100 fixed">
            <div className="p-6">
              <div className="font-bold text-sm mb-2 ">{name}</div>
            </div>
          </div>
        </div>
      </a>
    </Html>
  )
}
