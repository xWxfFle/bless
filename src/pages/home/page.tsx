import { Card, Flex, Image, Text } from '@mantine/core'
import { LayoutBase } from '@/layouts/base'

export const HomePage = () => {
  return (
    <LayoutBase>
      <Flex justify="flex-end" gap="md" w="100%">
        <Card radius="xl">
          <Flex align="flex-end" gap="xs">
            <Text>+</Text>
            <Text>8.25K</Text>
            <Image src="/boost.svg" pb={5} />
          </Flex>
        </Card>
      </Flex>
      <Flex gap="xs" align="center" mt="xl">
        <Image src="/boost-winged.svg" pb={7} />
        <Text size="xl">1000</Text>
      </Flex>
    </LayoutBase>
  )
}
