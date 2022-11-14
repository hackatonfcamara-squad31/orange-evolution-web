import { api } from 'services/api'
import { CreateContentFormData, UpdateContentFormData } from './types'

export const markContentAsCompleted = async ({
  user_id,
  content_id
}: {
  user_id: string
  content_id: string
}) => {
  const { data } = await api.post('/completed', {
    user_id,
    content_id
  })

  return data
}

export const markContentAsUncompleted = async (content_id: string) => {
  const { data } = await api.delete(`/completed/${content_id}`)

  return data
}

export const createContent = async (
  createContentFormData: CreateContentFormData
) => {
  const { data } = await api.post('/content', {
    ...createContentFormData,
    duration: 0
  })

  return data
}

export const updateContent = async ({
  id,
  updatedContent
}: UpdateContentFormData) => {
  const { data } = await api.patch(`/content/${id}`, updatedContent)

  return data
}

export const deleteContent = async (id: string) => {
  await api.delete(`/content/${id}`)

  return true
}
