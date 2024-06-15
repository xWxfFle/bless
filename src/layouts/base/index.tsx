import { AppShell, Container, Flex, useMantineTheme } from '@mantine/core'
import {
  IconGiftFilled,
  IconHomeFilled,
  IconLayoutListFilled,
  IconUserFilled,
} from '@tabler/icons-react'
import { Link } from 'atomic-router-react'
import type { ReactNode } from 'react'
import { routes } from '@/shared/routing'
import classes from './styles.module.css'

const navigationItems = [
  { title: 'Tasks', to: routes.tasks, Icon: IconLayoutListFilled },
  { title: 'Home', to: routes.home, Icon: IconHomeFilled },
  { title: 'Friends', to: routes.friends, Icon: IconGiftFilled },
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
    <AppShell footer={{ height: showFooter ? 76 : 0 }} layout="alt">
      <AppShell.Main>
        <Container
          size="xs"
          pt="md"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {children}
        </Container>
      </AppShell.Main>
      {showFooter && <Footer />}
    </AppShell>
  )
}