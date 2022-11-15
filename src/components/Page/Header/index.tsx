import {
  FCamaraLogo,
  orangeJuiceLogo,
  PdeFormacaoLogo
} from 'components/@constants'
import { Profile } from 'components/Profile'
import { useAuth } from 'contexts/AuthContext'
import {
  HeaderContent,
  HeaderImages,
  HeaderWrapper,
  LogoFCamara,
  LogoOrangeJuice,
  LogoPdeFormacao
} from './styles'

export function Header() {
  const { isAuthenticaded } = useAuth()

  const HeaderImagesContainer = () => {
    return (
      <HeaderImages
        css={{
          justifyContent: isAuthenticaded ? 'flex-end' : 'center'
        }}
      >
        <LogoFCamara src={FCamaraLogo} alt="logo do grupo FCamara" />
        <LogoOrangeJuice src={orangeJuiceLogo} alt="logo Orange Juice" />
        <LogoPdeFormacao
          src={PdeFormacaoLogo}
          alt="logo Programa de Formação"
        />
      </HeaderImages>
    )
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        {isAuthenticaded && <Profile />}

        <HeaderImagesContainer />
      </HeaderContent>
    </HeaderWrapper>
  )
}
