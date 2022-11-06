import { RegisterFormData } from 'helpers/forms/schemas/registerSchema'
import { api } from 'services/api'
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
