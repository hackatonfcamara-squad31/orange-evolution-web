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
    fontFamily: '$montserrat',
    fontWeight: 400
  },
  'a, button': {
    cursor: 'pointer',
    border: 'none'
  },
  input: {
    border: 'none'
    // '&:-webkit-autofill, &:-webkit-autofill:focus': {
    //   transition: 'background-color 600000s 0s, color 600000s 0s'
    // }
  }
})
