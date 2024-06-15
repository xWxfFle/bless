import { currentRoute } from './model'
import { SignInPage } from './page'

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
  view: SignInPage,
  route: currentRoute,
}
