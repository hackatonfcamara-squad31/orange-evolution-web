import { z } from 'zod'

export const editProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Nome deve ter no mínimo 3 caracteres.')
    .max(255, 'Nome deve ter no máximo 255 caracteres.'),
  email: z
    .string()
    .trim()
    .email('Email inválido.')
    .max(255, 'Email deve ter no máximo 255 caracteres.'),
  // make password optional with minimum 6 characters if it is provided
  password: z
    .union([
      z.string().length(0),
      z.string().min(6, 'Senha deve ter no mínimo 6 caracteres.'),
      z.string().max(100, 'Senha deve ter no máximo 100 caracteres.')
    ])
    .optional()
    .transform((value) => (value === '' ? undefined : value))
})

export type EditProfileFormData = z.infer<typeof editProfileSchema>
