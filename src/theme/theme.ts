import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, keyframes, ThemeConfig } from "@chakra-ui/react";

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
      ".top-fv-bg": {
        minHeight: "300px",
        minWidth: "200px",
        maxWidth: "500px",
        width: "50%",
        background: "linear-gradient(45deg, #afa, #aaf, #afa)",
        backgroundSize: "400% 400%",
        animation: "moveBg 20s ease-in infinite",
        "@keyframes moveBg": {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        }
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
