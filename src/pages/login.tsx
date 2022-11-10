import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { Checkbox } from 'components/Checkbox'
import { Heading } from 'components/Heading'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputPassword } from 'components/Inputs/InputPassword'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { LoginFormData, loginSchema } from 'libs/auth/schemas/loginSchema'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { BodyWrapper } from 'styles/pages/home'
import {
  ButtonContainer,
  ImageContainer,
  LoginForm,
  LoginFormFooter,
  LoginHeader,
  RegisterLinkContainer
} from 'styles/pages/login'

import orangeLogo from '../../public/orangeLogo.svg'

export default function LoginPage() {
  const { theme } = useTheme()
  const { isAuthLoading, login } = useAuth()

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
    }
  }

  return (
    <>
      <Head>
        <title>Orange Evolution | Login</title>
      </Head>

      <BodyWrapper theme={theme}>
        <LoginHeader>
          <ImageContainer>
            <Image src={orangeLogo} alt="Orange Evolution Logo" fill />
          </ImageContainer>

          <Heading asChild size="lg">
            <h1>Login</h1>
          </Heading>
        </LoginHeader>

        <LoginForm onSubmit={handleSubmit(handleLogin)}>
          <InputEmail required error={errors.email} control={control} />

          <InputPassword required error={errors.password} control={control} />

          <LoginFormFooter>
            <Checkbox label="Lembrar de mim" labelFor="remember" />

            <Link href="#">Esqueci minha senha</Link>
          </LoginFormFooter>

          <ButtonContainer>
            <Button
              size="lg"
              isLoading={isAuthLoading}
              disabled={isSubmitDisabled}
              type="submit"
            >
              Fazer Login
            </Button>
          </ButtonContainer>
        </LoginForm>

        <RegisterLinkContainer>
          <Link href="/cadastrar">Ainda não tem conta? Cadastra-se</Link>
        </RegisterLinkContainer>
      </BodyWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, ctx)

  if (token) {
    return {
      redirect: {
        destination: '/trilhas',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
