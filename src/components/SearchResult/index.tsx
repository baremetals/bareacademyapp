import React from "react";
// import { useRouter } from 'next/router';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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
// import { ErrorMsg } from "components/Input";

type propTypes = {
  data: {
    data: [],
    meta: {}
  }
}

function SearchResult(props: propTypes) {
  // const router = useRouter();

  const { data }: any = props;

  const { sanitizedUsers } = data?.data[0]?.attributes;
  const { sanitizedPosts } = data?.data[1]?.attributes;
  const { sanitizedCourses } = data?.data[2]?.attributes;

  const posts = sanitizedPosts.results;
  const courses = sanitizedCourses.results;
  const users = sanitizedUsers;

  // const noData = data.searchBySearchTerm?.messages;
  // if (!data || loading) {
  //   return <div>loading...</div>;
  // }
  // if (error) return <ErrorMsg>{error}</ErrorMsg>;

  // const  search  = router.asPath;

  console.log(props);

  return (
    <Dashboard>
      <PageHeading>Search Results Here </PageHeading>

      {courses !== null && (
        <>
          <PageSubHeading>Courses</PageSubHeading>
          <PageWrapper>
            {courses?.map(
              (
                c: {
                  duration: string;
                  title: string;
                  description: string;
                  startDate: string;
                  slug: string;
                },
                id: string | undefined
              ) => (
                <PostCard key={id}>
                  <CardBody>
                    <CardDuration>{c?.duration}</CardDuration>
                    <CardTitle>{c.title}</CardTitle>
                    <CardDescription>
                      {`${c.description.slice(0, 90)}....`}
                    </CardDescription>
                    <CardBottom>
                      <CardStartDate>
                        {dayjs(c.startDate).fromNow()}
                      </CardStartDate>
                      <Link href={`/courses/${c?.slug}`}>
                        <ApplyButton>Apply</ApplyButton>
                      </Link>
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
            {posts !== null &&
              posts?.map(
                (
                  post: {
                    title: string;
                    body: string;
                    creator: {
                      img: string | undefined;
                      username: string | undefined;
                    };
                    updatedAt: string | undefined;
                    slug: string;
                  },
                  id: string | undefined
                ) => (
                  <PostCard key={id}>
                    <CardBody>
                      <CardTitle>{post?.title}</CardTitle>
                      <CardDescription>
                        {`${post?.body.slice(0, 90)}....`}
                      </CardDescription>
                      <CardBottom>
                        <UserGroup>
                          <UserImg
                            width={40}
                            height={40}
                            src={post?.creator?.img}
                          />
                          <UserNameWrapper>
                            <UserName>{post?.creator?.username}</UserName>
                            <PostDate>
                              {dayjs(post?.updatedAt).fromNow()}
                            </PostDate>
                          </UserNameWrapper>
                        </UserGroup>
                        <Link href={`/forum/${post?.slug}`}>
                          <ApplyButton>View</ApplyButton>
                        </Link>
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
                  img: string;
                  fullName: string;
                  username: string;
                  description: string;
                  location: string;
                  slug: string;
                  createdAt: string;
                },
                id: string
              ) => (
                <PostCard key={id}>
                  <CardBody>
                    <UserGroup>
                      <Link href={`/user-profile/${user?.slug}`}>
                        <UserImg width={80} height={80} src={user?.img} />
                      </Link>
                      <UserNameWrapper>
                        <Link href={`/user-profile/${user?.slug}`}>
                          <H4>
                            {user?.fullName ? user?.fullName : user?.username}
                          </H4>
                        </Link>
                        <UserText>{user?.description}</UserText>
                        <UserInfo>
                          <FlexRow>
                            <FlexCol>
                              <Strong>Joined:</Strong>
                            </FlexCol>
                            <FlexCol>
                              {dayjs(user?.createdAt).fromNow()}
                            </FlexCol>
                          </FlexRow>
                          <FlexRow>
                            <FlexCol>
                              <Strong>City:</Strong>
                            </FlexCol>
                            <FlexCol>{user?.location}</FlexCol>
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
