import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {extendTheme, ChakraProvider} from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      main: "#FF1B03"
    },
    secondary: {
      main: "#F18479"
    },
    faint: {
      main: "#F1D1D1"
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
