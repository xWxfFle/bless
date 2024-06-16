import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Progress,
  rem,
  Text,
} from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { IconShirtFilled } from '@tabler/icons-react'
import { useUnit } from 'effector-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { LayoutBase } from '@/layouts/base'
import {
  $counter,
  $formattedCounter,
  $increaseBy,
  counterIncreased,
} from './model'

type FlyingLabel = {
  id: number
  value: number
  left: number
  initialY: number
}
const Boost = () => {
  const { ref, width } = useElementSize()
  const handlecounterIncrease = useUnit(counterIncreased)
  const increaseBy = useUnit($increaseBy)
  const [flyingLabels, setFlyingLabels] = useState<FlyingLabel[]>([])

  const handleClick = () => {
    handlecounterIncrease()
    setFlyingLabels((prev) => [
      ...prev,
      {
        id: prev.length,
        initialY: 0,
        left: Math.random() * width,
        value: increaseBy,
      },
    ])
  }

  return (
    <Box pos="relative" w="100%">
      <Button
        mt="lg"
        ref={ref}
        p={0}
        style={{ borderRadius: '100%' }}
        h={rem(width)}
        onClick={handleClick}
        fullWidth
      >
        MR.BLESS
      </Button>
      {flyingLabels.map(({ id, initialY, left, value }) => (
        <motion.div
          key={id}
          initial={{ y: initialY, opacity: 1 }}
          animate={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() =>
            setFlyingLabels((prev) => prev.filter((label) => label.id !== id))
          }
          style={{
            position: 'absolute',
            left,
            top: 10,
          }}
        >
          +{value}
        </motion.div>
      ))}
    </Box>
  )
}

export const HomePage = () => {
  const [counter, formattedCounter] = useUnit([$counter, $formattedCounter])
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
      <Flex gap="xs" align="center" mt="lg">
        <Image src="/boost-winged.svg" pb={7} />
        <Text size="xl">{formattedCounter}</Text>
      </Flex>
      <Flex gap="xs" align="center" mt="lg" w="100%">
        <Progress radius="xl" size="xl" value={counter / 100} flex={1} />
        <IconShirtFilled size={30} />
      </Flex>
      <Boost />
    </LayoutBase>
  )
}
