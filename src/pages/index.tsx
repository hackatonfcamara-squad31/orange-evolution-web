import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Checkbox } from 'components/Checkbox'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { Main } from 'styles/pages/home'

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

        <Checkbox labelFor="test" label="Test" />
        <Checkbox size="md" labelFor="test1" label="Test" />
        <Checkbox size="lg" labelFor="tes2" label="Test" />
      </Main>
    </>
  )
}
