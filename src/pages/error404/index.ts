import { currentRoute } from './model'
import { Error404Page } from './page'

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
  view: Error404Page,
  route: currentRoute,
}
