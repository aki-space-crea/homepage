import { useState } from "react";

import { Heading, Box, List, ListItem, Text, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Link from "next/link";

const RootPage: React.VFC = () => {
  const [profileBaseInfos] = useState([
    { tit: "Name", val: "AKI" },
    { tit: "Gender", val: "X" },
    {
      tit: "Occupation",
      val: "FrontEndEngineer, WebDesigner & GranphicDeginer"
    }
  ]);

  const [profileLikeInfos] = useState([
    "コーディング",
    "デザイン",
    "散歩",
    "サイクリンング",
    "カラオケ",
    "YouTube",
    "TikTok"
  ]);

  return (
    <>
      <Box as="section" height="85vh" position="relative">
        <Heading
          as="h1"
          fontSize="6.4rem"
          fontWeight="bold"
          position="absolute"
          top="50%"
          left="16px"
          transform="translateY(-50%)"
          letterSpacing={{ base: "10px", md: "20px" }}
        >
          ようこそ！
        </Heading>
        <Box
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
        >
          <ChevronDownIcon h={40} w={40} />
        </Box>
      </Box>
      <Box>
        <Box mr="24px">
          <Link href="/blog">
            <a>About</a>
          </Link>
        </Box>
        <Box as="section" pt="100" maxWidth="1200" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16">
            About
          </Heading>
          <Box position="relative">
            <Box width="60%" borderRadius="8px" padding="16px">
              <List>
                {profileBaseInfos.map((profileBaseInfo, i) => {
                  const isNameCssPropertyVal = (
                    cssPropertyVal: string,
                    baseCssPropertyVal: string
                  ) => {
                    return `${profileBaseInfo.tit}` === "Name"
                      ? cssPropertyVal
                      : baseCssPropertyVal;
                  };

                  return (
                    <ListItem
                      key={i}
                      fontSize={isNameCssPropertyVal("16px", "14px")}
                      fontWeight={isNameCssPropertyVal("bold", "normal")}
                      mt="40"
                    >
                      <Text mr="8px">{profileBaseInfo.tit}</Text>

                      <Box mt="8px" ml="64px">
                        <Text>{profileBaseInfo.val}</Text>
                      </Box>
                    </ListItem>
                  );
                })}

                <ListItem mt="40">
                  <Text>Like</Text>
                  <Box display="flex" flexWrap="wrap" mt="8px" ml="64px">
                    {profileLikeInfos.map((profileLikeInfo, i) => {
                      return (
                        <Text key={i} mr="8px">
                          {profileLikeInfo}
                        </Text>
                      );
                    })}
                  </Box>
                </ListItem>
              </List>
            </Box>
            <Box
              width="40%"
              minWidth="200px"
              maxWidth="300px"
              position="absolute"
              top="-39px"
              left="40%"
            >
              <Image src="/images/profile.jpg"></Image>
            </Box>
          </Box>
        </Box>

        <Box as="section" pt="100" maxWidth="1200" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16">
            Work
          </Heading>
          <List></List>
        </Box>

        <Box as="section" pt="100" maxWidth="1200" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16">
            Blog
          </Heading>
          <Box mt="40" ml="16">
            <Link href="/blog">
              <a>blogページへ</a>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RootPage;
