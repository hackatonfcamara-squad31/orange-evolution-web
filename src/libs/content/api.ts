import { api } from 'services/api'

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
