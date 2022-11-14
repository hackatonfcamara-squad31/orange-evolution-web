export type Content = {
  id: string
  title: string
  type: string
  creator_name: string
  link: string
  duration?: number
  is_completed: boolean
  order: number
}

export type CreateContentFormData = {
  title: string
  type: string
  creator_name: string
  link: string
  module_id: string
}

export type UpdateContentFormData = {
  id: string
  updatedContent: {
    title: string
    type: string
    creator_name: string
    link: string
    module_id: string
  }
}
