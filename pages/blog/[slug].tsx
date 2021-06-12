import { Box, Heading, Image, Flex, Text } from '@chakra-ui/react'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(timezone)
dayjs.extend(utc)

const SSGArticlePage = props => {
  return (
    <>
      <Box as="section">
        <Flex height="500px" overflow="hidden" justify="center">
          <Image src={props.img.src.url} alt={props.img.alt} />
        </Flex>
      </Box>
      <Box pt="100px" px="16px" maxWidth="1200px" mx="auto">
        <Text>
          作成日:{' '}
          {dayjs
            .utc(props.createdAt)
            .tz('Asia/Tokyo')
            .format('YYYY-MM-DD')}
        </Text>
        <Text mb="40px">
          更新日:{' '}
          {dayjs
            .utc(props.updatedAt)
            .tz('Asia/Tokyo')
            .format('YYYY-MM-DD')}
        </Text>
        <Heading as="h1" fontSize="3.2rem" fontWeight="bold">
          {props.title}
        </Heading>
        <div
          className="article-main"
          dangerouslySetInnerHTML={{
            __html: `${props.body}`
          }}
        ></div>
      </Box>
    </>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.XAPIKEY }
  }
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/blog/`, key)

  const articles = await res.json()

  const paths = articles.contents.map(article => {
    const slug = String(article.id)
    return { params: { slug: slug } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async context => {
  const slug = context.params.slug

  const key = {
    headers: { 'X-API-KEY': process.env.XAPIKEY }
  }
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/blog/${slug}`, key)

  const article = await res.json()

  const text = () => {
    const arr = []
    for (let i = 0; i < article.body.length; i++) {
      arr.push(article.body[i].richEditor)
    }

    return arr.join('')
  }

  return {
    props: {
      title: article.title,
      body: text(),
      img: article.img,
      meta: article.meta,
      tag: article.tag
    }
  }
}

export default SSGArticlePage
