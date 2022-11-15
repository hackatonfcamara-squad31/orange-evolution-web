import { zodResolver } from '@hookform/resolvers/zod'
import { orangeEvolutionLogo } from 'components/@constants'
import { AppLayout } from 'components/AppLayout'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { ImageDropzone } from 'components/ImageDropzone'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputName } from 'components/Inputs/InputName'
import { InputPassword } from 'components/Inputs/InputPassword'
import { Text } from 'components/Text'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { getApiErrorMessage } from 'libs/functions/api'
import { updateUser, updateUserAvatar } from 'libs/user/api'
import { EditProfileFormData, editProfileSchema } from 'libs/user/schemas'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { MdNoPhotography } from 'react-icons/md'
import { FormWrapper, HeaderWrapper, ImageWrapper } from 'styles/pages/auth'
import { ButtonWrapper, ProfileAvatarDropzone } from 'styles/pages/profile'
import { showToastError, showToastSuccess } from 'utils/toasts'

interface ProfilePageProps {
  user: User
  token: string
}

export default function ProfilePage({ user }: ProfilePageProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const { theme } = useTheme()

  const { authUser, setAuthUser, login } = useAuth()

  const editProfileForm = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  useEffect(() => {
    if (authUser) {
      editProfileForm.setValue('name', authUser.name)
      editProfileForm.setValue('email', authUser.email)
    }

    if (authUser?.avatar) {
      setPreview(authUser.avatar)
    }
  }, [authUser, editProfileForm])

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors }
  } = editProfileForm

  const isSubmitDisabled =
    !!errors.name ||
    !!errors.email ||
    !!errors.password ||
    !watch('name') ||
    !watch('email')

  async function handleEditProfile(data: EditProfileFormData) {
    setIsLoading(true)
    console.log('💥 ~ data', data)

    const updatedUserData = {
      id: user.id,
      name: data.name,
      email: data.email,
      password: data.password
    }

    try {
      if (image) {
        const formData = new FormData()
        formData.append('avatar', image)

        const response = await updateUserAvatar(user.id, formData)
      }

      const updatedUser = await updateUser(updatedUserData)
      console.log('💥 ~ updatedUser', updatedUser)

      setAuthUser(updatedUser)

      showToastSuccess(theme, 'Perfil atualizado com sucesso!')
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }

    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Orange Evolution | Perfil</title>
      </Head>

      <AppLayout>
        <HeaderWrapper>
          <ImageWrapper>
            <Image src={orangeEvolutionLogo} alt="Orange Evolution Logo" fill />
          </ImageWrapper>

          <Heading asChild size="lg">
            <h1>Edição de Perfil</h1>
          </Heading>
        </HeaderWrapper>

        <ProfileAvatarDropzone>
          <Text>Editar foto de perfil</Text>

          <ImageDropzone
            isCover
            width={200}
            height={200}
            isFullRounded
            preview={preview ?? user.avatar}
            setPreview={setPreview}
            setImage={setImage}
          />

          {preview && (
            <Button color="red">
              Excluir foto de perfil
              <MdNoPhotography size={20} />
            </Button>
          )}
        </ProfileAvatarDropzone>

        <FormWrapper onSubmit={handleSubmit(handleEditProfile)}>
          <InputName required error={errors.name} control={control} isBig />

          <InputEmail required error={errors.email} control={control} isBig />

          <InputPassword error={errors.password} control={control} isBig />

          <ButtonWrapper>
            <Button
              size="lg"
              isLoading={isLoading}
              disabled={isSubmitDisabled}
              type="submit"
            >
              Salvar
            </Button>

            <Button size="lg" color="red" isLoading={isLoading} type="button">
              Excluir Conta
              <BsFillExclamationCircleFill />
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </AppLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, ctx)

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
      token,
      user
    }
  }
}
