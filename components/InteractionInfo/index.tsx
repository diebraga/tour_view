import { Html } from "@react-three/drei";
import { IconButton, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { BsInfoLg } from "react-icons/bs";


export function InteractionInfo({ position, name, description }) {

  return (
    // position: [x: number, y: number, z: number]
    <Html center position={position} className='html-interaction'>
      <Popover trigger='hover'>
        <PopoverTrigger>
          <IconButton 
            as={motion.a}
            whileHover={{ 
              scale: 1.3,
              backgroundColor: '#3182CE',
              color: '#fff'
            }}
            aria-label={name}
            className='rounded-full'
            boxSize='30px'
            bg='#ffff'
            icon={<BsInfoLg size={20}/>}
          />
        </PopoverTrigger>
        <PopoverContent className='w-80 rounded-md bg-gray-50'>
          <PopoverCloseButton className='absolute right-3 top-2.5' />

          <PopoverBody className='pl-7 pr-7'>
            <Text
              as='h1'
              className='text-lg font-semibold mt-3 mb-1'
            >
              {name}
            </Text>
            <Text
              as='p'
              className='mb-3'
            >
              {description}
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Html>
  )
}
