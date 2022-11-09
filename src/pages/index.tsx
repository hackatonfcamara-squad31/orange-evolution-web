import { ButtonLink } from 'components/ButtonLink'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Home</h1>
          <ButtonToggleTheme />

          <div style={{ display: 'flex', gap: '2rem' }}>
            <ButtonLink text="Login" href="/login" />
            <ButtonLink text="Cadastro" href="/cadastrar" />
            <ButtonLink text="Trilhas" href="/trilhas" />
          </div>
        </Main>
      </BodyWrapper>
    </>
  )
}
