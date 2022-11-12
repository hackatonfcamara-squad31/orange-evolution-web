import { styled } from 'styles'

export const TrailWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem'
})

export const ModuleListWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column'
})

export const ModuleList = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '1.5rem',

  '@bp4': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
  }
})

export const ModuleCard = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  padding: '1.5rem',
  backgroundColor: '$white',
  boxShadow: '$default',
  borderRadius: '$xl'
})

export const ModuleCardButtonWrapper = styled('div', {
  width: '100%',
  marginTop: 'auto'
})
