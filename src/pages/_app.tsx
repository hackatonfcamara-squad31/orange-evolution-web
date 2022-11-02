import { ThemeProvider } from 'contexts/ThemeContext'
import type { AppProps } from 'next/app'
import { globalStyles } from 'styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
