import React from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import styles from "../../styles/Home/ArticleEntry.module.css";
import { ArticlesDocument } from "generated/graphql";
import renderTimestamp from "helpers/renderTimestamp";

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
  return (
    <div className={styles.articles}>
      {articles &&
        articles.slice(0, 3).map(
          (
            article: {
              attributes: {
                title: string;
                description: string;
                slug: string;
                updatedAt: string;
              };
            },
            index: number
          ) => {
            console.log(article);
            return (
              <div className={styles.ArticleEntry} key={index}>
                <Link href={`/articles/${article?.attributes?.slug}`}>
                  <div
                    className={styles.ArticleEntryTitle}
                    style={{ cursor: "pointer" }}
                  >
                    {article?.attributes?.title}
                  </div>
                </Link>
                <div className={styles.ArticleEntryOverview}>
                  {article?.attributes?.description}
                </div>
                <div className={styles.ArticleEntryFooter}>
                  {renderTimestamp(article?.attributes?.updatedAt)}
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default ArticleEntry;
