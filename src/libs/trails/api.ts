import { api } from 'services/api'
import { Trail } from '../trails/types'

export const getAllTrails = async (token: string): Promise<Trail[] | null> => {
  if (!token) {
    return null
  }

  const { data }: { data: { trails: Trail[] } } = await api.get(
    '/trails/description',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const { trails } = data

  return trails
}
