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
    backgroundColor: '$gray900',
    color: '$gray300',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400
  },

  'a, button': {
    cursor: 'pointer',
    border: 'none'
  }
})
