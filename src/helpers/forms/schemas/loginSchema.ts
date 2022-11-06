import { z } from 'zod'

export const loginSchema = z.object({
    email: z
      .string()
      .trim()
      .email('Email inválido.')      
      .max(255, 'Email deve ter no máximo 255 caracteres.'),
    password: z
      .string()
      .trim()
      .min(6, 'Senha deve ter no mínimo 6 caracteres.')
      .max(100, 'Senha deve ter no máximo 100 caracteres.')
  })

  export type LoginFormData = z.infer<typeof loginSchema>