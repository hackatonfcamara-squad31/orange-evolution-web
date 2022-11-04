import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { Main } from 'styles/pages/home'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main theme={theme}>
        <h1>Home</h1>

        <button onClick={toggleTheme}>Switch</button>
      </Main>
    </>
  )
}