import { styled } from 'styles'

export const DropzoneContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$lg',
  padding: '1.25rem',
  cursor: 'pointer',

  position: 'relative',
  overflow: 'hidden',

  border: '2px dashed $gray500',

  img: {
    width: '100%',
    height: '100%',
    padding: '1rem',
    objectFit: 'contain'
  },

  transition: 'all 0.2s ease-in-out',

  '&::after': {
    transition: 'all 0.5s ease-in-out'
  },

  '&:hover': {
    '&::after': {
      transition: 'all 0.5s ease-in-out',
      content: 'Atualizar imagem',
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '$white',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  variants: {
    theme: {
      light: {
        '&:hover': {
          borderColor: '$gray900',
          color: '$gray800'
        }
      },
      dark: {
        '&:hover': {
          borderColor: '$gray300',
          color: '$gray300'
        }
      }
    },

    isCover: {
      true: {
        img: {
          padding: 0,
          objectFit: 'cover'
        }
      }
    },

    isDragActive: {
      true: {
        borderColor: '$gray300',
        color: '$gray300',

        '&::after': {
          content: 'Atualizar imagem',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: '$white',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    },

    isFullRounded: {
      true: {
        borderRadius: '50%'
      }
    }
  },

  defaultVariants: {
    theme: 'light',
    isCover: false,
    isDragActive: false,
    isFullRounded: false
  }
})

export const DropzoneTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '$sm',
  padding: '1.25rem'
})
