import { styled } from 'styles'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

export const CollapsibleRoot = styled(CollapsiblePrimitive.Root, {
  width: '70vw'
})

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger
export const CollapsibleContent = CollapsiblePrimitive.Content

export const Flex = styled('div', { display: 'flex' })

export const Text = styled('span', {
  fontFamily: '$montserrat'
})

export const CollapsibleIconButton = styled('button', {
  all: 'unset',
  // borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  // boxShadow: `0 2px 5px black`,
  fontSize: '$2xl',

  variants: {
    theme: {
      light: {
        color: '#FF5A23',
        // '&[data-state="closed"]': { backgroundColor: '$gray100' },
        // '&[data-state="open"]': { backgroundColor: '$gray100' },
        '&:hover': { svg: { filter: ' drop-shadow(  0 0 3px gray)' } }
      },
      dark: {
        color: '$gray800',

        // '&[data-state="closed"]': { backgroundColor: '$gray300' },
        // '&[data-state="open"]': { backgroundColor: '$gray300' },
        '&:hover': { svg: { filter: ' drop-shadow(  $sm )' } }
      }
    }
  }
})

export const RepositoryModule = styled('div', {
  display: 'flex',
  borderRadius: '2rem',
  margin: '10px 0',
  padding: '0.6rem 1.5rem',
  boxShadow: `1px 2px 10px gray`,

  span: {
    fontWeight: '600',
    fontSize: '$lg'
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
        backgroundColor: '$gray600',
        span: {
          color: '$gray100'
        }
      }
    }
  }
})

export const RepositoryContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '2rem',
  margin: '0.5rem 0',
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
