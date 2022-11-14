import { api } from 'services/api'
import { Trail, TrailPageData } from './types'

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

  trails.sort((a, b) => a.title.localeCompare(b.title))

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

  trail.modules.sort((a, b) => a.order - b.order)

  const progress = total === 0 ? 0 : (completed / total) * 100

  return { trail, progress }
}

export const createTrail = async (formData: FormData) => {
  const { data } = await api.post('/trails', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
  console.log('💥 ~ data', data)

  return data
}

export const updateTrail = async ({
  id,
  title,
  formData
}: {
  id: string
  title: string
  formData: FormData | null
}) => {
  if (formData) {
    await api.put(`/trails/icon/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }

  const { data } = await api.put(`/trails/${id}`, {
    title
  })

  return data
}

export const deleteTrail = async (id: string) => {
  await api.delete(`/trails/${id}`)

  return true
}
