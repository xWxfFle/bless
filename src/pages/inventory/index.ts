import { currentRoute } from './model'
import { InventoryPage } from './page'

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
  view: InventoryPage,
  route: currentRoute,
}
