import {z} from 'zod';

export const CreateUserSchema = z.object({
    username: z.string().min(4).max(8),
    password: z.string(),
    name: z.string()
})

export const SignInSchema = z.object({
    username: z.string().min(4).max(8),
    password: z.string()
})

export const CreateRoomSchema = z.object({
    name: z.string().min(4).max(8)
})