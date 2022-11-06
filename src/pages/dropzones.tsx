import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Dropzones</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Dropzones</h1>
        </Main>
      </BodyWrapper>
    </>
  )
}
