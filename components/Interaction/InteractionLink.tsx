import { Button, IconButton, Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { BsInfoLg } from "react-icons/bs";
import { GiClick } from "react-icons/gi";

type InteractionLinkProps = {
  link: string
  name: string
}

export default function InteractionLink({ link, name }: InteractionLinkProps) {
  return (
    <Popover trigger='hover'>
      <PopoverTrigger>
        <IconButton 
          as={motion.a}
          href={`/property/${link}`}
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
  )
}
