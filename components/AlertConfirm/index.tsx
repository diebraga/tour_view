import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MutableRefObject } from "react";

type AlertConfirmProps = {
  onClose: () => void
  isOpen: boolean
  cancelRef: MutableRefObject<any>
  title?: string | ReactNode
  content?: string | ReactNode
  action: any
}

export function AlertConfirm({ onClose, isOpen, cancelRef, title, content, action }: AlertConfirmProps) {
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          {content}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button colorScheme='red' ml={3} onClick={action}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
