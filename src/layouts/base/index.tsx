import { AppShell, Container, Flex, useMantineTheme } from '@mantine/core'
import {
  IconGiftFilled,
  IconHomeFilled,
  IconLayoutListFilled,
  IconShoppingCartFilled,
  IconUserFilled,
} from '@tabler/icons-react'
import { Link } from 'atomic-router-react'
import type { ReactNode } from 'react'
import { routes } from '@/shared/routing'
import classes from './styles.module.css'

const navigationItems = [
  { title: 'Tasks', to: routes.tasks, Icon: IconLayoutListFilled },
  { title: 'Friends', to: routes.friends, Icon: IconGiftFilled },
  { title: 'Home', to: routes.home, Icon: IconHomeFilled },
  { title: 'Shops', to: routes.shops, Icon: IconShoppingCartFilled },
  { title: 'Inventory', to: routes.inventory, Icon: IconUserFilled },
]

const Footer = () => {
  const { colors, radius } = useMantineTheme()
  return (
    <AppShell.Footer
      withBorder={false}
      bg={colors.dark[8]}
      style={{
        borderTopLeftRadius: radius.lg,
        borderTopRightRadius: radius.lg,
      }}
    >
      <Flex gap="xl" justify="center" align="center" py="xs">
        {navigationItems.map(({ to, title, Icon }) => (
          <Link
            key={title}
            to={to}
            activeClassName={classes.activeLink}
            inactiveClassName={classes.inactiveLink}
          >
            <Icon size={35} />
          </Link>
        ))}
      </Flex>
    </AppShell.Footer>
  )
}

export const LayoutBase = ({
  children,
  showFooter = true,
}: {
  children: ReactNode
  showFooter?: boolean
}) => {
  return (
    <AppShell
      footer={{ height: showFooter ? 76 : 0 }}
      layout="alt"
      padding="xl"
    >
      <AppShell.Main>
        <Container
          size="xs"
          px={0}
          display="flex"
          style={{
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {children}
        </Container>
      </AppShell.Main>
      {showFooter && <Footer />}
    </AppShell>
  )
}
