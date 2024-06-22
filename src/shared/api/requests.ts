import { createEffect } from 'effector'
import { api } from './api'

export const getUserFx = createEffect(() => api.url('/tasks').get().json())
