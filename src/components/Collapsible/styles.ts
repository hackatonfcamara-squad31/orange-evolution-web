import { styled, keyframes } from 'styles'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

export const CollapsibleRoot = styled(CollapsiblePrimitive.Root, {
  width: '70vw',
  marginLeft: '1rem'
})

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger

export const Flex = styled('div', { display: 'flex' })

export const Text = styled('span', {
  fontFamily: '$montserrat'
})

export const CollapsibleIconButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$2xl', //icon size
  span: {
    fontSize: '$2xl'
  },
  variants: {
    theme: {
      light: {
        color: '#FF5A23',
        '&:hover': { svg: { filter: ' drop-shadow(  0 0 3px gray)' } }
      },
      dark: {
        color: '$gray800',
        '&:hover': { svg: { filter: ' drop-shadow(  0 0 3px gray)' } }
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
