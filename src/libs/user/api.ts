import { api } from 'services/api'
import { UpdateUserRequest } from './types'

export const updateUser = async (updatedUser: UpdateUserRequest) => {
  const { data } = await api.put(`/users/${updatedUser.id}`, {
    name: updatedUser.name,
    email: updatedUser.email,
    password: updatedUser.password
  })

  return data
}

export const updateUserAvatar = async (id: string, formData: FormData) => {
  const { data } = await api.put(`/users/avatar/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return data
}

export const deleteUserAvatar = async (id: string) => {
  const { data } = await api.delete(`/users/avatar/${id}`)

  return data
}

export const deleteUser = async (id: string) => {
  await api.delete(`/users/${id}`)

  return true
}
