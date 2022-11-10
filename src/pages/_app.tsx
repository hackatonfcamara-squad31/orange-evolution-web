import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Header } from 'components/Header'
import { AuthProvider } from 'contexts/AuthContext'
import { ThemeProvider, useTheme } from 'contexts/ThemeContext'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { globalStyles } from 'styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme()
  console.log('💥 ~ theme', theme)

  return (
    <ThemeProvider>
      <AuthProvider>
        <Header />
        <ButtonToggleTheme />

        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthProvider>
    </ThemeProvider>
  )
}
