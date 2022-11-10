import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function ModulePage() {
  const { theme } = useTheme()

  const router = useRouter()

  const { id } = router.query
  console.log('💥 ~ id', id)

  return (
    <>
      <Head>
        <title>Orange Evolution | Módulo {id}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <ButtonToggleTheme />

        <Main></Main>
      </BodyWrapper>
    </>
  )
}
