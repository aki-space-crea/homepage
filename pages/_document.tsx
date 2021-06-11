import Document, { Html, Head, Main, NextScript } from "next/document";
import { ChakraProvider, Box, ColorModeScript } from "@chakra-ui/react";
import theme from "../src/theme/theme";

import Layout from "../src/components/Layout";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <ChakraProvider theme={theme}>
          <Box
            as="body"
          >
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Layout>
              <Main />
            </Layout>
            <NextScript />
          </Box>
        </ChakraProvider>
      </Html>
    );
  }
}

export default MyDocument;
