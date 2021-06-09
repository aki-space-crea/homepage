import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: 10
      },
      h1: {
        letterSpacing: "5px"
      },
      h2: {
        fontSize: "2.4rem",
        fontWeight: "bold",
        letterSpacing: "3px"
      },
      ".article-main": {
        h2: {
          fontSize: "2.4rem",
          fontWeight: "bold",
          letterSpacing: "3px"
        }
      }
    }
  }
});

export default theme;
