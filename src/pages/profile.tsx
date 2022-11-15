import { zodResolver } from '@hookform/resolvers/zod'
import { orangeEvolutionLogo } from 'components/@constants'
import { AppLayout } from 'components/AppLayout'
import { Button } from 'components/Button'
import { DialogAlert } from 'components/DialogAlert'
import { Heading } from 'components/Heading'
import { ImageDropzone } from 'components/ImageDropzone'
import { InputEmail } from 'components/Inputs/InputEmail'
import { InputName } from 'components/Inputs/InputName'
import { InputPassword } from 'components/Inputs/InputPassword'
import { Text } from 'components/Text'
import { useAuth } from 'contexts/AuthContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { useUser } from 'libs/user/hooks'
import { EditProfileFormData, editProfileSchema } from 'libs/user/schemas'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { MdNoPhotography } from 'react-icons/md'
import { TbArrowBackUp } from 'react-icons/tb'
import { FormWrapper, HeaderWrapper, ImageWrapper } from 'styles/pages/auth'
import {
  BackLink,
  BackLinkWrapper,
  ButtonWrapper,
  ProfileAvatarDropzone
} from 'styles/pages/profile'

interface ProfilePageProps {
  user: User
  token: string
}

export default function ProfilePage({ user }: ProfilePageProps) {
  const { authUser } = useAuth()

  const {
    isLoading,
    preview,
    setImage,
    setPreview,
    handleUpdateUser,
    handleDeleteUserAvatar,
    handleDeleteUser
  } = useUser(user)

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
      setPreview(authUser.avatar)
    }
  }, [authUser, editProfileForm, setPreview])

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

  return (
    <>
      <Head>
        <title>Orange Evolution | Perfil</title>
      </Head>

      <AppLayout>
        <BackLinkWrapper>
          <BackLink href={`${user.is_admin ? '/admin' : ''}/trilhas`}>
            <TbArrowBackUp size={24} />
            Trilhas
          </BackLink>
        </BackLinkWrapper>

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
            preview={preview}
            setPreview={setPreview}
            setImage={setImage}
          />

          {preview && authUser?.avatar && (
            <Button
              color="red"
              onClick={handleDeleteUserAvatar}
              isLoading={isLoading}
            >
              Excluir foto de perfil
              <MdNoPhotography size={20} />
            </Button>
          )}
        </ProfileAvatarDropzone>

        <FormWrapper onSubmit={handleSubmit(handleUpdateUser)}>
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

            <DialogAlert
              title="Excluir Conta?"
              description="Tem certeza que você quer excluir sua conta? Essa operação é irreversível!"
              triggerText={
                <>
                  Excluir Conta
                  <BsFillExclamationCircleFill />
                </>
              }
              triggerButtonProps={{
                color: 'red',
                size: 'lg',
                isLoading,
                type: 'button',
                title: 'Excluir Conta'
              }}
              confirmText="Sim, excluir conta"
              cancelText="Cancelar"
              onConfirm={handleDeleteUser}
            />
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
