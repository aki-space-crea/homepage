import Link from "next/link";
import React, { VFC } from "react";

import { 
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      position="fixed"
      bottom="0"
      width="100%"
      p="16px"
      boxShadow="0 6px 10px 0 rgba(0 0 0 / 50%)"
      background="rgba(255, 255, 255, 0.8)"
    >
      <Box width="150px" mr="100px">
        <Link href="/">
          <a>
            <img src="/images/akispacecrea-logo.svg" alt="ロゴ" />
          </a>
        </Link>
      </Box>
      <Flex as="nav" flexGrow={2} display={{ base: "none", md: "flex"}} align="center">
        <Box mr="48px">
          <Link href="/">
            <a>About</a>
          </Link>
        </Box>
        <Box mr="48px">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </Box>
        <Button onClick={toggleColorMode} variant="unstyled" fontSize="16px">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      {/* ドロワー */}
      <Button ref={btnRef} onClick={onOpen} aria-label="メニューボタン" variant="unstyled" display={{ base: "block", md: "none"}}>
        <HamburgerIcon color="gray.700" height="20px" width="20px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <List>
              <ListItem>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </ListItem>
              <ListItem>
                <Button onClick={toggleColorMode} variant="unstyled" fontSize="16px">
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <DrawerCloseButton top="auto" bottom="16px"/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
