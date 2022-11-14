import { z } from 'zod'

export const trailSchema = z.object({
  title: z
    .string()
    .trim()
    .min(4, 'Título deve ter no mínimo 4 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres')
})

export type TrailFormData = z.infer<typeof trailSchema>
