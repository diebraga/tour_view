import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../lib/apolloClient';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default App
