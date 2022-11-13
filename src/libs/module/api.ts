import { api } from 'services/api'
import { ModulePageData, Module } from './types'

export const getModule = async (token: string, id: string) => {
  if (!token) {
    return null
  }

  const { data }: { data: ModulePageData } = await api.get(
    `/modules/description/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const { module, contents, trail_id, trail_title, total, completed } = data

  const trailInfo = {
    id: trail_id,
    title: trail_title
  }

  const progress = total === 0 ? 0 : (completed / total) * 100

  return { trailInfo, progress, module, contents }
}

export const updateModule = async ({
  id,
  title,
  description
}: {
  id: string
  title: string
  description: string
  order?: number
}) => {
  const { data }: { data: Module } = await api.put(`/modules/${id}`, {
    title,
    description
  })

  return data
}

export const createModule = async ({
  title,
  description,
  trailId,
  order
}: {
  title: string
  description: string
  trailId: string
  order: number
}) => {
  const { data }: { data: Module } = await api.post(`/modules`, {
    title,
    description,
    trail: trailId,
    order
  })

  return data
}
