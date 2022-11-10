import { Avatar } from 'components/Avatar'
import { AvatarWrapperTemporario } from 'components/Avatar/styles'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Heading } from 'components/Heading'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function AvatarScreen() {
  const { theme } = useTheme()
  return (
    <>
      <Head>
        <title>Avatar</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <Heading asChild size="lg">
            <h1>Avatar</h1>
          </Heading>
          <ButtonToggleTheme />

          <AvatarWrapperTemporario>
            <Avatar theme={theme} size="sm" />
            <Avatar theme={theme} size="md" />
            <Avatar theme={theme} size="lg" />

            <Avatar
              size="sm"
              theme={theme}
              src={'https://github.com/renatadellamatriz.png'}
            />

            <Avatar
              size="md"
              withBorder
              theme={theme}
              src={'https://github.com/capelaum.png'}
            />

            <Avatar
              size="lg"
              withBorder
              theme={theme}
              src={'https://github.com/kevin-neves.png'}
            />
          </AvatarWrapperTemporario>
        </Main>
      </BodyWrapper>
    </>
  )
}
