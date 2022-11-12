import { Trail } from '../trails/types'
import { api } from 'services/api'

export const getAllTrails = async (token: string): Promise<Trail[] | null> => {
  if (!token) {
    return null
  }

  const { data }: { data: Trail[] } = await api.get('/trails', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}
