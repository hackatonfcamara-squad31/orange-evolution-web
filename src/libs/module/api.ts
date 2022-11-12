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
