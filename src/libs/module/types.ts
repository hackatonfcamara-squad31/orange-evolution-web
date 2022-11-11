import { Content } from 'libs/content/types'

export type Module = {
  id: string
  title: string
  description: string
  contents: Content[]
}
