import { currentRoute } from './model'
import { TasksPage } from './page'

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
  view: TasksPage,
  route: currentRoute,
}
