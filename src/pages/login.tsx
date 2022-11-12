import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { Checkbox } from 'components/Checkbox'
import { Header } from 'components/Header'
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
import {
  ButtonWrapper,
  FooterLinkContainer,
  FormWrapper,
  HeaderWrapper,
  ImageWrapper,
  LoginFormFooter
} from 'styles/pages/auth'
import { BodyWrapper, Main } from 'styles/pages/home'

import orangeEvolutionLogo from '@/public/orangeEvolutionLogo.svg'

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
        <Header />

        <Main>
          <HeaderWrapper>
            <ImageWrapper>
              <Image
                src={orangeEvolutionLogo}
                alt="Orange Evolution Logo"
                fill
              />
            </ImageWrapper>

            <Heading asChild size="lg">
              <h1>Login</h1>
            </Heading>
          </HeaderWrapper>

          <FormWrapper onSubmit={handleSubmit(handleLogin)}>
            <InputEmail required error={errors.email} control={control} isBig />

            <InputPassword
              required
              error={errors.password}
              control={control}
              isBig
            />

            <LoginFormFooter>
              <Checkbox label="Lembrar de mim" labelFor="remember" />

              <Link href="#">Esqueci minha senha</Link>
            </LoginFormFooter>

            <ButtonWrapper>
              <Button
                size="lg"
                isLoading={isAuthLoading}
                disabled={isSubmitDisabled}
                type="submit"
              >
                Fazer Login
              </Button>
            </ButtonWrapper>
          </FormWrapper>

          <FooterLinkContainer>
            <Link href="/cadastrar">Ainda não tem conta? Cadastre-se!</Link>
          </FooterLinkContainer>
        </Main>
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
