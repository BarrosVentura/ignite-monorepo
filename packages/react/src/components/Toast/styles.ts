import {
  Close,
  Description,
  Root,
  Title,
  Viewport,
} from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

export const ToastViewport = styled(Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  padding: '$3 $4',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Title, {
  gridArea: 'title',
  fontFamily: '$default',
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(Description, {
  gridArea: 'description',
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  fontWeight: '$regular',
})

export const ToastClose = styled(Close, {
  all: 'unset',

  color: '$gray200',
  padding: '$1',

  width: '$5',
  height: '$5',

  border: '1px solid transparent',

  cursor: 'pointer',
})
