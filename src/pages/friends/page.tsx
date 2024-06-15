import { Card, Text } from '@mantine/core'
import { LayoutBase } from '@/layouts/base'

export const FriendsPage = () => {
  return (
    <LayoutBase>
      <Text>Friends</Text>
      <Text size="xs" c="purple" mt="xs">
        Invite them!
      </Text>
      <Card mt="md">
        <Text size="xs">
          Earn 10% from your friends and 2.5% from their refs
        </Text>
      </Card>
    </LayoutBase>
  )
}
