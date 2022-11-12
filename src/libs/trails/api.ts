import { api } from 'services/api'
import { Trail, TrailPageData } from '../trails/types'

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

export const getTrail = async (
  token: string,
  id: string
): Promise<{ trail: Trail; progress: number } | null> => {
  if (!token) {
    return null
  }

  const { data }: { data: TrailPageData } = await api.get(
    `/trails/description/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const { trail, total, completed } = data

  const progress = total === 0 ? 0 : (completed / total) * 100

  return { trail, progress }
}
