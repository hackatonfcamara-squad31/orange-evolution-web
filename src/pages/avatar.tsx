import { PrimitiveAvatar } from 'components/Avatar'
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
            <PrimitiveAvatar theme={theme} size="sm" />
            <PrimitiveAvatar theme={theme} size="md" />
            <PrimitiveAvatar theme={theme} size="lg" />
            <PrimitiveAvatar theme={theme} size="sm" />
            <PrimitiveAvatar theme={theme} size="md" />
            <PrimitiveAvatar theme={theme} size="lg" />
            <PrimitiveAvatar
              size="sm"
              theme={theme}
              src={'https://github.com/renatadellamatriz.png'}
            />
              <PrimitiveAvatar
              size="md"
              withBorder
              theme={theme}
              src={'https://github.com/capelaum.png'}
            />
             <PrimitiveAvatar
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