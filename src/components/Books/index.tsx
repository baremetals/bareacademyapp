import React from 'react'
import { BookEntity, Query } from "generated/graphql";
import styled from "styled-components";
import Dashboard from "components/Dashboard";
import {
  PostCard,
  CardTitle,
  CardBody,
  CardImage,
  CardDescription,
  CardBottom,
  ApplyButton,
  PageHeading,
  PageWrapper,
  FilterSearch,
} from "../../styles/common.styles";
import { ErrorMsg } from 'components/Input';


function BooksPage(props: {
  props: { data: Query; loading: boolean; error: any };
}) {
  const { data, loading, error } = props.props;

  // console.log(data);
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;
  
  const bookData = data?.books;
  const books = bookData?.data as Array<BookEntity>;
  // console.log(bookData);

  return (
    <>
      <Dashboard>
        <PageHeading>
          Recommended Books   
          
            <FilterSearch style={{ float: 'right' }} placeholder="Search" />
        </PageHeading>
        <PageWrapper>
          {!books ? (
            <div>loading...</div>
          ) : (
            books?.map((book, id: React.Key | null | undefined) =>
              !book ? null : (
                <PostCard key={id}>
                  <a href={book?.attributes?.link as string}>
                    <CardImage
                      alt="course image"
                      src={book?.attributes?.image as string}
                    />
                  </a>
                  <CardBody>
                    <CardTitle>{book?.attributes?.title}</CardTitle>
                    <CardDescription>
                      {book?.attributes?.description}
                    </CardDescription>
                    <CardBottom>
                      <BookAuthor>{book?.attributes?.author}</BookAuthor>
                      <a href={book?.attributes?.link as string}>
                        <ApplyButton>Buy</ApplyButton>
                      </a>
                    </CardBottom>
                  </CardBody>
                </PostCard>
              )
            )
          )}
        </PageWrapper>
      </Dashboard>
    </>
  );
}

export default BooksPage

export const BookAuthor = styled.span`
  font-size: 1rem;
  color: #a2a2c2;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 0.75rem;
  }
`;