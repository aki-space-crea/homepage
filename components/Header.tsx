import Link from "next/link";
import { VFC } from "react";

import { Box, Flex } from "@chakra-ui/react";

const Header: VFC = () => {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      position="fixed"
      bottom="0"
      width="100%"
      p={8}
      boxShadow="0 6px 10px 0 rgba(0 0 0 / 50%)"
      background="rgba(255, 255, 255, 0.8)"
    >
      <Box width={150} mr={100}>
        <Link href="/">
          <a>
            <img src="/images/akispacecrea-logo.svg" alt="ロゴ" />
          </a>
        </Link>
      </Box>
      <Flex as="nav" flexGrow={2}>
        <Box mr={24}>
          <Link href="/">
            <a>About</a>
          </Link>
        </Box>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
