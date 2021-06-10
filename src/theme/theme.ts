import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: props => ({
      html: {
        fontSize: "10px"
      },
      body: {
        color: mode('gray.700', '#fff')(props),
      },
      h1: {
        letterSpacing: "5px"
      },
      h2: {
        fontSize: "2.4rem",
        fontWeight: "bold",
        letterSpacing: "3px"
      },
      ".top-work": {
        p: {
          marginTop: "8px"
        }
      },
      ".article-main": {
        h2: {
          fontSize: "2.4rem",
          fontWeight: "bold",
          letterSpacing: "3px"
        }
      }
    })
  }
});

export default theme;
