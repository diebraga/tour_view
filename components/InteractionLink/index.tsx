import { Html } from "@react-three/drei";
import { Box, Button, HStack, IconButton, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { GiClick } from "react-icons/gi";

type InteractionLinkProps = {
  position: any
  name: string
  onClick: () => void
}

export function InteractionLink({ position, name, onClick }: InteractionLinkProps) {

  return (
    // position: [x: number, y: number, z: number]
    <Html center position={position} zIndexRange={[5, 0]} >
      <Box>
        <Popover trigger='hover'>
          <PopoverTrigger>
            <IconButton 
              as={motion.a}
              onClick={onClick}
              whileHover={{ 
                scale: 1.3,
                backgroundColor: '#3182CE',
                color: '#fff'
              }}
              aria-label={name}
              className='rounded-full'
              boxSize='30px'
              bg='#ffff'
              icon={<GiClick size={20}/>}
            />
          </PopoverTrigger>
          <PopoverContent className='w-auto rounded-md bg-gray-50'>

            <PopoverBody className='pl-7 pr-7'>
              <Text
                as='p'
                className='mb-2 mt-5'
              >
                You wish to go the <strong>{name}</strong>?
              </Text>
              <HStack justify='flex-end' mr='7'>
                <Button
                  onClick={onClick}
                  _hover={{ backgroundColor: '#2B6CB0' }}
                  bg='#3182CE'                
                  className='transition duration-200 ease-in text-white font-bold py-1 px-2 rounded-sm text-sm mb-3'
                >
                  Yes
                </Button>
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Html>
  )
}
