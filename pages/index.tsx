import Link from "next/link";
import { useState } from "react";

import {
  Heading,
  Box,
  List,
  ListItem,
  Text,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
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
      val: "FrontEndEngineer, WebDesigner & GranphicDeginer",
    },
  ]);

  const [profileLikeInfos] = useState([
    "コーディング",
    "デザイン",
    "散歩",
    "サイクリンング",
    "カラオケ",
    "YouTube",
    "TikTok",
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSrc, setModalSrc] = useState("");

  return (
    <>
      <Flex
        as="section"
        position="relative"
        justify="center"
        align="center"
        pt="130px"
        pb="100px"
        boxSizing="border-box"
      >
        <Box minWidth="200px" maxWidth="500px" width="50%">
          <Image src="/images/profile.jpg"></Image>
        </Box>
        <Heading
          as="h1"
          height="100%"
          width="100%"
          fontSize={{ base: "4.8rem", md: "6.4rem"}}
          fontWeight="bold"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -46.5%)"
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          Kuroda Aki
        </Heading>
      </Flex>
      <Flex justify="center" mt="140px">
        <ChevronDownIcon className="downArrow" h="40px" w="40px" />
      </Flex>
      <Box>
        <Box as="section" pt="100px" maxWidth="1200px" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16px">
            About
          </Heading>
          <Box position="relative">
            <Box width="60%" borderRadius="8px" mt="32px" mx="16px">
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
                      mt={isNameCssPropertyVal("0", "60px")}
                    >
                      <Text mr="8px">{profileBaseInfo.tit}</Text>

                      <Box mt="16px" ml="64px">
                        <Text>{profileBaseInfo.val}</Text>
                      </Box>
                    </ListItem>
                  );
                })}

                <ListItem mt="40px">
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

        <Box as="section" pt="100" maxWidth="1200px" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16px">
            Work
          </Heading>
          <List className="top-work" display="flex" flexWrap="wrap" mx="16px" mt="32px">
            {props.work.map((work) => {
              return (
                <ListItem key={work.id} width="45%" cursor="pointer">
                  <Box onClick={onOpen}>
                    <Image src={work.img.src.url} alt={work.img.alt} onClick={(e) => {
                      setModalSrc(e.currentTarget.src);
                    }}/>
                  </Box>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: `${work.richEditor}`,
                    }}
                  ></Box>
                </ListItem>
              );
            })}
          </List>
          
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxWidth="1200px">
              <ModalCloseButton background="gray.700" color="#fff" />
              <ModalBody>
                <Image src={modalSrc} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        <Box as="section" pt="100px" maxWidth="1200px" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16px">
            Blog
          </Heading>
          <Box mt="32px" mx="16px">
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
    headers: { "X-API-KEY": process.env.XAPIKEY },
  };
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/work/`, key);

  const works = await res.json();

  return {
    props: {
      work: works.contents,
    },
  };
};

export default RootPage;
