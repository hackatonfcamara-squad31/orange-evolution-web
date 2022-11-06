import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputName } from 'components/Inputs/InputName'
import { InputPassword } from 'components/Inputs/InputPassword'
import { InputSearch } from 'components/Inputs/InputSearch'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Inputs</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Inputs</h1>

          <ButtonToggleTheme />

          <InputName />

          <InputEmail />

          <InputPassword />

          <InputSearch />
        </Main>
      </BodyWrapper>
    </>
  )
}
