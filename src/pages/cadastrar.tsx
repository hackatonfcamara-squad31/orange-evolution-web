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
import Head from 'next/head'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterForm, RegisterHeader } from 'styles/pages/cadastrar'
import { BodyWrapper } from 'styles/pages/home'

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

  function handleRegister(data: RegisterFormData) {
    console.log('🚀 ~ data', data)

    reset()
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
