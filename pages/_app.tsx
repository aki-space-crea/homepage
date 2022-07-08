import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

const App = (props: AppProps): JSX.Element => {
  const router = useRouter()
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
        <Header />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
