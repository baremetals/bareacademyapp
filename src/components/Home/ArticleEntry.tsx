import React from "react";
import styles from "../../styles/Home/ArticleEntry.module.css";

interface Props {
  article: {
    title: string;
    overview: string;
  };
}

const ArticleEntry = (props: Props) => {
  const { article } = props;
  return (
    <div className={styles.ArticleEntry}>
      <div className={styles.ArticleEntryTitle}>{article.title}</div>
      <div className={styles.ArticleEntryOverview}>{article.overview}</div>
    </div>
  );
};

export default ArticleEntry;
