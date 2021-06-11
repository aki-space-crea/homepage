import { Heading, List, ListItem, Text, Box, Image } from "@chakra-ui/react";
import Link from "next/link";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

const index = props => {
  const blogLists = props.blog.contents;
  return (
    <Box>
      <Box as="section" height="85vh" position="relative">
        <Heading
          as="h1"
          fontSize="6.4rem"
          fontWeight="bold"
          position="absolute"
          top="50%"
          left="16px"
          transform="translateY(-50%)"
        >
          Blog
        </Heading>
      </Box>
      <List display="flex" justifyContent="space-around" px={16}>
        {blogLists.map(blogItem => {
          return (
            <ListItem width="45%" maxWidth="45%" key={blogItem.id}>
              <Link href="/blog/[slug]" as={`/blog/${blogItem.id}`}>
                <a
                  style={{ height: 250, display: `block`, overflow: `hidden` }}
                >
                  <Image src={blogItem.img.src.url}></Image>
                </a>
              </Link>
              <Box>
                <Text fontSize="2.4rem" fontWeight="bold">
                  {blogItem.title}
                </Text>
                <Text>作成日: {dayjs.utc(blogItem.createdAt).tz('Asia/Tokyo').format('YYYY-MM-DD')}</Text>
                <Text>更新日: {dayjs.utc(blogItem.updatedAt).tz('Asia/Tokyo').format('YYYY-MM-DD')}</Text>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.XAPIKEY }
  };
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/blog/`, key);

  const blogData = await res.json();

  return {
    props: {
      blog: blogData
    }
  };
};

export default index;
