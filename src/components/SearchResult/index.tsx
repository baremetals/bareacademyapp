/* eslint-disable react/prop-types */
import React from "react";
// import { useRouter } from 'next/router';

import {
  PageHeading,
  PageSubHeading,
  PageWrapper,
  PostCard,
  CardTitle,
  CardBody,
  CardDescription,
  CardBottom,
  CardStartDate,
  ApplyButton,
  CardDuration,
  UserGroup,
  UserImg,
  UserNameWrapper,
  UserName,
  PostDate,
  UserInfo,
  FlexRow,
  FlexCol,
  UserText,
  H4,
  Strong,
} from "../../styles/common.styles";
import Dashboard from "../Dashboard";
import { Query } from 'generated/graphql';
import { ErrorMsg } from 'components/Input';

function SearchResult(props: {
  props: { data: Query; loading: boolean; error: any };
}) {
  // const router = useRouter();
  // eslint-disable-next-line react/prop-types
  const { data, loading, error }: any= props;

  // if (data.searchBySearchTerm.messages) {
  //   return <div>nothing found</div>;
  // }
// eslint-disable-next-line react/prop-types
const { courses, users, posts } = data.searchBySearchTerm;

  // eslint-disable-next-line react/prop-types
  const noData = data.searchBySearchTerm?.messages;
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  // const  search  = router.asPath;

  console.log(props);

  return (
    <Dashboard>
      <PageHeading>Search Results Here </PageHeading>

      {noData && <div>{noData[0]}</div>}

      {courses !== null &&
         (
          <>
            <PageSubHeading>Courses</PageSubHeading>
            <PageWrapper>
              {
                // eslint-disable-next-line react/prop-types
                courses?.map(
                  (
                    post: React.Key | null | undefined,
                    id: string | undefined
                  ) => (
                    <PostCard key={id}>
                      <CardBody>
                        <CardDuration>3 Months</CardDuration>
                        <CardTitle>Fullstack Javascript web Dev</CardTitle>
                        <CardDescription>
                          The course includes: HTML, CSS and JavaScript and
                          React Framework.
                        </CardDescription>
                        <CardBottom>
                          <CardStartDate>12/11/2021</CardStartDate>
                          <ApplyButton>Apply</ApplyButton>
                        </CardBottom>
                      </CardBody>
                    </PostCard>
                  )
                )}
            </PageWrapper>
          </>
        )}

      {posts !== null && (
        <>
          <PageSubHeading>Posts</PageSubHeading>
          <PageWrapper>
            {posts !==
              null && posts?.map(
                (
                  post: React.Key | null | undefined,
                  id: string | undefined
                ) => (
                  <PostCard key={id}>
                    <CardBody>
                      <CardTitle>tweet tweet tweet</CardTitle>
                      <CardDescription>
                        Develop Future Proof responsive websites
                      </CardDescription>
                      <CardBottom>
                        <UserGroup>
                          <UserImg width={40} height={40} src="/D.jpg" />
                          <UserNameWrapper>
                            <UserName>maguyva</UserName>
                            <PostDate>5 days ago</PostDate>
                          </UserNameWrapper>
                        </UserGroup>
                        <ApplyButton>View</ApplyButton>
                      </CardBottom>
                    </CardBody>
                  </PostCard>
                )
              )}
          </PageWrapper>
        </>
      )}

      {users !== null && (
          <>
            <PageSubHeading>Users</PageSubHeading>
            <PageWrapper>
              {users?.map(
                (
                  user: {
                    profileImage: string;
                    fullName: string;
                    description: string;
                  },
                  id: string
                ) => (
                  <PostCard key={id}>
                    <CardBody>
                      <UserGroup>
                        <UserImg
                          width={80}
                          height={80}
                          src={user.profileImage}
                        />
                        <UserNameWrapper>
                          <H4>{user.fullName}</H4>
                          <UserText>{user.description}</UserText>
                          <UserInfo>
                            <FlexRow>
                              <FlexCol>
                                <Strong>Ratings:</Strong>
                              </FlexCol>
                              <FlexCol>Superb</FlexCol>
                            </FlexRow>
                            <FlexRow>
                              <FlexCol>
                                <Strong>City:</Strong>
                              </FlexCol>
                              <FlexCol>Accra</FlexCol>
                            </FlexRow>
                          </UserInfo>
                        </UserNameWrapper>
                      </UserGroup>
                    </CardBody>
                  </PostCard>
                )
              )}
            </PageWrapper>
          </>
        )}

      {/* <PageSubHeading>Books</PageSubHeading>

      <PageWrapper>
        <PostCard>
          <CardBody>
            <CardTitle>Essential TypeScript</CardTitle>
            <CardDescription>
              Develop Future Proof responsive websites
            </CardDescription>
            <CardBottom>
              <CardStartDate>Peter Jones</CardStartDate>
              <ApplyButton>Buy</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>

        <PostCard>
          <CardBody>
            <CardTitle>Essential TypeScript</CardTitle>
            <CardDescription>
              Develop Future Proof responsive websites
            </CardDescription>
            <CardBottom>
              <CardStartDate>Peter Jones</CardStartDate>
              <ApplyButton>Buy</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>

        <PostCard>
          <CardBody>
            <CardTitle>Essential TypeScript</CardTitle>
            <CardDescription>
              Develop Future Proof responsive websites
            </CardDescription>
            <CardBottom>
              <CardStartDate>Peter Jones</CardStartDate>
              <ApplyButton>Buy</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>
      </PageWrapper> */}
    </Dashboard>
  );
}

export default SearchResult;
