import { styled } from 'styles'

export const PrimitiveButton = styled('button', {
  width: '100%',
  marginTop: '1rem',
  borderRadius: '8px',
  fontFamily: 'Roboto, sans-serif',
  padding: ' 0.75rem 1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,  

  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray300',
        color: '$gray900',
        transition: '0.2s',      

        '&:hover': {
          backgroundColor: '$gray200'
        },
        '&:focus': {
          outline: ' $gray500 solid 1px'
        },
        '&:active': {
          boxShadow: '2px 2px 5px $white'
        },
        svg:{
          color: '$gray900'
        }
      },
      light: {
        backgroundColor: '$gray500',
        color: '$white',
        transition: '0.2s',

        '&:hover': {
          backgroundColor: '$gray400'
        },
        '&:focus': {
          outline: ' $gray500 solid 1px'
        },
        '&:active': {
          boxShadow: '2px 2px 5px $black'
        },
        svg:{
          color: '$white'
        }
      }
    },
    size: {
      sm: {
        fontSize: '$sm',
        svg:{
          fontSize:'$sm'
        }
      },
      md: {
        fontSize: '$md',
        svg:{
          fontSize:'$md'
        }
      },
      lg: {
        fontSize: '$lg',
        svg:{
          fontSize:'$lg'
        }
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        backgroundColor: '$gray600',
        color: '$gray500',
        border: 'none',

        '&:hover': {
          backgroundColor: '$gray600'
        },
        '&:focus': {
          outline: 'none'
        },
        '&:active': {
          boxShadow: 'none'
        }
      }
    }
  }
})


