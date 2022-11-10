import Image from 'next/image'
import { styled } from 'styles'

export const TextWrapper = styled('div', {
  maxWidth: '1000px',
  padding: '0 2rem',
  textAlign: 'justify',
  span: {
    fontSize: '$sm',
    fontWeight: '400'
  },
  '@bp2': {
    span: {
      fontSize: '$xs'
    }
  }
})

export const CardWrapper = styled('div', {
  maxWidth: '1000px',
  width: '80vw',
  height: '35vh',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '$md',

  '@bp1': {
    flexWrap: 'wrap',
    height: '30vh',
    gap: '$xs'
  }
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',
  width: '25%',
  minWidth: '270px',
  maxWidth: '280px',
  height: '100%',
  minHeight: '250px',
  marginTop: '1rem',
  backgroundColor: '$white',
  boxShadow: '4px 4px 8px gray',
  borderRadius: '35px',
  span: {
    color: '$orange400',
    fontWeight: 600
  },
  '@bp1': {
    height: '350px'
  }
})

export const CardImage = styled(Image, {
  width: '100px',
  height: '100px'
})

export const ButtonWrapper = styled('div', {
  width: '170px'
})
