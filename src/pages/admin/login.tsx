import { zodResolver } from '@hookform/resolvers/zod'
import { orangeEvolutionLogo } from 'components/@constants'
import { Button } from 'components/Button'
import { Checkbox } from 'components/Checkbox'
import { Heading } from 'components/Heading'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputPassword } from 'components/Inputs/InputPassword'
import { Layout } from 'components/Page/Layout'
import { useAuth } from 'contexts/AuthContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { LoginFormData, loginSchema } from 'libs/auth/schemas'
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

export default function AdminLoginPage() {
  const { isAuthLoading, adminLogin } = useAuth()

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
    const isLogged = await adminLogin(data)

    if (isLogged) {
      reset()
    }
  }

  return (
    <>
      <Head>
        <title>Orange Evolution | Admin Login</title>
      </Head>

      <Layout>
        <HeaderWrapper>
          <ImageWrapper>
            <Image src={orangeEvolutionLogo} alt="Orange Evolution Logo" fill />
          </ImageWrapper>

          <Heading asChild size="lg">
            <h1>Admin Login</h1>
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
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, ctx)

  const user = await getAuthUser(token?.toString())

  if (user?.is_admin) {
    return {
      redirect: {
        destination: '/admin/trilhas',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
