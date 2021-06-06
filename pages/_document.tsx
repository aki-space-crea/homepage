import Document, { Html, Head, Main, NextScript } from "next/document";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/theme";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <ChakraProvider theme={theme}>
          <body>
            <header>
              <div style={{ width: 150 }}>
                <Link href="/">
                  <a>
                    <img src="/images/akispacecrea-logo.svg" alt="ロゴ" />
                  </a>
                </Link>
              </div>
            </header>
            <Main />
            <NextScript />
            <footer>&copy; akispacecrea</footer>
          </body>
        </ChakraProvider>
      </Html>
    );
  }
}

export default MyDocument;
