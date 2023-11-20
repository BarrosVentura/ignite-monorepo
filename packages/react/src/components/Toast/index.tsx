import * as React from 'react'
import { Provider } from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  triggerElement: JSX.Element
  title: string
  description: string
}

export const Toast = ({ triggerElement, title, description }: ToastProps) => {
  const [open, setOpen] = React.useState(false)
  const elementWithClick = React.cloneElement(triggerElement, {
    onClick: () => setOpen(true),
  })

  return (
    <Provider swipeDirection="right">
      {elementWithClick}

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose asChild>
          <X />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </Provider>
  )
}
