import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {extendTheme, ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux'
import { store } from './api/store'

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
     <Provider store={store}>
     <Component {...pageProps} />
     </Provider>
    </ChakraProvider>
  )
}

export default MyApp
