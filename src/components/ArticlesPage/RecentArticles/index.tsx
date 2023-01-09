import React from "react";
import {
  RecentArticlesDocument,
} from "generated/graphql";

import { useQuery } from '@apollo/client';
import {useRouter} from 'next/router';
import SideBarArticleCard from './SideBarArticleCard';
import styles from "styles/LandingPage/Landing.module.css";


const RecentArticles = () => {
  const router = useRouter()
  const { data } = useQuery(RecentArticlesDocument, {
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });
  const articles = data?.articles?.data
  // console.log(articles);

  return (
    <>
      <div className={styles.recentCourses}>
        <h2 style={{ marginBottom: "1.5rem" }}>Recent posts</h2>
        <ul className={styles.recentCoursesList}>
          {articles?.map(
            (
              art: {
                attributes: {
                  title: string;
                  slug: string;
                  heroImage: { data: { attributes: { url: string } } };
                  category: {
                    data: { attributes: { name: string | undefined } };
                  };
                };
              },
              id: string
            ) => (
              <SideBarArticleCard
                key={id}
                title={art?.attributes?.title}
                onClick={() =>
                  router.push(`/articles/${art?.attributes?.slug}`)
                }
                image={art?.attributes?.heroImage?.data?.attributes?.url}
                createdAt={art?.attributes?.updatedAt as string}
                page={`/articles/${art?.attributes?.slug}`}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default RecentArticles;
