import Link from 'next/link';
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useLecturesQuery } from "generated/graphql";

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

  const { data, loading, error } = useLecturesQuery({
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
        limit: 12,
      },
    },
  });
  if (loading) {
    return <div>loading...</div>;
  }

  if (!data) {
    return <div>No Lectures...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  // console.log(slug);
  const lectures = data?.lectures?.data;

  // console.log(lectureVids);
  return (
    <MediaRow>
      {lectures?.map((lect, id) => (
        <MediaContainer key={id}>
          <ForumWrapper>
            <PostTop>
              <PostLeftWrap>
                <Link href={`${slug}/${lect?.attributes?.slug}`}>
                  <UserName>
                    {lect?.attributes?.slug}
                    <PostDate>
                      {dayjs(lect?.attributes?.createdAt).fromNow()}
                    </PostDate>
                  </UserName>
                </Link>
              </PostLeftWrap>
            </PostTop>
            <PostCenterWrap>
              <PostTitle><Link href={`courses/${slug}/${lect?.attributes?.slug}`}>{lect?.attributes?.title}</Link></PostTitle>
            </PostCenterWrap>
            <PostCenterWrap>
              <PostMediaVideoIF
                width="560"
                height="315"
                src={lect?.attributes?.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                // allowFullScreen
              />
            </PostCenterWrap>
            {/* <PostBottomWrapper> */}
            {/* <PostText>{lect?.attributes?.description}</PostText> */}
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