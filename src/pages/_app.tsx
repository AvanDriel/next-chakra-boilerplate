import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// Styles
import '../styles/globals.scss'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode='wait'>
        <div key={router.pathname}>
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </ChakraProvider>
  )
}
