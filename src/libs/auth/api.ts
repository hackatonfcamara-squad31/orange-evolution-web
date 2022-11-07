import { User } from 'libs/user/types'
import { api } from 'services/api'
import { RegisterFormData } from './schemas/registerSchema'
import { RegisterResponse } from './types'

export const registerUser = async (
  registerFormData: RegisterFormData
): Promise<RegisterResponse> => {
  const { data }: { data: RegisterResponse } = await api.post('/users', {
    ...registerFormData,
    is_admin: false
  })

  return data
}

export const getAuthUser = async (token: string): Promise<User | null> => {
  if (!token) {
    return null
  }

  const { data }: { data: User } = await api.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}
