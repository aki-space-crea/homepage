import { useState } from "react";

import {
  Flex,
  Spacer,
  Heading,
  Box,
  List,
  ListItem,
  Text,
  Image
} from "@chakra-ui/react";

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

  // const [snsInfo] = useState([{ icon: "", src: "" }, { icon: "", src: "" }]);
  return (
    <>
      <section style={{ height: "85vh", position: "relative" }}>
        <Heading
          as="h1"
          fontSize="4.8rem"
          fontWeight="bold"
          position="absolute"
          top="50%"
          left="10%"
          transform="translateY(-50%)"
        >
          何もない自由な空間での創作
        </Heading>
      </section>
      <Box>
        <section>
          <Heading as="h2" fontSize="3.2rem" fontWeight="bold" ml="16">
            About
          </Heading>
          <Box position="relative">
            <Box
              width="60%"
              borderRadius="8px"
              padding="16px"
              boxShadow="0 6px 10px 0 rgba(0 0 0 / 50%)"
            >
              <List>
                {profileBaseInfos.map((profileBaseInfo, i) => {
                  const isName = cssProperty => {
                    return `${profileBaseInfo.tit}` === "Name"
                      ? cssProperty
                      : "";
                  };

                  return (
                    <ListItem
                      key={i}
                      fontSize={isName("16px")}
                      fontWeight={isName("bold")}
                      mt="40"
                    >
                      <Text mr="8">{profileBaseInfo.tit}</Text>

                      <Box mt="8px" ml="64px">
                        <Text>{profileBaseInfo.val}</Text>
                      </Box>
                    </ListItem>
                  );
                })}

                <ListItem display="flex" flexWrap="wrap" mt="40">
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
              top="0"
              left="40%"
            >
              <Image src="/images/profile.jpg"></Image>
            </Box>
          </Box>
        </section>

        <section>
          <Heading as="h2" fontSize="3.2rem" fontWeight="bold" ml="16">
            Blog
          </Heading>
          <Link href="/blog">
            <a>blogページへ</a>
          </Link>
        </section>
      </Box>
    </>
  );
};

export default RootPage;
