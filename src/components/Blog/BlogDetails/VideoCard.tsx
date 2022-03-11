import Link from 'next/link';
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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

interface VideoPost {
  fullName: string;
  slug: string;
  date: any;
  title: string;
  url?: string;
  description: string;
}

const VideoCard = ({
  fullName,
  slug,
  date,
  title,
  url,
  description,
}: VideoPost) => {
  return (
    <>
      <ForumWrapper>
        <PostTop>
          <PostLeftWrap>
            <Link href={`user-profile/${slug}`}>
              <UserName>
                {fullName}
                <PostDate>{dayjs(date).fromNow()}</PostDate>
              </UserName>
            </Link>
          </PostLeftWrap>
        </PostTop>
        <PostCenterWrap>
          <PostTitle>{title}</PostTitle>
        </PostCenterWrap>
        <PostCenterWrap>
          <PostMediaVideoIF
            width="560"
            height="315"
            src={url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            // allowFullScreen
          />
        </PostCenterWrap>
        {/* <PostBottomWrapper> */}
          <PostText>{description}</PostText>
        {/* </PostBottomWrapper> */}
      </ForumWrapper>
    </>
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