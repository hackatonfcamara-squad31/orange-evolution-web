import { zodResolver } from '@hookform/resolvers/zod'
import { orangeEvolutionLogo } from 'components/@constants'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputName } from 'components/Inputs/InputName'
import { InputPassword } from 'components/Inputs/InputPassword'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { RegisterFormData, registerSchema } from 'libs/auth/schemas'
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
  ImageWrapper
} from 'styles/pages/auth'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Register() {
  const { theme } = useTheme()
  const { isAuthLoading, register } = useAuth()

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
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
  } = registerForm

  const isSubmitDisabled =
    !!errors.name ||
    !!errors.email ||
    !!errors.password ||
    !watch('name') ||
    !watch('email') ||
    !watch('password')

  async function handleRegister(data: RegisterFormData) {
    const isRegisterSuccess = await register(data)

    if (isRegisterSuccess) {
      reset()
    }
  }

  return (
    <>
      <Head>
        <title>Orange Evolution | Cadastro</title>
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
              <h1>Cadastro</h1>
            </Heading>
          </HeaderWrapper>

          <FormWrapper onSubmit={handleSubmit(handleRegister)}>
            <InputName required error={errors.name} control={control} isBig />

            <InputEmail required error={errors.email} control={control} isBig />

            <InputPassword
              required
              error={errors.password}
              control={control}
              isBig
            />

            <ButtonWrapper>
              <Button
                size="lg"
                isLoading={isAuthLoading}
                disabled={isSubmitDisabled}
                type="submit"
              >
                Cadastrar
              </Button>
            </ButtonWrapper>
          </FormWrapper>

          <FooterLinkContainer>
            <Link href="/login">Já possui uma conta? Faça login!</Link>
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
