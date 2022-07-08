import { useState } from 'react'

import Link from 'next/link'

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
  useDisclosure
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import ProfileInfo from '../src/components/ProfileInfo'

type Props = {
  work: [
    {
      id: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      revisedAt: string
      richEditor: string
      img: {
        fieldId: string
        src: {
          url: string
          height: number
          width: number
        }
        alt: string
      }
      link: string
    }
  ]
}

const RootPage = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalSrc, setModalSrc] = useState('')

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
        <Box className="top-fv-bg"></Box>
      </Flex>
      <Flex justify="center" mt="140px">
        <ChevronDownIcon className="down-arrow" h="40px" w="40px" />
      </Flex>
      <Box>
        <Box as="section" pt="100px" maxWidth="1200px" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16px">
            About
          </Heading>
          <Box position="relative">
            <Box width="60%" borderRadius="8px" mt="32px" mx="16px">
              <Text>akispacecreaは私akiの表現の場です。</Text>
            </Box>
          </Box>
        </Box>

        <Box as="section" pt="100" maxWidth="1200px" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16px">
            Profile
          </Heading>
          <Box width="60%" borderRadius="8px" mt="32px" mx="16px">
            <Box maxWidth="300px" mb="24px">
              <Image src="/images/profile.jpg"></Image>
            </Box>
            <ProfileInfo />
          </Box>
        </Box>

        <Box as="section" pt="100" maxWidth="1200px" mx="auto">
          <Heading as="h2" fontSize="4.8rem" fontWeight="bold" ml="16px">
            Work
          </Heading>
          <List className="top-work" display="flex" justifyContent="space-between" flexWrap="wrap" mx="16px" mt="32px">
            {props.work.map((work) => {
              return (
                <ListItem key={work.id} width="47%" mt="16px">
                  <Box onClick={onOpen} cursor="pointer">
                    <Image
                      src={work.img.src.url}
                      alt={work.img.alt}
                      onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
                        setModalSrc(e.currentTarget.src)
                      }}
                    />
                  </Box>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: `${work.richEditor}`
                    }}
                  ></Box>
                  <Text cursor="pointer" textDecoration="underline">
                    {work.link ? <Link href={work.link}>{work.link}</Link> : ''}
                  </Text>
                </ListItem>
              )
            })}
          </List>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxWidth="1200px" background="#fff">
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
  )
}

type ApiKey = {}

export const getStaticProps = async () => {
  const key: ApiKey = {
    headers: { 'X-MICROCMS-API-KEY': process.env.X_MICRO_CMS_APIKEY }
  }
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/work/`, key)

  const works = await res.json()

  return {
    props: {
      work: works.contents
    }
  }
}

export default RootPage
