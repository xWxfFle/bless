import { currentRoute } from './model'
import { HomePage } from './page'

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
  view: HomePage,
  route: currentRoute,
}
