import { Content } from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Content, {
  fontFamily: '$highlight',
  backgroundColor: '$gray900',
  padding: '$3 $4',
  color: '$gray100',

  fontSize: '$sm',
  borderRadius: '$xs',

  boxShadow: '4 16 24 rgba(0,0,0,0.25)',
})
