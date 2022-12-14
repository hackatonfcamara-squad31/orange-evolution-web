export type User = {
  id: string
  name: string
  email: string
  avatar: string | null
  created_at: string
  updated_at: string
  is_admin: boolean
}

export type UpdateUserRequest = {
  id: string
  name: string
  email: string
  password?: string
}
