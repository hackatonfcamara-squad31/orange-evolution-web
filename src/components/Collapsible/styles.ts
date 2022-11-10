import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { keyframes, styled } from 'styles'

export const CollapsibleRoot = styled(CollapsiblePrimitive.Root, {
  width: '70vw'
})

export const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  cursor: 'pointer',
  width: '100%',

  padding: '0.5rem 0.75rem',
  borderRadius: '$full',

  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  boxShadow: '$default',

  svg: {
    fontSize: '$xl',
    color: '$orange600',
    transition: 'transform 0.3s ease-in-out'
  },

  '&[data-state="open"]': {
    backgroundColor: '$orange600',

    h2: {
      color: '$white'
    },

    svg: {
      transform: 'rotate(90deg)',
      color: '$white'
    }
  },

  variants: {
    theme: {
      light: {
        backgroundColor: '$white',

        h2: {
          color: '$gray800'
        }
      },
      dark: {
        backgroundColor: '$gray700',

        h2: {
          color: '$gray100'
        }
      }
    }
  }
})

const open = keyframes({
  from: { opacity: 0, height: 0 },
  to: { opacity: 1, height: '100%' }
})

const close = keyframes({
  from: { opacity: 1, height: '100%' },
  to: { opacity: 0, height: 0 }
})

export const ContentWrapper = styled(CollapsiblePrimitive.Content, {
  transition: 'all 0.3s ease-in-out',

  '&[data-state="open"]': { animation: `${open} 0.2s ease-in-out` },
  '&[data-state="closed"]': { animation: `${close} 0.2s ease-in-out` },

  marginTop: '1rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})
