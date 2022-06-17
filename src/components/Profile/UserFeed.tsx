import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "../ForumPage/Card";
import Share from "../Dashboard/Share";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import { ForumRow, ForumColumn } from "styles/common.styles";
import { DropDownIcon } from '../../../public/assets/icons/DropDownIcon';

const FeedContainer = styled.div`
  flex: 5.5;
`;

const FeedWrapper = styled.div`
  padding: 0;
`;

//  type userType = {
//   profileImage: string,
//   backgroundImg: string,
//   fullName: string,
// };

export default function UserFeed(props: any) {
  const router = useRouter();
  const { slug } = router.query;
  
  // logged in user info
  const { user: user } = useAppSelector(isUser); // logged in user
  const [loggedInUser, setLoggedInUser] = useState(false);

  const { posts } = props 
  const mappedPosts = posts?.data?.slice();
  // console.log(posts);


  useEffect(() => {
    if (router.pathname === "/user-profile") {setLoggedInUser(true)} else {
      if (user?.slug === slug) {
        setLoggedInUser(true);
      }
    }
      
  }, [user, slug]);
  return (
    <FeedContainer>
      <FeedWrapper>
        {loggedInUser && <Share />}
        <ForumRow>
          {posts?.data?.length === 0 ? (
            <div>No Posts</div>
          ) : (
            mappedPosts?.map(
              // eslint-disable-next-line camelcase
              (
                post: {
                  id: React.Key | null | undefined;
                  attributes: {
                    updatedAt: any;
                    title: string;
                    body: string | undefined;
                    points: number;
                    // eslint-disable-next-line camelcase
                    total_comments: number;
                    slug: string;
                  };
                },
                id: string
              ) =>
                post && (
                  <ForumColumn key={id}>
                    <Card
                      username={user?.username as string}
                      image={user?.img}
                      date={post?.attributes?.updatedAt}
                      title={post?.attributes?.title}
                      body={post?.attributes?.body}
                      likeCount={post?.attributes?.points}
                      commentCount={post?.attributes?.total_comments}
                      slug={post?.attributes?.slug}
                      userIdSlug={user?.slug}
                      id={post?.id}
                      {...props}
                    >
                      {loggedInUser && <DropDownIcon />}
                    </Card>
                  </ForumColumn>
                )
            )
          )}
        </ForumRow>
      </FeedWrapper>
    </FeedContainer>
  );
}
