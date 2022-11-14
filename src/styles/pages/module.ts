import { styled } from 'styles'

export const ModuleWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem'
})

export const AdminModuleHeaderWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '1rem'
})

export const ContentListWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column'
})

export const SearchWrapper = styled('div', {
  width: '100%',
  maxWidth: '380px',
  marginBottom: '2.5rem'
})

export const ContentList = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '1.25rem'
})
