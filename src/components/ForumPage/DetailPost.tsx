import React, { useEffect, useState } from "react";
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
  PostMediaImage,
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
  PostMediaVideoIF,
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


// interface ForumPost {
//   id: string;
//   createdOn: any;
//   title: string;
//   body?: string;
//   category: Category;
//   points: number;
//   creator: User;
//   postPoints: Array<PostPoint>;
//   comments: ConcatArray<never>;
// }

// type userComment = {
//   body: string;
//   id: string;
//   createdOn: string;
//   createdBy: string;
//   user: User;
// };

// type dataProp = {
//     data: {
//       getPostBySlug: Maybe<PostResult> | undefined;
//     };
// };

// type dataProp = {
//   data: {
//     data: {
//       comments: Array<CommentEntity>;
//     };
//   };
// };


const DetailPost = (props: { props: { data: any; loading: any; error: any; }; }) => {
  // const router = useRouter();
  // const { slug } = router.query;
  // data fro props
  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const allPosts = data.data;
  const post = allPosts.posts.data[0];
  // console.log(post.id)

  // const comments = post.attributes.comments;
  // const students = course.attributes.students.data;

  // console.log(comments);

  const [showModal, setShowModal] = useState(false);

  // like and unlike post function call

  const [hasLikedPost, setHasLikedPost] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  // const [commentsArray, setCommentsArray] = useState([]);
  const [message, setMessage] = useState<string | undefined>("");

  const { user: user } = useAppSelector(isUser);
  const me = user;

  const {
    id,
    attributes: {
      body,
      category: {
        data: {
          id: catId,
          // attributes: { name },
        },
      },
      createdAt,
      creator: {
        data: {
          // id: userId,
          attributes: { username, slug: creatorSlug, img },
        },
      },
      points,
      post_points: {},
      // slug,
      title,
      // eslint-disable-next-line camelcase
      total_comments,
    },
  } = post;

  const [postPointNumber, setPostPointsNumber] = useState(points);
  const [pointsId, setPointsId] = useState<string>("");
  const postPoints = post?.attributes?.post_points?.data;
  // console.log(postPoints.length);

  // Comments Subscription data
  // const newComms = useNewCommentSubscription();
  // const newCommsData = newComms?.data?.newComment;
  // let commentsLength: number = 0;

  // console.log(comments);

  // This useEffect updates the points count
  useEffect(() => {
    let mounted = true;
    if (!mounted) {
      setPostPointsNumber(points);
    }
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (body?.includes("www.youtube.com" || ".mp4" || ".mov")) {
      if (mounted) {
        setIsVideo(true);
      }
    }
    return () => {
      mounted = false;
    };
  }, [body]);

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
    if (postPoints.length !== 0) {
      postPoints.forEach((point: { attributes: { user: { data: { id: string | undefined; }; }; }; id: React.SetStateAction<string>; }) => {
        if (point?.attributes?.user?.data?.id === me?.id) {
          if (mounted) {
            console.log(point?.id)
            setHasLikedPost(true);
            setPointsId(
              point?.id
            );
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

  const handleLike = async () => {
    // console.log(isCreator);
      const newPoint: number = points + 1;
      await axios
        .post("/api/points", {
          data: {
            isDecrement: true,
            post: id,
            user: me?.id,
            publishedAt: Date.now(),
          },
        })
        .then((res) => {
          console.log(res);
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

  const handleUnLike = async (pointsId:string) => {
    console.log(pointsId);
    const newPoint: number = points - 1;

    await axios
      .post("/api/points", {
        pointsId,
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
          <Link href={`/user-profile/${creatorSlug}`}>
            <PostProfileImge src={img} alt="user profile image" />
          </Link>

          <UserName>
            <Link href={`/user-profile/${creatorSlug}`}>{username}</Link>

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
        {isVideo && (
          <PostMediaVideoIF
            {...props}
            width="560"
            height="315"
            src={body}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        )}
        {<PostMediaImage alt="Post image" src={body} />}
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
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
      <Comment id={id} />
      <EditPostForm
        showModal={showModal}
        closeM={() => setShowModal(false)}
        setShowModal={setShowModal}
        title={title}
        categoryName={catId}
        categoryId={catId}
        body={body as string}
        id={id}
      />
    </Dashboard>
  );
};

export default DetailPost;


export const SocialDropDownIcon = styled(MdEdit)`
  cursor: pointer;
  display: block;
`;