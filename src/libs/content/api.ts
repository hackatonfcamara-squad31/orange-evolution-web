import { api } from 'services/api'
import { Content } from './types'

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

export const updateContent = async ({
  id,
  title,
  type,
  creator_name,
  link
}: {
  id: string
  title: string
  type: string
  creator_name: string
  link: string
}) => {
  const { data }: { data: Content } = await api.patch(`/content/${id}`, {
    title,
    type,
    creator_name,
    link
  })

  return data
}

export const createContent = async ({
  title,
  type,
  creator_name,
  link,
  module_id,
  duration
}: {
  title: string
  type: string
  creator_name: string
  link: string
  module_id: string
  duration: number
}) => {
  const { data }: { data: Content } = await api.post(`/content`, {
    title,
    type,
    creator_name,
    link,
    module_id,
    duration
  })

  return data
}
