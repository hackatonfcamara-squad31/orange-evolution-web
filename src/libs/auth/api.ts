import { RegisterFormData } from 'helpers/forms/schemas/registerSchema'
import { LoginFormData } from 'helpers/forms/schemas/loginSchema'
import { api } from 'services/api'
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
) : Promise<LoginResponse> => {
  const { data } : {data: LoginResponse } = await api.post('/me', {
    ...loginFormData,
    is_admin:false
  })
  return data
}