import { server } from "../config";
import { ArticleList, Meta } from "../components";

const Home = ({ articles }) => {
  return (
    <div>
      <Meta
        title={"Home"}
        keywords={"Nextjs, React"}
        description={"Nextjs crash course fundamentals"}
      />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};
