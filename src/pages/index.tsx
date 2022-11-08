import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import Link from 'next/link'
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
            <Link href="/login" passHref>
              <Button>Login</Button>
            </Link>
            <Link href="/cadastrar">
              <Button>Cadastro</Button>
            </Link>
            <Link href="/trilhas">
              <Button>Trilhas</Button>
            </Link>
          </div>
        </Main>
      </BodyWrapper>
    </>
  )
}
