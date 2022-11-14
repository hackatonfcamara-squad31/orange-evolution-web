import { z } from 'zod'

export const contentSchema = z.object({
  title: z
    .string()
    .trim()
    .min(4, 'Título deve ter no mínimo 4 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres'),
  type: z
    .string()
    .trim()
    .min(3, 'Tipo deve ter no mínimo 3 caracteres')
    .max(100, 'Tipo deve ter no máximo 100 caracteres'),
  creator_name: z
    .string()
    .trim()
    .min(3, 'Criador deve ter no mínimo 3 caracteres')
    .max(255, 'Criador deve ter no máximo 255 caracteres'),
  link: z
    .string()
    .trim()
    .min(3, 'Link deve ter no mínimo 3 caracteres')
    .max(1000, 'Link deve ter no máximo 255 caracteres')
})

export type ContentFormData = z.infer<typeof contentSchema>
