import { styled, keyframes } from 'styles'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

export const CollapsibleContent = CollapsiblePrimitive.Content
const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' }
})

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 }
})

export const CollapsibleContentWrapper = styled(CollapsiblePrimitive.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 200ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 200ms ease-out` }
})

export const RepositoryContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '2rem',
  margin: '0.5rem 0.3rem',
  padding: '0.75rem 2rem',
  boxShadow: `1px 2px 10px gray`,
  fontWeight: '600',
  span: {
    fontSize: '$md'
  },
  variants: {
    theme: {
      light: {
        backgroundColor: 'white',
        span: {
          color: '$gray800'
        }
      },
      dark: {
        backgroundColor: '$gray500',
        span: {
          color: '$gray100'
        }
      }
    }
  }
})
