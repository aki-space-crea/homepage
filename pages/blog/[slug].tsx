import { Box, Heading, Image, Flex } from "@chakra-ui/react";

const SSGArticlePage = props => {
  return (
    <>
      <Box as="section">
        <Flex height={500} overflow="hidden" justify="center">
          <Image src={props.img.src.url} alt={props.img.alt} />
        </Flex>
      </Box>
      <Box pt={100} pr={16} pl={16} maxWidth={1200} mx="auto">
        <Heading as="h1" fontSize="3.2rem" fontWeight="bold">
          {props.title}
        </Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.body}`
          }}
        ></div>
      </Box>
    </>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.XAPIKEY }
  };
  const res = await fetch(`https://akispacecrea.microcms.io/api/v1/blog/`, key);

  const articles = await res.json();

  const paths = articles.contents.map(article => {
    const slug = String(article.id);
    return { params: { slug: slug } };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;

  const key = {
    headers: { "X-API-KEY": process.env.XAPIKEY }
  };
  const res = await fetch(
    `https://akispacecrea.microcms.io/api/v1/blog/${slug}`,
    key
  );

  const article = await res.json();

  const text = () => {
    const arr = [];
    for (let i = 0; i < article.body.length; i++) {
      arr.push(article.body[i].richEditor);
    }

    return arr.join("");
  };

  return {
    props: {
      title: article.title,
      body: text(),
      img: article.img,
      meta: article.meta,
      tag: article.tag
    }
  };
};

export default SSGArticlePage;
