import { User } from 'libs/user/types'
import { api } from 'services/api'

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
