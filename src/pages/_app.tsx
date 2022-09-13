import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { GA_TRACKING_ID, pageview } from '../logics/gtag'
import GoogleTagManager, { GoogleTagManagerId } from 'components/googleTagManager'
import { googleTagManagerId } from 'utils'

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props
  const router = useRouter()
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return

    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <GoogleTagManager googleTagManagerId={googleTagManagerId as GoogleTagManagerId} />
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
