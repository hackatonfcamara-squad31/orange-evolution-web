import {
  HeaderUserWrapper,
  HeaderImages,
  HeaderTextWrapper,
  HeaderWrapper,
  LogoFCamara,
  LogoOrangeJuice,
  LogoPdeFormacao
} from './styles'
import logoFCamara from '../../../public/logofcamara.svg'
import logoOrangeJuice from '../../../public/logoorangejuice.svg'
import logoPdeFormacao from '../../../public/logopdeformacao.svg'
import { useAuth } from '../../contexts/AuthContext'
import { Avatar } from 'components/Avatar'
import { useTheme } from '../../contexts/ThemeContext'
import { Text } from 'components/Text'

export function Header() {
  const { theme } = useTheme()
  const { isAuthenticaded, authUser } = useAuth()

  const HeaderImagesContainer = () => {
    return (
      <HeaderImages>
        <LogoFCamara
          src={logoFCamara}
          alt="logo do grupo FCamara"
          width={168}
          height={37}
        />
        <LogoOrangeJuice
          src={logoOrangeJuice}
          alt="logo Orange Juice"
          width={66}
          height={49}
        />
        <LogoPdeFormacao
          src={logoPdeFormacao}
          alt="logo Programa de Formação"
          width={176}
          height={57}
        />
      </HeaderImages>
    )
  }

  return (
    <>
      {isAuthenticaded ? (
        <HeaderWrapper
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1rem',
            gap: '2.5rem'
          }}
        >
          <HeaderUserWrapper>
            <Avatar theme={theme} />
            <HeaderTextWrapper>
              <Text>{authUser.name}</Text>
              <Text size="sm">{authUser.email}</Text>
            </HeaderTextWrapper>
          </HeaderUserWrapper>

          <HeaderImagesContainer />
        </HeaderWrapper>
      ) : (
        <HeaderWrapper style={{ padding: '1.5rem 0' }}>
          <HeaderImagesContainer />
        </HeaderWrapper>
      )}
    </>
  )
}
