import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputName } from 'components/Inputs/InputName'
import { InputPassword } from 'components/Inputs/InputPassword'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'

import { registerUser } from 'libs/auth/api'
import {
  RegisterFormData,
  registerSchema
} from 'libs/auth/schemas/registerSchema'
import { RegisterResponse } from 'libs/auth/types'
import { getApiErrorMessage } from 'libs/functions/api'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { RegisterForm, RegisterHeader } from 'styles/pages/cadastrar'
import { BodyWrapper } from 'styles/pages/home'
import { showToastError, showToastSuccess } from 'utils/toasts'

export default function Register() {
  const { theme } = useTheme()

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
    try {
      const response: RegisterResponse = await registerUser(data)

      showToastSuccess(theme, 'Cadastro realizado com sucesso!')

      reset()
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(
        theme,
        errorMessage || 'Algo deu errado, por favor tente novamente mais tarde.'
      )
    }
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <BodyWrapper theme={theme}>
        <Header />
        <RegisterHeader>
          <ButtonToggleTheme />

          <Heading asChild size="lg">
            <h1>Cadastro</h1>
          </Heading>
        </RegisterHeader>

        <RegisterForm onSubmit={handleSubmit(handleRegister)}>
          <InputName required error={errors.name} control={control} />

          <InputEmail required error={errors.email} control={control} />

          <InputPassword required error={errors.password} control={control} />

          <Button disabled={isSubmitDisabled} type="submit" isFullWidth>
            Cadastrar
          </Button>
        </RegisterForm>
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
