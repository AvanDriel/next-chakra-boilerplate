import type { Preview } from '@storybook/react'
import '../src/styles/globals.scss'
import { theme } from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    chakra: {
      theme,
    },
  },
}

export default preview
