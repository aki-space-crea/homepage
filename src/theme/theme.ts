import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: 10
      },
      h2: {
        fontSize: "2.4rem",
        fontWeight: "bold"
      }
    }
  }
});

export default theme;
