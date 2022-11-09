import {
  HeaderAvatarWrapper,
  HeaderImages,
  HeaderTextWrapper,
  HeaderWrapper
} from './styles'
import Image from 'next/image'
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
        <Image
          src={logoFCamara}
          alt="logo do grupo FCamara"
          width={168}
          height={37}
        />
        <Image
          src={logoOrangeJuice}
          alt="logo do grupo FCamara"
          width={66}
          height={49}
        />
        <Image
          src={logoPdeFormacao}
          alt="logo do grupo FCamara"
          width={176}
          height={57}
        />
      </HeaderImages>
    )
  }

  return (
    <HeaderWrapper>
      {isAuthenticaded ? (
        <HeaderWrapper
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 7.5rem'
          }}
        >
          <HeaderAvatarWrapper>
            <div>
              <Avatar size="md" theme={theme} />
            </div>
            <HeaderTextWrapper>
              <Text>{authUser.name}</Text>
              <Text size="sm">{authUser.email}</Text>
            </HeaderTextWrapper>
          </HeaderAvatarWrapper>
          <HeaderImagesContainer />
        </HeaderWrapper>
      ) : (
        <HeaderImagesContainer />
      )}
    </HeaderWrapper>
  )
}
