import './index.css'
import '@fontsource/press-start-2p'
import '@mantine/core/styles.css'
import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'
import { Pages } from '@/pages'

const purple: MantineColorsTuple = [
  '#f5e9ff',
  '#e5cfff',
  '#c79cff',
  '#a864ff',
  '#8d37fe',
  '#7c19fe',
  '#7409ff',
  '#6300e4',
  '#5600cc',
  '#4a00b3',
]

const theme = createTheme({
  fontFamily: '"Press Start 2P", system-ui',
  primaryColor: 'purple',
  defaultRadius: 'md',
  colors: {
    purple,
  },
})

export const App = () => {
  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Pages />
    </MantineProvider>
  )
}
