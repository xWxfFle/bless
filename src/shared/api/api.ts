import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'

export type NetworkExceptionType = 'TooManyRequests' | 'NotFound' | 'Unknown'

export class NetworkException extends Error {
  type: NetworkExceptionType

  constructor(type: NetworkExceptionType) {
    super(`${type} network exception has occured`)
    this.type = type
  }
}

export const api = wretch('/webapp')
  .addon(QueryStringAddon)
  .headers({
    'telegram-init-data': Telegram.WebApp.initData,
  })
  .catcher(404, () => {
    throw new NetworkException('NotFound')
  })
  .catcher(429, () => {
    throw new NetworkException('TooManyRequests')
  })
