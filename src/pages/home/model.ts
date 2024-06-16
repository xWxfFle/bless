import { createEvent, createStore, sample } from 'effector'
import { routes } from '@/shared/routing'

export const currentRoute = routes.home

export const counterIncreased = createEvent()

export const $increaseBy = createStore(1).on(
  counterIncreased,
  (state) => state + 1,
)
export const $counter = createStore(0)

sample({
  clock: counterIncreased,
  source: [$counter, $increaseBy],
  fn: ([counter, increaseBy]) => counter + increaseBy,
  target: $counter,
})

export const $formattedCounter = $counter.map((counter) => {
  let k = 0
  let num = counter
  while (num >= 1000) {
    num /= 1000
    k++
  }
  let result = num.toFixed(2)
  if (result.endsWith('.00')) {
    result = result.slice(0, Math.max(0, result.length - 3))
  }
  return result + 'K'.repeat(k)
})
