import {
  FCamaraLogo,
  orangeJuiceLogo,
  PdeFormacaoLogo
} from 'components/@constants'
import { Avatar } from 'components/Avatar'
import { Text } from 'components/Text'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import {
  HeaderImages,
  HeaderTextWrapper,
  HeaderUserWrapper,
  HeaderWrapper,
  LogoFCamara,
  LogoOrangeJuice,
  LogoPdeFormacao
} from './styles'

export function Header() {
  const { theme } = useTheme()
  const { isAuthenticaded, authUser } = useAuth()

  const HeaderImagesContainer = () => {
    return (
      <HeaderImages>
        <LogoFCamara
          src={FCamaraLogo}
          alt="logo do grupo FCamara"
          width={168}
          height={37}
        />
        <LogoOrangeJuice
          src={orangeJuiceLogo}
          alt="logo Orange Juice"
          width={66}
          height={49}
        />
        <LogoPdeFormacao
          src={PdeFormacaoLogo}
          alt="logo Programa de Formação"
          width={176}
          height={57}
        />
      </HeaderImages>
    )
  }

  return (
    <>
      <HeaderWrapper
        css={{
          justifyContent: isAuthenticaded ? 'space-between' : 'center'
        }}
      >
        {isAuthenticaded && (
          <HeaderUserWrapper>
            <Avatar theme={theme} />
            <HeaderTextWrapper>
              <Text>{authUser.name}</Text>
              <Text size="sm">{authUser.email}</Text>
            </HeaderTextWrapper>
          </HeaderUserWrapper>
        )}
        <HeaderImagesContainer />
      </HeaderWrapper>
    </>
  )
}
