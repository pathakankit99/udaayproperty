import '../styles/globals.css'
import 'react-slideshow-image/dist/styles.css'
import {ChakraProvider} from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>      
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
