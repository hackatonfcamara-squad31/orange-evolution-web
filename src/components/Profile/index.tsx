import { Avatar } from 'components/Avatar'
import { Text } from 'components/Text'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { LogoutButton, ProfileInfo, Wrapper } from './styles'

export function Profile() {
  const { theme } = useTheme()
  const { logout } = useAuth()

  const { authUser } = useAuth()

  return (
    <Wrapper>
      <Avatar theme={theme} src={authUser.avatar} />

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
