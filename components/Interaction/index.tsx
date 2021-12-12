import { Button, IconButton, Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { Html } from "@react-three/drei";
import { InteractionTypes } from "../../@types";
import { motion } from 'framer-motion';
import { BsInfoLg } from "react-icons/bs";

type InteractionProps = {
  interaction: InteractionTypes
}

export function Interaction({ interaction }: InteractionProps) {
  const { positionX, positionY, positionZ, link, name } = interaction;

  return (
    // position: [x: number, y: number, z: number]
    <Html center position={[positionX, positionY, positionZ]} className='html-interaction'>
      <Popover trigger='hover'>
        <PopoverTrigger>
          <IconButton 
            as={motion.button}
            whileHover={{ 
              scale: 1.3,
              backgroundColor: '#3182CE'
            }}
            aria-label={name}
            className='rounded-full'
            boxSize='30px'
            bg='#ffff'
            icon={<BsInfoLg />}
          />
        </PopoverTrigger>
        <PopoverContent className='w-60 bg-transparent rounded-md'>
          {/* <PopoverCloseButton className='absolute right-3 top-2.5' /> */}

          <PopoverBody>
            <Button 
              as='a'
              href={`/property/${link}`} 
              _hover={{ backgroundColor: '#2B6CB0' }}
              bg='#3182CE'
              className="transition duration-200 ease-in text-white font-bold py-2 px-4 rounded">
              {name}
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Html>
  )
}
