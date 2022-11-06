import { ImageDropzone } from 'components/ImageDropzone'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
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

          <ButtonToggleTheme />
          <ImageDropzone height={300} />

          <ImageDropzone width={200} height={200} />

          <ImageDropzone width={180} height={180} isFullRounded />
        </Main>
      </BodyWrapper>
    </>
  )
}
