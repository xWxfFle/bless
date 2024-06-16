import { Text } from '@mantine/core'
import { LayoutBase } from '@/layouts/base'

export const Error404Page = () => {
  return (
    <LayoutBase>
      <Text>404</Text>
      <Text size="xs" c="grape" mt="xs">
        Page not found
      </Text>
    </LayoutBase>
  )
}
