import { StoryObj, Meta } from '@storybook/react'

import { Button, Tooltip, TooltipProps } from '@ventura-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Click here</Button>,
    content: 'This is a tooltip text',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
