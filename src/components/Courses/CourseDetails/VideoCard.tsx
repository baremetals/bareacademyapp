import Link from 'next/link';
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useCourseVideosQuery } from "generated/graphql";

import {
  // ForumWrapper,
  // PostBottomWrapper,
  // PostCenterWrap,
  PostDate,
  PostLeftWrap,
  PostMediaVideoIF,
  // PostText,
  PostTitle,
  PostTop,
  UserName,
} from "components/ForumPage/forum.styles";
import styled from 'styled-components';
import { ErrorMsg } from 'components/Input';

import {
  MediaContainer,
  MediaRow,
} from "./details.styles";

interface VideoPost {
  slug: string;
  courseId: string;
}

const VideoCard = ({
  // fullName,
  slug,
  courseId,
}: VideoPost) => {
  const { data, loading, error } = useCourseVideosQuery({
    variables: {
      filters: {
        course: {
          id: {
            eq: courseId,
          },
        },
      },
      sort: "updatedAt:desc",
      pagination: {
        start: 0,
        limit: 6,
      },
    },
  });
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;
  // console.log(coursesVids);
  const coursesVids = data?.courseVideos?.data;

  // console.log(coursesVids);
  return (
    <MediaRow>
      {coursesVids?.map((vid, id) => (
        <MediaContainer key={id}>
          <ForumWrapper>
            <PostTop>
              <PostLeftWrap>
                <Link href={`user-profile/${slug}`}>
                  <UserName>
                    {'fullName'}
                    <PostDate>
                      {dayjs(vid?.attributes?.createdAt).fromNow()}
                    </PostDate>
                  </UserName>
                </Link>
              </PostLeftWrap>
            </PostTop>
            <PostCenterWrap>
              <PostTitle>{vid?.attributes?.title}</PostTitle>
            </PostCenterWrap>
            <PostCenterWrap>
              <PostMediaVideoIF
                width="560"
                height="315"
                src={vid?.attributes?.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                // allowFullScreen
              />
            </PostCenterWrap>
            {/* <PostBottomWrapper> */}
            <PostText>{vid?.attributes?.description}</PostText>
            {/* </PostBottomWrapper> */}
          </ForumWrapper>
        </MediaContainer>
      ))}
    </MediaRow>
  );
};

export default VideoCard


export const ForumWrapper = styled.div`
  padding: 1.875rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const PostCenterWrap = styled.div`
  /* margin-bottom: 1rem; */
  position: relative;
  /* flex: 1 0 0%; */
  display: flex;
  flex-direction: column;
`;

export const PostText = styled.span`
  /* display: block; */
  color: #16addd;
  font-weight: 500;
  /* margin-bottom: 1rem; */
  margin-top: 1rem;
`;