import { ErrorData } from '@appTypes/errorTypes'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Heading } from 'components/Heading'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputName } from 'components/Inputs/InputName'
import { InputPassword } from 'components/Inputs/InputPassword'
import { useTheme } from 'contexts/ThemeContext'
import {
  RegisterFormData,
  registerSchema
} from 'helpers/forms/schemas/registerSchema'
import { registerUser } from 'libs/auth/api'
import { RegisterResponse } from 'libs/auth/types'
import Head from 'next/head'
import { FormProvider, useForm } from 'react-hook-form'
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
    register,
    formState: { errors }
  } = registerForm

  const { ref: nameRef, ...nameProps } = register('name')
  const { ref: emailRef, ...emailProps } = register('email')
  const { ref: passwordRef, ...passwordProps } = register('password')

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
      console.log('🚀 ~ response', response)

      showToastSuccess(theme, 'Cadastro realizado com sucesso!')

      reset()
    } catch (error) {
      const { data }: { data: ErrorData } = error.response

      const errorMessage =
        typeof data.message === 'string' ? data.message : data.message[0]

      showToastError(theme, errorMessage)
    }
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <BodyWrapper theme={theme}>
        <RegisterHeader>
          <ButtonToggleTheme />

          <Heading asChild size="lg">
            <h1>Cadastro</h1>
          </Heading>
        </RegisterHeader>

        <RegisterForm onSubmit={handleSubmit(handleRegister)}>
          <FormProvider {...registerForm}>
            <InputName
              error={!!errors.name}
              errorMessage={errors.name?.message}
              nameRef={nameRef}
              required
              {...nameProps}
            />

            <InputEmail
              error={!!errors.email}
              errorMessage={errors.email?.message}
              emailRef={emailRef}
              required
              {...emailProps}
            />

            <InputPassword
              error={!!errors.password}
              errorMessage={errors.password?.message}
              passwordRef={passwordRef}
              required
              {...passwordProps}
            />

            <Button disabled={isSubmitDisabled} type="submit" isFullWidth>
              Cadastrar
            </Button>
          </FormProvider>
        </RegisterForm>
      </BodyWrapper>
    </>
  )
}
