import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { getPageAuthUser } from 'libs/auth/api'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import { BodyWrapper, Main } from 'styles/pages/home'

interface TrailsProps {
  authUser: User
}

export default function Trails({ authUser }: TrailsProps) {
  const { theme } = useTheme()
  const { setAuthUser } = useAuth()

  const handleAuthUserState = useCallback(() => {
    if (authUser) {
      setAuthUser(authUser)
    }
  }, [authUser, setAuthUser])

  useEffect(() => {
    handleAuthUserState()
  }, [handleAuthUserState])

  return (
    <>
      <Head>
        <title>Trilhas</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Trilhas</h1>
          <h2>{authUser?.name}</h2>
          <ButtonToggleTheme />
        </Main>
      </BodyWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authUser = await getPageAuthUser(ctx)

  if (!authUser) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      authUser
    }
  }
}
