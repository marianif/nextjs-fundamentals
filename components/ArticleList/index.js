import React from "react";
import styles from "../../styles/Article.module.css";
import { ArticleItem } from "..";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => {
        return <ArticleItem article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
