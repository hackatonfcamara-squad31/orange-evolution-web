import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'
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
        <title>Toasts</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Toasts</h1>

          <ButtonToggleTheme />

          <Button onClick={() => showToast(theme, 'Default Toast!')}>
            Show Toast!
          </Button>

          <Button
            color="green"
            onClick={() => showToastSuccess(theme, 'Sucess Toast!')}
          >
            Show Success Toast!
          </Button>

          <Button
            color="red"
            onClick={() => showToastError(theme, 'Error Toast!')}
          >
            Show Error Toast!
          </Button>

          <Button onClick={() => showToastInfo(theme, 'Info Toast!')}>
            Show Info Toast!
          </Button>

          <Button onClick={() => showToastWarning(theme, 'Warning Toast!')}>
            Show Warning Toast!
          </Button>

          <Button
            onClick={() => showToastLoading(theme, 'Tudo Pronto!', 'success')}
          >
            Show Loading Toast!
          </Button>
        </Main>
      </BodyWrapper>
    </>
  )
}
