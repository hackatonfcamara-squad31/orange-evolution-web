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
