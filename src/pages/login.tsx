import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Heading } from 'components/Heading'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputPassword } from 'components/Inputs/InputPassword'
import { useTheme } from 'contexts/ThemeContext'
import { loginUser } from 'libs/auth/api'
import { LoginFormData, loginSchema } from 'libs/auth/schemas/loginSchema'
import { LoginResponse } from 'libs/auth/types'
import { getApiErrorMessage } from 'libs/functions/api'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { BodyWrapper } from 'styles/pages/home'
import { LoginForm, LoginHeader } from 'styles/pages/login'
import { showToastError, showToastSuccess } from 'utils/toasts'

export default function LoginPage() {
  const { theme } = useTheme()

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
    try {
      const response: LoginResponse = await loginUser(data)
      console.log('🚀 ~ response', response)

      showToastSuccess(theme, 'Login realzado com sucesso!')

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
