import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import {
  PostTop,
  PostLeftWrap,
  PostProfileImge,
  UserName,
  PostDate,
  PostTopRightWrap,
  ExpandIcon,
  PostCenterWrap,
  PostText,
  PostBottomWrapper,
  BottomLeftWrap,
  // LikeIcon,
  LikeCounter,
  BottomRightWrap,
  CommentIcon,
  CommentText,
  ForumWrapper,
  ViewIcon,
  ViewCounter,
  PostMediaVideoIF,
  // ForumContainer,
} from "../../ForumPage/forum.styles";
// import  Comment  from "../../Comments";
import Dropdown from "../../Dropdown";

const VideoPostCard = ({
  username,
  image,
  date,
  title,
  body,
  likeCount = 0,
  viewCount = 0,
  commentCount = 0,
  postId,
  ...props
}: any) => {
  const [showComments, setShowComments] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      {/* <ForumContainer> */}
        <ForumWrapper>
          <PostTop>
            <PostLeftWrap>
              <PostProfileImge src={image} alt="user profile image" />
              <UserName>{username}</UserName>
              <PostDate>{dayjs(date).fromNow()}</PostDate>
            </PostLeftWrap>
            <PostTopRightWrap>
              <ExpandIcon onClick={() => setShowDropdown(!showDropdown)} />
            </PostTopRightWrap>
          </PostTop>
          <Dropdown showDropdown={showDropdown} />
          <PostCenterWrap>
            <PostText>{title}</PostText>
            <PostMediaVideoIF
              {...props}
              width="560"
              height="315"
              src={body}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
          </PostCenterWrap>
          <PostBottomWrapper>
            <BottomLeftWrap>
              {/* <LikeIcon /> */}
              <LikeCounter>{likeCount}</LikeCounter>
              <ViewIcon />
              <ViewCounter>{viewCount}</ViewCounter>
            </BottomLeftWrap>
            <BottomRightWrap>
              <CommentIcon onClick={() => setShowComments(!showComments)} />
              <CommentText>{commentCount}</CommentText>
            </BottomRightWrap>
          </PostBottomWrapper>
          {/* <Comment showComments={showComments} postId={postId} /> */}
        </ForumWrapper>
      {/* </ForumContainer> */}
    </>
  );
};

export default VideoPostCard;
