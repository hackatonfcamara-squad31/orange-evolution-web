import { styled } from 'styles'

export const TextWrapper = styled('div', {
  maxWidth: '1000px',
  padding: '0 2rem',
  span: {
    fontSize: 'clamp(1em, 1em + 1vw, 1.25em)',
    fontWeight: '400'
  },
  '@bp2': {
    span: {
      fontSize: 'clamp(0.5em, 0.7em + 1vw, 1.25em)'
    }
  }
})

export const CardWrapper = styled('div', {
  maxWidth: '1000px',
  width: '80vw',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '$md',
  '@bp1': {
    flexWrap: 'wrap'
  }
})

export const Card = styled('div', {
  width: '25%',
  minWidth: '270px',
  maxWidth: '280px',
  height: '400px',
  marginTop: '1rem',
  backgroundColor: '$white',
  boxShadow: '4px 4px 8px gray',
  borderRadius: '35px',
  '@bp1': {
    height: '350px'
  }
})
