import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Checkbox } from 'components/Checkbox'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Checkboxes() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Checkboxes</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Checkboxes</h1>

          <ButtonToggleTheme />

          <Checkbox />
          <Checkbox size="md" />
          <Checkbox size="lg" />

          <Checkbox label="Lembrar de mim" labelFor="remember" />
        </Main>
      </BodyWrapper>
    </>
  )
}
