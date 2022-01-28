import Link from 'next/link';
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
  ForumWrapper,
  PostBottomWrapper,
  PostCenterWrap,
  PostDate,
  PostLeftWrap,
  PostMediaVideoIF,
  PostText,
  PostTitle,
  PostTop,
  UserName,
} from "components/ForumPage/forum.styles";

interface VideoPost {
  fullName: string;
  userIdSlug: string;
  date: any;
  title: string;
  url?: string;
  description: string;
}

const VideoCard = ({
  fullName,
  userIdSlug,
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
            <Link href={`user-profile/${userIdSlug}`}>
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
            allowFullScreen
          />
        </PostCenterWrap>
        <PostBottomWrapper>
          <PostText>{description}</PostText>
        </PostBottomWrapper>
      </ForumWrapper>
    </>
  );
};

export default VideoCard
