import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { Main } from 'styles/pages/home'
import {
  showToast,
  showToastError,
  showToastInfo,
  showToastLoading,
  showToastSuccess,
  showToastWarning
} from 'utils/toasts'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main theme={theme}>
        <h1>Home</h1>

        <ButtonToggleTheme />

        <button onClick={() => showToast(theme, 'Default Toast!')}>
          Show Toast!
        </button>

        <button onClick={() => showToastSuccess(theme, 'Sucess Toast!')}>
          Show Success Toast!
        </button>

        <button onClick={() => showToastError(theme, 'Error Toast!')}>
          Show Error Toast!
        </button>

        <button onClick={() => showToastInfo(theme, 'Info Toast!')}>
          Show Info Toast!
        </button>

        <button onClick={() => showToastWarning(theme, 'Warning Toast!')}>
          Show Warning Toast!
        </button>

        <button
          onClick={() => showToastLoading(theme, 'Tudo Pronto!', 'success')}
        >
          Show Loading Toast!
        </button>
      </Main>
    </>
  )
}
