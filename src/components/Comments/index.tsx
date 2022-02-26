import React, { useEffect,  useState } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

import {
  // NewCommentDocument,
  // GetCommentsByPostSlugDocument,
  useCreateCommentMutation,
  // User,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
  // comments,
  CommentsDocument,
} from "generated/graphql";


import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const PostEditor = dynamic(() => import("../Editor"), {
  ssr: false,
});

import {
  PostDropdown,
  UserName,
} from "components/ForumPage/forum.styles";
import { SubmitButton } from "components/ShareForm/modal.styles";

import {
  CommentHorizontalRule,
  CommentCard,
  CommentWrapper,
  CommentLeftWrap,
  UserProfileImge,
  CommentText,
  CommentDate,
  CommentTopRightWrap,
  ExpandIcon,
} from "./comment.styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import Dropdown, { DeleteIcon, EditIcon, ItemText, ItemWrapper } from "../Dropdown"
import { useQuery } from '@apollo/client';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



type FormInput = {
  body: string;
};

type commentProps = {
  comment: {
    data: {
      id: string;
      attributes: {
        body: string;
        createdAt: Date;
        user: {
          data: {
            id: string;
            attributes: {
              img: string;
              slug: string;
              username: string;
            };
          };
        };
      };
    };
  };
};


const Comment = ({id }: {id: string}) => {
  const router = useRouter();
  const { slug } = router.query;
  const [newComment] = useCreateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const { user: user } = useAppSelector(isUser);
  const [showDropdown, setShowDropdown] = useState(0);
  const [comArray, setComArray] = useState([]);
  const [showEditor, setShowEditor] = useState(true);
  const [showEditEditor, setShowEditEditor] = useState(false);

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  // console.log(id)
  // for the edit editor

  const [editContent] = useState<string>("");

  const [content, setContent] = useState<string>("");
  const [comId, setComId] = useState<string>("");
  const {
    setValue,
    handleSubmit,
    reset,
    // handleSubmit as handlePasswordSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInput>();

  // useEffect(() => {
  //   // let mounted = true;
  //   subscribeToMore({
  //     document: NewCommentDocument,
  //     // variables: { slug: slug },
  //     updateQuery: (prev, { subscriptionData }) => {
  //       if (!subscriptionData.data) return prev;
  //       const newCommentItem: userComment = subscriptionData.data.newComment;
  //       const newArrayItem: any = (prevArray: userComment[]) => {
  //         return [newCommentItem, ...prevArray];
  //       };
  //       setComArray(newArrayItem);
  //     },
  //   });
  //   // return () => {
  //   //   mounted = false;
  //   // };
  // }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const { refetch, subscribeToMore, ...result } = useQuery(CommentsDocument, {
    variables: {
      filters: {
        post: {
          id: {
            eq: id,
          },
        },
      },
      pagination: {
        start: 0,
        limit: 4,
      },
      sort: "updatedAt:desc",
    },
  });

  // console.log(result);
  const comments = result.data?.comments.data;

  // console.log(comments);
  // console.log(result.data);
  const me: string | undefined | any = user?.id;

  // if (!result.data || result.loading) {
  //   return <div>loading...</div>;
  // }

  const onSubmit = async ({ body }: any) => {
    try {
      const response = await newComment({
        variables: {
          data: {
            post: id,
            user: me,
            body,
            publishedAt: new Date(),
          },
        },
      });
      if (response.data) {
        // console.log("we came here man",response.data)
        refetch();
      }
    } catch (ex) {
      console.log(ex);
      toast.error("something went wrong your message was not sent.");
      // throw ex;
    }
  };

  const onEditSubmit = async () => {
    // console.log(comId)
    try {
      const response = await updateComment({
        variables: {
          updateCommentId: comId,
          data: {
            post: id,
            user: me,
            body: content,
          },
        },
      });
      if (response.data) {
        // console.log("we came here man", response.data);
        refetch();
      } 
    } catch (ex) {
      console.log(ex);
      toast.error("something went wrong your message was not sent.");
    }
  };

  const toggleDropdown = (id: number) => {
    if (id === showDropdown) {
      setShowDropdown(0);
    } else {
      setShowDropdown(id);
    }
  };

  const toggleEditor = (body: string, id: string): void => {
    setShowEditor(false);
    setShowEditEditor(true);
    // setEditContent(body);
    setContent(body);
    setComId(id);
    console.log(editContent);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteComment({
      variables: { deleteCommentId: id },
    });
    if (res.data) {
      console.log(res);
      refetch();
    } else {
      toast.error("something went wrong your message was not deleted.");
    }
  };

  return (
    <>
      <div>
        <CommentHorizontalRule />
        <CommentCard>
          {result.error ||
            !comArray.concat(comments) ||
            (comArray.concat(comments).length === 0 && (
              <div> no comments </div>
            ))}

          {comments &&
            comArray
              .concat(comments)
              .map(
                ({ id, attributes: { body, updatedAt, createdAt, user } }) => (
                  <div key={id}>
                    <CommentWrapper key={id}>
                      <CommentLeftWrap>
                        <Link href={`user-profile/${slug}`}>
                          <UserProfileImge
                            alt="user image"
                            src={user?.data?.attributes.img}
                          />
                        </Link>

                        <CommentText>
                          <Link
                            href={`user-profile/${user?.data?.attributes.username}`}
                          >
                            <UserName>
                              {user?.data?.attributes.username}
                            </UserName>
                          </Link>
                          <CommentDate>
                            {dayjs(
                              updatedAt !== null ? updatedAt : createdAt
                            ).fromNow()}
                          </CommentDate>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: body,
                            }}
                          ></div>
                        </CommentText>
                      </CommentLeftWrap>
                      <CommentTopRightWrap>
                        <PostDropdown>
                          <ExpandIcon onClick={() => toggleDropdown(id)} />
                          <Dropdown
                            onClick={() => toggleDropdown(id)}
                            showDropdown={showDropdown === id}
                          >
                            <ItemWrapper>
                              <div onClick={() => toggleEditor(body, id)}>
                                <EditIcon />
                                <ItemText
                                  onClick={() => toggleEditor(body, id)}
                                >
                                  Edit
                                </ItemText>
                              </div>
                            </ItemWrapper>
                            <ItemWrapper>
                              <div onClick={() => handleDelete(id)}>
                                <DeleteIcon />
                                <ItemText onClick={() => handleDelete(id)}>
                                  Delete
                                </ItemText>
                              </div>
                            </ItemWrapper>
                          </Dropdown>
                        </PostDropdown>
                      </CommentTopRightWrap>
                    </CommentWrapper>
                  </div>
                )
              )}
          {showEditor && (
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.body && <span>text is required</span>}
              <PostEditor
                content={content}
                editorState={editorState}
                onEditorStateChange={(newState: EditorState) => {
                  setEditorState(newState);
                  setContent(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                  setValue("body", content);
                }}
              />
              <br />
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          )}

          {showEditEditor && (
            <form onSubmit={handleSubmit(onEditSubmit)}>
              {errors.body && <span>text is required</span>}
              <PostEditor
                content={content}
                onEditorStateChange={(newState: EditorState) => {
                  setContent(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                  setValue("body", content);
                }}
              />
              <br />
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          )}
        </CommentCard>
      </div>
      <ToastContainer />
    </>
  );
};
export default Comment;

