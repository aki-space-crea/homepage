import Document, { Html, Head, Main, NextScript } from "next/document";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import theme from "../src/theme/theme";

import Header from "../components/Header";
import Footer from "../components/Footer";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <ChakraProvider theme={theme}>
          <Box
            as="body"
            pb="65"
            fontSize="1.4rem"
            color="#333"
            lineHeight="1.5"
          >
            <Main />
            <Footer />
            <Header />
            <NextScript />
          </Box>
        </ChakraProvider>
      </Html>
    );
  }
}

export default MyDocument;
