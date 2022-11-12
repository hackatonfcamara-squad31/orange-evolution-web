import { styled } from 'styles'

export const Wrapper = styled('div', {
  position: 'absolute',
  top: 110,
  right: 24,
  zIndex: 1,

  '@bp3': {
    top: 166
  },
  '@bp4': {
    top: 152
  }
})
