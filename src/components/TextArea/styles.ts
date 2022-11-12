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
  }
})
