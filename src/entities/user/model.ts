import { createQuery } from '@farfetched/core'
import { api } from '@/shared/api'

export const query = createQuery({
  name: 'user',
  effect: api.getUserFx,
})

export const $user = query.$data.map((user) => {
  return user
})

export const $$user = {
  query,
}
