import { Text } from '@mantine/core'
import { LayoutBase } from '@/layouts/base'

export const InventoryPage = () => {
  return (
    <LayoutBase>
      <Text>Inventory</Text>
      <Text size="xs" c="purple" mt="xs">
        Manage your items
      </Text>
    </LayoutBase>
  )
}
