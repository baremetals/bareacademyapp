import React, { SetStateAction, useEffect, useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
// import { CommentEntity } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import axios from "axios";


import {
  PostTop,
  PostLeftWrap,
  PostProfileImge,
  UserName,
  PostDate,
  // PostTopRightWrap,
  // ExpandIcon,
  PostCenterWrap,
  // PostTitle,
  // PostMediaImage,
  PostBottomWrapper,
  BottomLeftWrap,
  FilledLikeIcon,
  UnFilledLikeIcon,
  LikeCounter,
  BottomRightWrap,
  CommentIcon,
  CommentText,
  // PostDropdown,
  LikeGroup,
  // DropAndCenterWrap,
  // PostMediaVideoIF,
} from "./forum.styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import Comment  from "../Comments";
import { ErrorMsg } from 'components/Input';
import Dashboard from 'components/Dashboard';
import { PageHeading, SocialDropDown } from 'styles/common.styles';
// import Dropdown from "../../Dropdown";
import { MdEdit } from "react-icons/md";
import styled from 'styled-components';
import EditPostForm from './EditPostForm';
import { Post, PostEntity, PostEntityResponseCollection } from 'generated/graphql';



const DetailPost = (props: {
  props: {
    data: { data: { posts: PostEntityResponseCollection } };
    loading: boolean;
    error: any;
  };
}) => {
  // const router = useRouter();
  // const { slug } = router.query;
  // data fro props
  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const allPosts = data.data;
  const post: PostEntity = allPosts.posts.data[0];

  // const comments = post.attributes.comments;
  // const students = course.attributes.students.data;

  // console.log(comments);

  const [showModal, setShowModal] = useState(false);

  // like and unlike post function call

  const [hasLikedPost, setHasLikedPost] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  // const [isVideo, setIsVideo] = useState(false);
  // const [commentsArray, setCommentsArray] = useState([]);
  const [message, setMessage] = useState<string | undefined>("");

  const { user: user } = useAppSelector(isUser);
  const me = user;
  // eslint-disable-next-line camelcase
  const { body, createdAt, title, total_comments } = post.attributes as Post;

  const [postPointNumber, setPostPointsNumber] = useState(
    post?.attributes?.points
  );
  const [pointsId, setPointsId] = useState<string>("");
  const postPoints = post?.attributes?.post_points?.data;
  // const videos = course?.attributes?.videos?.data;
  const category = post?.attributes?.category?.data;
  const creator = post?.attributes?.creator?.data?.attributes;

  // Comments Subscription data
  // const newComms = useNewCommentSubscription();
  // const newCommsData = newComms?.data?.newComment;
  // let commentsLength: number = 0;<iframe width="560" height="315" src="https://www.youtube.com/embed/KKz7P2pF7o8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  // console.log(data.data);

  // This useEffect updates the points count
  useEffect(() => {
    let mounted = true;
    if (!mounted) {
      setPostPointsNumber(post?.attributes?.points);
    }
    return () => {
      mounted = false;
    };
  }, []);

  // useEffect(() => {
  //   let mounted = true;
  //   if (body?.includes("www.youtube.com" || ".mp4" || ".mov")) {
  //     if (mounted) {
  //       setIsVideo(true);
  //     }
  //   }
  //   return () => {
  //     mounted = false;
  //   };
  // }, [body]);

  // This useEffect is subscribing to new comments to update the comments count
  // useEffect(() => {
  //   // let mounted = true;
  //   if (newCommsData) {
  //     const newMessageItem = newCommsData;
  //     const newArrayItem: any = (prevArray: userComment[]) => {
  //       return [newMessageItem, ...prevArray];
  //     };
  //     setCommentsArray(newArrayItem);
  //   }
  //   // if (mounted) {

  //   // }
  //   // return () => {
  //   //   mounted = false;
  //   // };
  // }, [newCommsData]);

  // This useEffect checks if the logged in user has liked the post already
  useEffect(() => {
    let mounted = true;
    if (postPoints?.length !== 0) {
      postPoints?.forEach((point, id) => {
        if (point?.attributes?.user?.data?.id === me?.id) {
          if (mounted) {
            console.log(point?.id);
            setHasLikedPost(true);
            setPointsId(point?.id as SetStateAction<string>);
          }
        }
      });
    }

    return () => {
      mounted = false;
    };
  }, [postPoints, me?.id]);

  // commentsLength = commentsArray.concat(comments).length;
  // console.log(commentsLength);

  if (!data || loading) {
    return <div>loading...</div>;
  }

  const points = post?.attributes?.points as number;
  const handleLike = async () => {
    // console.log(isCreator);
    const newPoint = points + 1;
    await axios
      .post("/api/posts/points", {
        data: {
          isDecrement: true,
          post: post?.id,
          user: me?.id,
          publishedAt: Date.now(),
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.msg) {
          setMessage(res.data.msg);
          setErrorMsg(true);
        } else {
          setPostPointsNumber(newPoint);
          setHasLikedPost(true);
        }
      })
      .catch((err) => {
        setMessage("sorry Something went wrong please try again later.");
        setErrorMsg(true);
      });
  };

  const handleUnLike = async (pointId: string) => {
    console.log(pointId);
    const newPoint: number = points - 1;

    await axios
      .post("/api/points", {
        pointId,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.msg) {
          setMessage(res.data.msg);
          setErrorMsg(true);
        } else {
          setPostPointsNumber(newPoint);
          setHasLikedPost(false);
        }
      })
      .catch((err) => {
        setMessage("sorry Something went wrong please try again later.");
        setErrorMsg(true);
      });
  };

  return (
    <Dashboard>
      <PageHeading>
        <SocialDropDown>
          <span onClick={() => setShowModal(true)}>
            <MdEdit />
            Edit
          </span>
        </SocialDropDown>
        {title}
      </PageHeading>

      <PostTop>
        <PostLeftWrap>
          <Link href={`/user-profile/${creator?.slug}`}>
            <PostProfileImge
              src={creator?.img as string}
              alt="user profile image"
            />
          </Link>

          <UserName>
            <Link href={`/user-profile/${creator?.slug}`}>
              {creator?.username}
            </Link>

            <PostDate>{dayjs(createdAt).fromNow()}</PostDate>
          </UserName>
        </PostLeftWrap>
        {/* <PostTopRightWrap>
          <PostDropdown>
            <ExpandIcon onClick={() => setShowDropdown(!showDropdown)} />
            <Dropdown showDropdown={showDropdown} />
          </PostDropdown>
        </PostTopRightWrap> */}
      </PostTop>
      <PostCenterWrap>
        <br />
        {/* <PostTitle>{title}</PostTitle> */}
        {/* <br /> */}
        {/* {isVideo && (
          <PostMediaVideoIF
            {...props}
            width="560"
            height="315"
            src={body as string}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        )} */}
        {/* {<PostMediaImage alt="Post image" src={body as string} />} */}
        <div dangerouslySetInnerHTML={{ __html: body as string }}></div>
      </PostCenterWrap>

      <PostBottomWrapper>
        <BottomLeftWrap>
          <LikeGroup>
            {hasLikedPost ? (
              <FilledLikeIcon onClick={() => handleUnLike(pointsId)} />
            ) : (
              <UnFilledLikeIcon onClick={() => handleLike()} />
            )}
            <LikeCounter>{postPointNumber}</LikeCounter>
            {errorMsg && <ErrorMsg>{message}</ErrorMsg>}
          </LikeGroup>
        </BottomLeftWrap>
        <BottomRightWrap>
          <CommentIcon />
          {/* eslint-disable-next-line camelcase */}
          <CommentText>{total_comments}</CommentText>
        </BottomRightWrap>
      </PostBottomWrapper>

      <EditPostForm
        showModal={showModal}
        closeM={() => setShowModal(false)}
        setShowModal={setShowModal}
        title={title as string}
        categoryName={category?.id as string}
        categoryId={category?.id as string}
        body={body as string}
        id={post?.id as string}
      />
      <Comment id={post?.id as string} />
    </Dashboard>
  );
};

export default DetailPost;


export const SocialDropDownIcon = styled(MdEdit)`
  cursor: pointer;
  display: block;
`;