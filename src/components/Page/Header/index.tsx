import {
  FCamaraLogo,
  orangeJuiceLogo,
  PdeFormacaoLogo
} from 'components/@constants'
import { Profile } from 'components/Profile'
import { useAuth } from 'contexts/AuthContext'
import Link from 'next/link'
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
      <HeaderImages isAuthenticaded={isAuthenticaded}>
        <Link
          href="https://www.fcamara.com.br"
          target="_blank"
          rel="noreferrer noopener"
          title="Ir para o site do Grupo FCamara"
        >
          <LogoFCamara src={FCamaraLogo} alt="logo do grupo FCamara" />
        </Link>
        <Link
          href="https://digital.fcamara.com.br/orangejuice"
          target="_blank"
          rel="noreferrer noopener"
          title="Ir para o site do Orange Juice"
        >
          <LogoOrangeJuice src={orangeJuiceLogo} alt="logo Orange Juice" />
        </Link>
        <Link
          href="https://digital.fcamara.com.br/programadeformacao"
          target="_blank"
          rel="noreferrer noopener"
          title="Ir para o site do Programa de Formação"
        >
          <LogoPdeFormacao
            src={PdeFormacaoLogo}
            alt="logo Programa de Formação"
          />
        </Link>
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
