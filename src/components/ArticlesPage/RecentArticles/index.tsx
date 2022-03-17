import React from "react";
import {
  RecentArticlesDocument,
} from "generated/graphql";
import {
  RightBarInfo,
  RightBarTitle,
} from "components/AdCards/rightside.styles";
import SideBarCard from "components/AdCards/SideBarCard";
import { useQuery } from '@apollo/client';
import {useRouter} from 'next/router';

// const fakeArticles = [
//   {
//     id: 1,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     category: "web development",
//   },
//   {
//     id: 2,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     category: "Javascript",
//   },
//   {
//     id: 3,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     category: "HTML & CSS",
//   },
//   {
//     id: 4,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     category: "React",
//   },
// ];

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
      <RightBarInfo
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: "0",
          padding: "0 0 0 1rem",
        }}
      >
        <RightBarTitle style={{ marginBottom: "1.5rem" }}>
          Recent posts
        </RightBarTitle>
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
            <SideBarCard
              key={id}
              title={art?.attributes?.title}
              onClick={() => router.push(`/articles/${art?.attributes?.slug}`)}
              image={art?.attributes?.heroImage?.data?.attributes?.url}
              category={art?.attributes?.category?.data?.attributes?.name}
              style={{ cursor: "pointer" }}
            />
          )
        )}
      </RightBarInfo>
    </>
  );
};

export default RecentArticles;
