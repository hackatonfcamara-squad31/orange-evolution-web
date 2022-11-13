import { styled } from 'styles'

export const TextAreaStyled = styled('textarea', {
  width: '100%',
  height: '7rem',
  borderRadius: '$3xl',
  border: '0',
  resize: 'none',
  padding: '1rem',
  lineHeight: '$xs',
  boxShadow: '$default',
  fontFamily: '$montserrat',
  fontSize: '$sm',
  marginTop: '$md',

  '&::placeholder': {
    fontFamily: '$montserrat',
    fontSize: '$md',
    color: '$gray400'
  },

  '&:focus-within': {
    '& > div > svg': {
      color: '$orange600 !important'
    },

    outline: '2px solid $orange600 '
  },

  variants: {
    error: {
      true: {
        outline: '2px solid $red500',

        '& > div > svg': {
          color: '$red500'
        },

        '&:focus-within': {
          outline: '2px solid $red500'
        }
      }
    }
  }
})
