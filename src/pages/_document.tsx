import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ChakraProvider, Box, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme/theme'

import Layout from '../components/Layout'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { GA_ID } from '../logics/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Google Analytics */}
          {GA_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`
                }}
              />
            </>
          )}
        </Head>
        <ChakraProvider theme={theme}>
          <Box as="body" width="100vw">
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Layout>
              <Main />
              <Header />
              <Footer />
            </Layout>
            <NextScript />
          </Box>
        </ChakraProvider>
      </Html>
    )
  }
}

export default MyDocument
