import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import Dropdown, {
  DeleteIcon,
  EditIcon,
  ItemText,
  ItemWrapper,
} from "../Dropdown";
// import { useDeletePostMutation } from "generated/graphql";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


import {
  PostTop,
  PostLeftWrap,
  PostProfileImge,
  UserName,
  PostDate,
  PostTopRightWrap,
  PostCenterWrap,
  PostText,
  PostBottomWrapper,
  BottomLeftWrap,
  // LikeIcon,
  // LikeCounter,
  BottomRightWrap,
  ForumWrapper,
  PostDropdown,
  LikeGroup,
  ViewMore,
  PostTitle,
  // DropAndCenterWrap,
  ViewIcon,
  ViewCounter,
} from "./forum.styles";



interface ForumPost {
  slug: string;
  username: string;
  userIdSlug: string;
  image: string;
  date: any;
  title: string;
  body?: string;
  likeCount: number;
  commentCount: number;
  children?: any;
  id: string;
}


const ImagePostCard = ({
  username,
  slug: userIdSlug,
  image,
  date,
  title,
  body,
  likeCount = 0,
  commentCount = 0,
  slug,
  children,
  id
}: ForumPost) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  // const [deletePost] = useDeletePostMutation();
  
  const handleDelete = async (postId: string) => {
    // const res = await deletePost({
    //   variables: { deletePostId: postId },
    // });
    // if (res.data?.deletePost.includes("deleted")) {
    //   // console.log(res);
    //   // result.refetch(DeletePostDocument);
    // } else {
    //   toast.error(res.data?.deletePost);
    // }
  };
  

  return (
    <>
      <ForumWrapper>
        <PostTop>
          <PostLeftWrap>
            <Link href={`user-profile/${userIdSlug}`}>
              <PostProfileImge src={image} alt="user profile image" />
            </Link>
            <Link href={`user-profile/${userIdSlug}`}>
              <UserName>
                {username}

                <PostDate>{dayjs(date).fromNow()}</PostDate>
              </UserName>
            </Link>
          </PostLeftWrap>
          <PostTopRightWrap>
            <PostDropdown>
              <span
                className="DropDownIcon"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {children}
              </span>
              <Dropdown showDropdown={showDropdown} slug={slug} id={id}>
                <ItemWrapper>
                  <div onClick={() => router.push(`/forum/${slug}`)}>
                    <EditIcon />
                    <ItemText onClick={() => router.push(`/forum/${slug}`)}>
                      Edit
                    </ItemText>
                  </div>
                </ItemWrapper>
                <ItemWrapper>
                  <div onClick={() => handleDelete(id)}>
                    <DeleteIcon />
                    <ItemText onClick={() => handleDelete(id)}>Delete</ItemText>
                  </div>
                </ItemWrapper>
              </Dropdown>
            </PostDropdown>
          </PostTopRightWrap>
        </PostTop>
        <PostCenterWrap>
          <PostTitle>{title}</PostTitle>
        </PostCenterWrap>
        <PostCenterWrap>
          <PostText>{body}</PostText>
        </PostCenterWrap>
        <PostBottomWrapper>
          <BottomLeftWrap>
            <LikeGroup>
              <ViewIcon />
              <ViewCounter>{commentCount}</ViewCounter>
            </LikeGroup>
          </BottomLeftWrap>
          <BottomRightWrap>
            <Link href={`/forum/${slug}`}>
              <ViewMore>View more</ViewMore>
            </Link>
          </BottomRightWrap>
        </PostBottomWrapper>
      </ForumWrapper>
      <ToastContainer />
    </>
  );
};

export default ImagePostCard;


