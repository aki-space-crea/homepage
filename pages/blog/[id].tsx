import { Box, Heading, Image, Flex, Text } from '@chakra-ui/react'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(timezone)
dayjs.extend(utc)

type Props = {
  createdAt: string
  updatedAt: string
  title: string
  body: string
  img: {
    fieldId: string
    src: {
      url: string
      height: number
      width: number
    }
    alt: string
  }
  meta: string
  tag: string
}

const SSGArticlePage = (props: Props) => {
  return (
    <>
      <Box as="section">
        <Box>
          <Image src={props.img.src.url} alt={props.img.alt} mx="auto" />
        </Box>
      </Box>
      <Box pt="40px" px="16px" maxWidth="1200px" mx="auto">
        <Text>作成日: {dayjs.utc(props.createdAt).tz('Asia/Tokyo').format('YYYY-MM-DD')}</Text>
        <Text mb="40px">更新日: {dayjs.utc(props.updatedAt).tz('Asia/Tokyo').format('YYYY-MM-DD')}</Text>
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

type Article = {
  contents: [
    {
      id: string
      createdAt: string
      updatedAt: string
      publis1hedAt: string
      revisedAt: string
      img: {
        fieldId: string
        src: {
          url: string
          height: number
          width: number
        }
        alt: string
      }
      title: string
      meta: string
      tag: string
      body: [
        {
          fieldId: string
          richEditor: string
        }
      ]
    }
  ]
}

type ApiKey = {}

export const getStaticPaths = async () => {
  const key: ApiKey = {
    headers: { 'X-API-KEY': process.env.XAPIKEY }
  }
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/blog/`, key)

  const articles: Article = await res.json()

  const paths = articles.contents.map((article) => {
    const id = String(article.id)
    return { params: { id: id } }
  })

  return {
    paths,
    fallback: false
  }
}

type Ctx = {
  params: {
    id: string
  }
}

export const getStaticProps = async (ctx: Ctx) => {
  const id = ctx.params.id

  const key: ApiKey = {
    headers: { 'X-API-KEY': process.env.XAPIKEY }
  }
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/blog/${id}/`, key)

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
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      title: article.title,
      body: text(),
      img: article.img,
      meta: article.meta,
      tag: article.tag
    }
  }
}

export default SSGArticlePage
