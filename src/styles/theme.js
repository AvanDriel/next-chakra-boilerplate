import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto'

export const theme = extendTheme({
  colors: {
    brand: {
      primary: '#526D82',
      secondary: '#9DB2BF',
      tertiary: '#DDE6ED',
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#27374D',
      },
    },
  },
})
