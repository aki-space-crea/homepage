import Link from 'next/link'
import { useState } from 'react'

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
        <Heading
          as="h1"
          height="100%"
          width="100%"
          fontSize={{ base: '3.2rem', md: '4.8rem' }}
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
          マイペースはいい事
        </Heading>
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
              <Text>
                aki spacecrea（あきすぺーすくりえ）
                <br />
                <br />
                akiが私の名前
                <br />
                spaceが空間、隙間
                <br />
                creaはクリエイティブ
                <br />
                です。
                <br />
                <br />
                <br />
                aki
                spacecreaは悩みを抱えた人と一緒に歩んで、その人が幸せを感じれる、自分らしくいれる状態になる事を目的としています。
                <br />
                <br />
                私自身、良く悩むタイプです。
                <br />
                言葉に詰まる事や、行動に踏み出せない事多々ありました。
                <br />
                失敗もいっぱいして、挫折してきました。
                <br />
                <br />
                今こうして文章書いてるのも怖いです。
                <br />
                <br />
                けどこうやって何か形にする事で、何か感じる人がいるから頑張ろうって思います。
                <br />
                <br />
                元々私は何も出来ないんです。
                <br />
                だからこそ、目的を達成する為にはどうしたら良いのか、精一杯考えたいです。
                <br />
                <br />
                悩みを抱えた人と一緒に歩んで、その人が幸せを感じれる、自分らしくいれる状態になる事
                <br />
                それを叶えるためのaki spacecreaです。
              </Text>
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
            {props.work.map(work => {
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
    headers: { 'X-API-KEY': process.env.XAPIKEY }
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
