import { styled } from 'styles'

export const StyledText = styled('span', {
  fontFamily: 'Roboto, sans-serif',
  color: '$gray200',

  variants: {
    size: {
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      },
      lg: {
        fontSize: '$lg'
      }
    }
  }
})
