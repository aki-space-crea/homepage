import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: 10
      },
      body: {
        fontSize: "1.4rem",
        color: "#333",
        lineHeight: 1.5
      },
      header: {
        padding: `8px 16px`,
        boxShadow: `0 6px 10px 0 rgba(0 0 0 / 50%)`
      }
    }
  }
});

export default theme;
