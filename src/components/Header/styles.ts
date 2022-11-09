import { styled } from 'styles'

export const HeaderWrapper = styled('header', {
  width: '100vw',
  background: '$orange500',
  padding: '1.75rem 0'
})

export const HeaderImages = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3xl'
})

export const HeaderAvatarWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$sm'
})

export const HeaderTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  span: {
    color: 'white'
  }
})
