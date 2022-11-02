import Head from 'next/head'
import { useState } from 'react'
import { Main } from 'styles/pages/home'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

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
