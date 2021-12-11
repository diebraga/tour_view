import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Link, Text, VStack } from "@chakra-ui/react";
import { getAllSections } from "../../controllers/sections";
import styles from './styles.module.scss'

export default function SideBarNavigation({ onClose, isOpen, btnRef }) {
  const { sections } = getAllSections()
  
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

        </DrawerContent>
      </Drawer>
    </>
  )
}
