import { PrimitiveAvatar } from 'components/Avatar'
import Head from 'next/head'
import { BodyWrapper } from 'styles/pages/home'
import { useTheme } from 'contexts/ThemeContext'
import { Heading } from 'components/Heading'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { AvatarWrapperTemporario } from 'components/Avatar/styles'


export default function AvatarScreen() {

  const { theme } = useTheme()
  return (
    <>
      <Head>
        <title>Avatar</title>
      </Head>
      <BodyWrapper theme={theme}>

        <ButtonToggleTheme />

        <Heading asChild size="lg">
          <h1>Avatar</h1>
        </Heading>

        <AvatarWrapperTemporario>
        <PrimitiveAvatar size={'sm'} />
        <PrimitiveAvatar size={'md'} />
        <PrimitiveAvatar size={'lg'} />
        <PrimitiveAvatar src={'https://github.com/renatadellamatriz.png'}/>
        </AvatarWrapperTemporario>
      </BodyWrapper>
    </>
  )
}
