import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Heading } from 'components/Heading'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputPassword } from 'components/Inputs/InputPassword'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { getPageAuthUser } from 'libs/auth/api'
import { LoginFormData, loginSchema } from 'libs/auth/schemas/loginSchema'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { BodyWrapper } from 'styles/pages/home'
import { LoginForm, LoginHeader } from 'styles/pages/login'

export default function LoginPage() {
  const { theme } = useTheme()
  const { isAuthLoading, login } = useAuth()

  const router = useRouter()

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors }
  } = loginForm

  const isSubmitDisabled =
    !!errors.email || !!errors.password || !watch('email') || !watch('password')

  async function handleLogin(data: LoginFormData) {
    const isLogged = await login(data)

    if (isLogged) {
      reset()

      router.push('/trilhas')
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <BodyWrapper theme={theme}>
        <LoginHeader>
          <ButtonToggleTheme />
          <Heading asChild size="lg">
            <h1>Login</h1>
          </Heading>
        </LoginHeader>

        <LoginForm onSubmit={handleSubmit(handleLogin)}>
          <InputEmail required error={errors.email} control={control} />

          <InputPassword required error={errors.password} control={control} />

          <Button
            isLoading={isAuthLoading}
            color="green"
            disabled={isSubmitDisabled}
            type="submit"
            isFullWidth
          >
            Login
          </Button>
        </LoginForm>
      </BodyWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authUser = await getPageAuthUser(ctx)

  if (authUser) {
    return {
      redirect: {
        destination: '/trilhas',
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
