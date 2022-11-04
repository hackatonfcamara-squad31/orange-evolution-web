import { ThemeProvider } from 'contexts/ThemeContext'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { globalStyles } from 'styles/global'

import 'react-toastify/dist/ReactToastify.min.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  )
}
