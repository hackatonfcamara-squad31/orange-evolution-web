import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { deleteCookie } from 'cookies-next'
import { getApiErrorMessage } from 'libs/functions/api'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { showToastError, showToastSuccess } from 'utils/toasts'
import {
  deleteUser,
  deleteUserAvatar,
  updateUser,
  updateUserAvatar
} from './api'
import { EditProfileFormData } from './schemas'
import { User } from './types'

export const useUser = (user: User) => {
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const { theme } = useTheme()

  const router = useRouter()

  const { authUser, setAuthUser, isAuthenticaded } = useAuth()

  async function handleUpdateUser(data: EditProfileFormData) {
    setIsLoading(true)

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

        await updateUserAvatar(user.id, formData)
      }

      const updatedUser = await updateUser(updatedUserData)

      setAuthUser(updatedUser)

      showToastSuccess(theme, 'Perfil atualizado com sucesso!')
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }

    setIsLoading(false)
  }

  async function handleDeleteUserAvatar() {
    setIsLoading(true)

    try {
      await deleteUserAvatar(user.id)

      setPreview(null)

      setAuthUser({
        ...authUser,
        avatar: null
      })

      showToastSuccess(theme, 'Imagem de perfil removida com sucesso!')
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }

    setIsLoading(false)
  }

  async function handleDeleteUser() {
    setIsLoading(true)

    try {
      await deleteUser(user.id)

      deleteCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)
      setAuthUser(null)

      showToastSuccess(theme, 'Usuário excluído com sucesso! Volte sempre!')

      router.push('/')
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }

    setIsLoading(false)
  }

  return {
    isLoading,
    image,
    preview,
    setImage,
    setPreview,
    handleUpdateUser,
    handleDeleteUserAvatar,
    handleDeleteUser
  }
}
