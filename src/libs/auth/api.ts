import { api } from 'services/api'
import { LoginFormData } from './schemas/loginSchema'
import { RegisterFormData } from './schemas/registerSchema'
import { LoginResponse, RegisterResponse } from './types'

export const registerUser = async (
  registerFormData: RegisterFormData
): Promise<RegisterResponse> => {
  const { data }: { data: RegisterResponse } = await api.post('/users', {
    ...registerFormData,
    is_admin: false
  })

  return data
}

export const loginUser = async (
  loginFormData: LoginFormData
): Promise<LoginResponse> => {
  const { data }: { data: LoginResponse } = await api.post('/login', {
    ...loginFormData,
    is_admin: false
  })

  return data
}
