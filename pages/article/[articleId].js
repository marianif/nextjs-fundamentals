import { server } from "./../../config";
import { Meta } from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";

const Article = ({ article }) => {
  const router = useRouter();
  return (
    <>
      <Meta title={article.title} />
      <div>
        <h1 className="title">{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back</Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.articleId}`
    // `https://jsonplaceholder.typicode.com/posts/${context.params.articleId}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { articleId: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.articleId}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export default Article;
