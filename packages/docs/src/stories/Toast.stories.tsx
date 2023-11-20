import { StoryObj, Meta } from '@storybook/react'

import { Button, Toast, ToastProps } from '@ventura-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    triggerElement: <Button>Click here</Button>,
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    description: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
