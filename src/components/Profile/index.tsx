import { Avatar } from 'components/Avatar'
import { Text } from 'components/Text'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import Link from 'next/link'
import { LogoutButton, ProfileInfo, Wrapper } from './styles'

export function Profile() {
  const { theme } = useTheme()
  const { logout } = useAuth()

  const { authUser } = useAuth()

  return (
    <Wrapper>
      <Link href="/profile" title="Editar perfil">
        <Avatar theme={theme} src={authUser.avatar} />
      </Link>

      <ProfileInfo>
        <Text asChild size="sm">
          <h2>{authUser.name}</h2>
        </Text>

        <Text size="xs">{authUser.email}</Text>

        <LogoutButton type="button" title="Sair" onClick={logout}>
          Sair
        </LogoutButton>
      </ProfileInfo>
    </Wrapper>
  )
}
