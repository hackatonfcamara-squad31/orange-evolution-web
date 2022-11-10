import * as Avatar from '@radix-ui/react-avatar'
import { styled } from 'styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  border: '1px solid red',

  variants: {
    theme: {
      light: {},
      dark: {}
    },
    size: {
      sm: {
        width: '2rem',
        height: '2rem'
      },
      md: {
        width: '3rem',
        height: '3rem'
      },
      lg: {
        width: '4rem',
        height: '4rem'
      }
    },
    withBorder: {
      true: {
        border: '3px solid $gray300'
      }
    }
  },

  compoundVariants: [
    {
      theme: 'light',
      withBorder: true,

      css: {
        border: '3px solid $gray400'
      }
    },
    {
      theme: 'dark',
      withBorder: true,

      css: {
        border: '3px solid $gray600'
      }
    }
  ]
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: '100%',
    height: '100%'
  },

  color: '$gray100',
  backgroundColor: 'transparent'
})

export const AvatarWrapperTemporario = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '$md'
})
