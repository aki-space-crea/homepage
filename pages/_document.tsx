import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ChakraProvider, Box, ColorModeScript } from '@chakra-ui/react'
import theme from '../src/theme/theme'

import { GA_TRACKING_ID } from '../lib/gtag'

import Layout from '../src/components/Layout'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <ChakraProvider theme={theme}>
          <Box as="body">
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Layout>
              <Main />
            </Layout>
            <NextScript />
          </Box>
        </ChakraProvider>
      </Html>
    )
  }
}

export default MyDocument
