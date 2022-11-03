import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Selects</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Selects</h1>
          <button onClick={toggleTheme}>Switch</button>
        </Main>
      </BodyWrapper>
    </>
  )
}
