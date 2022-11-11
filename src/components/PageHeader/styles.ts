import { styled } from 'styles'

export const PageHeaderWrapper = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '2.5rem',
  marginBottom: '2.5rem',

  '@bp2': {
    flexDirection: 'column'
  }
})

export const Breadcrumbs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '$md',
  fontWeight: 500,
  color: '$orange400',
  textDecoration: 'none',
  flexWrap: 'wrap',

  a: {
    fontSize: '$md',
    fontWeight: 500,
    color: '$orange400',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.25rem'
    },

    '@bp3': {
      fontSize: '$sm'
    }
  }
})
