import { Html } from "@react-three/drei";
import { InteractionTypes } from "../../@types";
import InteractionInfo from "./InteractionInfo";
import InteractionLink from "./InteractionLink";

type InteractionProps = {
  interaction: InteractionTypes
}

export function Interaction({ interaction }: InteractionProps) {
  const { positionX, positionY, positionZ, link, name, type, description } = interaction;

  return (
    // position: [x: number, y: number, z: number]
    <Html center position={[positionX, positionY, positionZ]} className='html-interaction'>
      {type === 'info' ? (
        <InteractionInfo name={name} description={description}/>
      ) : (
        <InteractionLink link={link} name={name}/>
      )}
    </Html>
  )
}
