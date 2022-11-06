import { styled } from 'styles'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  maxWidth:'4rem',

  variants: {
    size: {
      sm: {
        svg: {
          width: '1.5rem',
          height: '1.5rem',
          maxWidth:'1.5rem',
        }
      },
      md: {
        svg: {
          width: '2rem',
          height: '2rem',
          maxWidth:'2rem',
        }
      },
      lg: {
        svg: {
          width: '3rem',
          height: '3rem',
          maxWidth:'3rem',
        }
      }
    }
  }
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100',
  objectFit: 'cover'
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray500',
  color: '$gray800',

  variants: {
    size: {
      sm: {
        svg: {
          width: '3rem',
          height: '3rem'
        }
      },
      md: {
        svg: {
          width: '4rem',
          height: '4rem'
        }
      },
      lg: {
        svg: {
          width: '5rem',
          height: '5rem'
        }
      }
    }
  }
})

export const AvatarWrapperTemporario = styled('div',{
  width:'30vw',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'baseline'
})