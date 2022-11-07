import { deleteCookie, getCookie, hasCookie } from 'cookies-next'
import { User } from 'libs/user/types'
import { GetServerSidePropsContext } from 'next'
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

export const getAuthUser = async (): Promise<User> => {
  const { data }: { data: User } = await api.get('/me')

  return data
}

export async function getPageAuthUser({ req, res }: GetServerSidePropsContext) {
  const cookieName = '@orange-evolution:token'
  let authUser = null

  if (hasCookie(cookieName, { req, res })) {
    const token = getCookie(cookieName, { req, res })

    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      authUser = await getAuthUser()

      return authUser
    } catch (error) {
      deleteCookie(cookieName, { req, res })
    }
  }

  return null
}
