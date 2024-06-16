import {
  Avatar,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Table,
  Text,
} from '@mantine/core'
import { IconUsers } from '@tabler/icons-react'
import { LayoutBase } from '@/layouts/base'
import { friends } from './model'

export const FriendsTable = () => {
  const rows = friends.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Flex align="center" gap={2}>
              <Text fz="xs" c="dimmed">
                {item.refs}
              </Text>
              <IconUsers size={16} color="var(--mantine-color-dimmed)" />
            </Flex>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Flex align="center" justify="flex-end">
          <Text>{item.boosts}</Text>
          <Image src="/boost.svg" pb={5} />
        </Flex>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Card mt="lg" pb={0} w="100%">
      <Table.ScrollContainer minWidth={300}>
        <Table verticalSpacing="sm">
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Card>
  )
}

export const FriendsPage = () => {
  return (
    <LayoutBase>
      <Text>Friends</Text>

      <Card mt="lg">
        <Text size="xs">
          Earn 10% from your friends and 2.5% from their refs
        </Text>
      </Card>
      <Card mt="lg" w="100%">
        <Flex align="center" gap="lg">
          <Image src="/gift.svg" />
          <Stack>
            <Flex align="center">
              <Text>2.45K</Text>
              <Image src="/boost.svg" pb={5} />
            </Flex>
            <Button>Claim gift</Button>
          </Stack>
        </Flex>
      </Card>
      <Flex w="100%" mt="lg">
        <Text>Your friends</Text>
      </Flex>
      <FriendsTable />
      <Button mt="lg" fullWidth>
        Invite a friend
      </Button>
    </LayoutBase>
  )
}
