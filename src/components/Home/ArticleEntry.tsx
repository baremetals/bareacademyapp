import React from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import styles from "../../styles/Home/ArticleEntry.module.css";
import { ArticlesDocument } from 'generated/graphql';

const ArticleEntry = () => {
  
  const { data } = useQuery(ArticlesDocument, {
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });

  const articles = data?.articles?.data;
  // console.log(articles);
  return (
    <div className={styles.articles}>      
        {articles &&
          articles
            .slice(0, 3)
            .map(
              (
                article: { attributes: { title: string; description: string, slug: string} },
                index: number
              ) => (
                <div className={styles.ArticleEntry} key={index}>
                  <Link href={`/articles/${article?.attributes?.slug}`}>
                  <div className={styles.ArticleEntryTitle} style={{'cursor': 'pointer'}}>
                    {article?.attributes?.title}
                  </div>
                  </Link>
                  <div className={styles.ArticleEntryOverview}>
                    {article?.attributes?.description}
                  </div>
                </div>
              )
            )}
    </div>
  );
};

export default ArticleEntry;
