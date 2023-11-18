import { Arrow, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'
import { TooltipContent } from './styles'
// import { ComponentProps } from 'react'

export interface TooltipProps {
  children: JSX.Element
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <TooltipContent>
            {content} <Arrow />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}
