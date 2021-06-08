import Link from "next/link";
import { useState } from "react";

import {
  Heading,
  Box,
  List,
  ListItem,
  Text,
  Image,
  Flex
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type Props = {
  work: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      richEditor: string;
      img: {
        fieldId: string;
        src: {
          url: string;
          height: number;
          width: number;
        };
        alt: string;
      };
    }
  ];
};

const RootPage: React.VFC = (props: Props) => {
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
      <Flex
        as="section"
        // height="85vh"
        position="relative"
        justify="center"
        align="center"
        pt="130px"
        pb="100px"
        boxSizing="border-box"
      >
        <Box minWidth="200px" maxWidth="500px">
          <Image src="/images/profile.jpg"></Image>
        </Box>
        <Heading
          as="h1"
          height="100%"
          fontSize="6.4rem"
          fontWeight="bold"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -46.5%)"
          letterSpacing="5px"
          textAlign="center"
        >
          Hi!! I'm
          <br />
          <br />
          <br />
          <br />
          <br />
          Kuroda Aki
        </Heading>
        <Box
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
        >
          <ChevronDownIcon h={40} w={40} />
        </Box>
      </Flex>
      <Box>
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
          </Box>
        </Box>

        <Box as="section" pt="100" maxWidth="1200" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16">
            Work
          </Heading>
          <List display="flex" flexWrap="wrap">
            {props.work.map(work => {
              return (
                <ListItem key={work.id} width="45%">
                  <Box>
                    <Image src={work.img.src.url} alt={work.img.alt} />
                  </Box>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: `${work.richEditor}`
                    }}
                  ></Box>
                </ListItem>
              );
            })}
          </List>
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

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.XAPIKEY }
  };
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/work/`, key);

  const works = await res.json();

  return {
    props: {
      work: works.contents
    }
  };
};

export default RootPage;
