import { Heading, List, ListItem, Text, Box, Image } from "@chakra-ui/react";
import Link from "next/link";

const index = props => {
  const blogLists = props.blog.contents;
  return (
    <section>
      <Heading as="h1">Blog</Heading>
      <List display="flex" justifyContent="space-around" px="16px">
        {blogLists.map(blogItem => {
          return (
            <ListItem width="45%" maxWidth="45%" key={blogItem.id}>
              <Link href="/blog/[slug]" as={`/blog/${blogItem.id}`}>
                <a
                  style={{ height: 200, display: `block`, overflow: `hidden` }}
                >
                  <Image src={blogItem.img.url}></Image>
                </a>
              </Link>
              <Box>
                <Text>{blogItem.title}</Text>
                <Text>{blogItem.updatedAt}</Text>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.XAPIKEY }
  };
  const res = await fetch(
    `https://akispacecrea-test.microcms.io/api/v1/blog/`,
    key
  );

  const blogData = await res.json();

  return {
    props: {
      blog: blogData
    }
  };
};

export default index;
