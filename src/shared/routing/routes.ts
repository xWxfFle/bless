import { createRoute, UnmappedRouteObject } from 'atomic-router'

export const routes = {
  home: createRoute(),
  tasks: createRoute(),
  friends: createRoute(),
  inventory: createRoute(),
  auth: {
    signIn: createRoute(),
  },
}

export const pageNotFoundRoute = createRoute()

const createUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

/* eslint-disable @typescript-eslint/no-explicit-any */
export const routesMap: UnmappedRouteObject<any>[] = [
  { path: createUrl(''), route: routes.home },
  { path: createUrl('auth/sign-in'), route: routes.auth.signIn },
  { path: createUrl('tasks'), route: routes.tasks },
  { path: createUrl('friends'), route: routes.friends },
  { path: createUrl('inventory'), route: routes.inventory },
]
