import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  html: {
    scrollBehavior: 'smooth'
  },
  body: {
    fontFamily: '$roboto',
    fontWeight: 400
  },
  'a, button': {
    cursor: 'pointer',
    border: 'none'
  }
})
