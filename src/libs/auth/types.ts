export type RegisterResponse = {
  id: string
  name: string
  email: string
  is_admin: boolean
  created_at: string
  updated_at: string
}

export type LoginResponse = {
  id: string
  email: string
  is_admin: boolean
  created_at: string
  updated_at: string
}
