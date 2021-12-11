import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { getAllSections } from "../../controllers/sections";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from './styles.module.scss'
import { AlertConfirm } from "../AlertConfirm";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function SideBarNavigation({ onClose, isOpen, btnRef }) {
  const { sections } = getAllSections()
  const { 
    isOpen: isOpenAlert, 
    onOpen: onOpenAlert, 
    onClose: onCloseAlert
  } = useDisclosure()
  const cancelRef = useRef()

  const router = useRouter()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader pl='3' pt='2' pr='10' pb='2'>
            1 Thomond VillageBaile Uí Dhroighneáin, Luimneach, V94 DR92
          </DrawerHeader>

          <DrawerBody pl='3' pt='2' pr='10'>
            <VStack align='flex-start'>
              {sections && sections.map(({ name, slug }, index) => {
                return (
                  <a
                    key={index} 
                    href={`/property/${slug}`}
                    className={styles.hoverUnderlineAnimation}
                  >
                    <Text color='gray.600' fontWeight='semibold' fontSize={['13px', '15px', '18px', '19px']}>
                      {name}
                    </Text>
                  </a>
                )
              })}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' colorScheme='red' onClick={() => {onOpenAlert(), onClose()}} rightIcon={<AiOutlineArrowRight />}>
              Leave
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <AlertConfirm 
        isOpen={isOpenAlert}
        onClose={onCloseAlert}
        cancelRef={cancelRef}
        action={() => router.push('/')}
        title='Wait!'
        content='Are you sure you want to leave the tour? You will be redirected to the home page.'
      />
    </>
  )
}
