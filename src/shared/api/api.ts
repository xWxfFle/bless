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

const createApiUrl = (url: string) => `${import.meta.env.VITE_API_URL}${url}`

export const api = wretch(createApiUrl(''))
  .addon(QueryStringAddon)
  .headers({
    'X-Init-Data':
      'query_id=AAGen5McBDFHSJ6flBxFANw9&user=%7B%22id%22%3A499999999%2C%22first_name%22%3A%22%D0%9A%D0%B8%D1%82%D0%B8%D0%BA%D0%B5%D1%82%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22risen322%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%7D&auth_date=1686300999&hash=55b29bdcb08d09125eedb5a2eb313f66fa117958ce7ffaa466a45f98cf17151c',
  })
  .catcher(404, () => {
    throw new NetworkException('NotFound')
  })
  .catcher(429, () => {
    throw new NetworkException('TooManyRequests')
  })
