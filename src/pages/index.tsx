import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Checkbox } from 'components/Checkbox'
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
        </Main>
      </BodyWrapper>
    </>
  )
}
