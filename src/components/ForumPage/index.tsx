import React, { SetStateAction, useEffect, useState } from "react";
import Share from "../Dashboard/Share";
import styled from "styled-components";
import {
  CategoriesQuery,
  Exact,
  Post,
  Query,
  useCategoriesQuery,
} from "generated/graphql";
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";


import {
  PageHeading,
  ForumRow,
  ForumFilter,
  ForumFilterSortBy,
  SelectCategory,
  CategoryOption,
  FilterSearch,
} from "../../styles/common.styles";
import Card from "./Card";
import Dashboard from 'components/Dashboard';
import { ErrorMsg } from 'components/Input';
import { QueryResult } from '@apollo/client';

type postProps = {
  id: string;
  attributes: {
    body: string;
    category: {
      data: {
        id: string;
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    createdAt: Date;
    points: number;
    slug: string;
    title: string;
    // eslint-disable-next-line camelcase
    total_comments: number;
    // eslint-disable-next-line camelcase
    creator: {
      data: {
        id: string;
        attributes: {
          username: string;
          slug: string;
          img: string;
        };
      };
    };
  };
};

const ForumPage = (props: {
  props: { data: Query; loading: boolean; error: any };
}) => {
  const cats: QueryResult<
    CategoriesQuery,
    Exact<{
      [key: string]: never;
    }>
  > = useCategoriesQuery();


  const { data, loading, error } = props.props;
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;
  const posts = data?.posts?.data 

  // console.log(posts);

  const categories = cats?.data?.categories?.data;
  const [filteredcategories, setFilteredcategories] = useState([]);
  const [values, setValues] = useState({
    category: "",
    search: "",
  });

  // console.log(categories);
  

  useEffect(() => {
    setFilteredcategories(posts as SetStateAction<never[]>);
  }, [posts]);

  const handleCategorySearch =
    (name: string) => (event: { target: { value: any } }) => {
      setValues({ ...values, [name]: event.target.value });
      // console.log(event.target.value);
      const categoryName = event.target.value;
      if (categoryName !== "" || null || undefined) {
        const filteredData = posts?.filter((post: any) => {
          // console.log(post.attributes.category.data.attributes.name);
          return post.attributes.category.data.attributes.name == categoryName;
          // return cat.vote_average == ratings;
        })
        setFilteredcategories(filteredData as SetStateAction<never[]>);
      } else setFilteredcategories(posts as SetStateAction<never[]>);
    };

  const handleSearch =
    (name: string) => (event: { target: { value: string } }) => {
      setValues({ ...values, [name]: event.target.value });
      // console.log(event.target.value);
      const searchValue = event.target.value;
      if (searchValue !== "") {
        const filteredData = posts?.filter((post) => {
          const p = post?.attributes as Post;
          return Object.values(p)
            .join(" ")
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
        setFilteredcategories(filteredData as SetStateAction<never[]>);
      } else setFilteredcategories(posts as SetStateAction<never[]>);
    };
  return (
    <Dashboard>
      <PageHeading>Forum</PageHeading>
      <Share />
      <ForumRow>
        <ForumFilter>
          <ForumFilterSortBy>
            <SelectCategory onChange={handleCategorySearch("category")}>
              <CategoryOption value={values.category}>
                Category Search
              </CategoryOption>
              {categories?.map((c) => (
                <CategoryOption key={c.id} value={c?.attributes?.name as string}>
                  {c?.attributes?.name}
                </CategoryOption>
              ))}
            </SelectCategory>
          </ForumFilterSortBy>
          <FilterSearch
            type="text"
            name="search"
            onChange={handleSearch("category")}
            placeholder="Search"
          ></FilterSearch>
        </ForumFilter>
        {!filteredcategories ? (
          <div>loading...</div>
        ) : (
          filteredcategories.map((post: postProps, id) =>
            !post ? null : (
              <ForumContainer key={id}>
                <Card
                  username={
                    post?.attributes?.creator?.data?.attributes?.username
                  }
                  userIdSlug={
                    post?.attributes?.creator?.data?.attributes?.slug
                  }
                  image={
                    post?.attributes?.creator?.data?.attributes?.img
                  }
                  date={post?.attributes?.createdAt}
                  title={post?.attributes?.title}
                  body={post?.attributes?.category?.data?.attributes?.name}
                  likeCount={post?.attributes?.points}
                  commentCount={post?.attributes?.total_comments}
                  slug={post?.attributes?.slug}
                  id={post?.id}
                >
                  {/* {user?.userIdSlug === post.creator.userIdSlug && (
                    <DropDownIcon />
                  )} */}
                </Card>
              </ForumContainer>
            )
          )
        )}
      </ForumRow>
    </Dashboard>
  );
};

export default ForumPage;

export const ForumContainer = styled.div`
  width: 33.33%;
  padding: 0.75rem;
  @media (max-width: 1366px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 100%;
    padding: 0.5rem;
  }
`;
