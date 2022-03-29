import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"
import axios from "axios";

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

import { ErrorMsg } from "components/Input";
import { toast, ToastContainer } from "react-toastify";

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
  image: string;
  date: any;
  title: string;
  body?: string;
  likeCount: number;
  commentCount: number;
  children?: any;
  id: string;
  userIdSlug?: string;
}


const ImagePostCard = ({
  username,
  image,
  date,
  title,
  body,
  likeCount = 0,
  commentCount = 0,
  slug,
  children,
  id,
  userIdSlug,
}: ForumPost) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(true);


  const handleDelete = async (postId: string) => {
    console.log(postId);
    await axios
      .post("/api/posts/delete", {
        data: {
          deletePostId: postId,
        },
      })
      .then(() => {
        router.push(`/user-profile/${userIdSlug}`);
      })
      .catch((err) => {
        setMsg("Sorry something went wrong please try again later.");
        setError(true);
        setTimeout(() => {
          toast.error("Sorry something went wrong please try again later.");
          setError(false);
        }, 10000);
      });
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
          {error && <ErrorMsg>{msg}</ErrorMsg>}
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


