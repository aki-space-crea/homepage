const SSGArticlePage = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${props.body}`
        }}
      ></div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.XAPIKEY }
  };
  const res = await fetch(
    "https://akispacecrea-test.microcms.io/api/v1/blog",
    key
  );

  const articles = await res.json();

  // console.log(articles);

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
    `https://akispacecrea-test.microcms.io/api/v1/blog/${slug}`,
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

  // console.log(text());

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
