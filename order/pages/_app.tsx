import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {extendTheme, ChakraProvider} from '@chakra-ui/react'

const color = {
  brand:{
    primary:'#FF1B03',
    secondary: '#F18479',
    faint:'#F1D1D1'
  }
}
const theme = extendTheme({color})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
