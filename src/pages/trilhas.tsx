import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

interface TrailsProps {
  user: User
}

export default function Trails({ user }: TrailsProps) {
  const { theme } = useTheme()

  const { name, email } = user

  return (
    <>
      <Head>
        <title>Trilhas</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Trilhas</h1>
          <ul>
            <li>Nome: {name}</li>
            <li>E-mail: {email}</li>
          </ul>
          <h2>{}</h2>
          <ButtonToggleTheme />
        </Main>
      </BodyWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie('@orange-evoltuion:token', ctx)
  console.log('🚀 ~ token', token)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const user = await getAuthUser(token.toString())

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      user
    }
  }
}
