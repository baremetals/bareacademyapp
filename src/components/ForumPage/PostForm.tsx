import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import slugify from "slugify"
import axios from "axios";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { isUser } from "features/auth";
import { setCategory } from "features/ui/reducers";

import {
  useCategoriesQuery,
  Exact,
  CategoriesQuery,
} from "generated/graphql";
import { QueryResult } from "@apollo/client";

import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
const ModalEditor: any = dynamic(() => import("./ModalEditor"), {
  ssr: false,
});


import { AiFillCloseCircle } from "react-icons/ai";

import {
  // CloseButtonWrap,
  // CardText,
  // InputContainer,
  // FormWrap,
  // MainContainer,
  TitleInput,
  Select,
  CategoryOptions,
  // ButtonContainer,
  BodyTextWrapper,
  // SubmitButton,
  // CloseButton,
  InputFormGroupRow,
  InputFormGroup,
  InputContainer,
  ButtonContainer,
  CloseButton,
  SubmitButton,
  MainContainer,
  FormWrap,
  CloseButtonWrap,
  CardText,
} from "../ShareForm/modal.styles";
import { ErrorMsg, SuccessMsg } from "components/Input";

import Modal from 'components/ShareForm/Modal';


export type FormInput = {
  title: string;
  category: string;
  body: string;
  id?: string;
};

const PostForm = ({
  closeM,
  showModal,
  setShowModal,
  ...props
}: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const cats: QueryResult<
    CategoriesQuery,
    Exact<{
      [key: string]: never;
    }>
  > = useCategoriesQuery();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const { user: user } = useAppSelector(isUser);
  const categories = cats?.data?.categories?.data;
  dispatch(setCategory(categories));

//  console.log(categories);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInput>();

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>("");

  const onSubmit = async (info: FormInput) => {
    // console.log(slugify(info.title))
      // setShowModal(false);
    const slug: string = slugify(info.title)
      await axios.post("/api/posts", {
        data: {
          title: info.title,
          body: info.body,
          category: info.category,
          creator: user?.id as string,
          slug
        },
      })
      .then(() => {
        setShowModal(false);
        setMsg("Post created successfully");
        setSuccess(true);
        router.push(`/forum/${slug}`);
        
      })
      .catch((_err) => {
        setMsg("Sorry something went wrong please try again later.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 10000);
      })

  };

  return (
    <Modal
      showModal={showModal}
      closeM={() => setShowModal(false)}
      setShowModal={setShowModal}
    >
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <MainContainer>
          <CloseButtonWrap>
            <AiFillCloseCircle onClick={closeM} />
          </CloseButtonWrap>
          <CardText>Create Post</CardText>
          {error && <ErrorMsg>{msg}</ErrorMsg>}
          {success && <SuccessMsg>{msg}</SuccessMsg>}
          <InputContainer>
            <InputFormGroupRow>
              <InputFormGroup>
                <TitleInput
                  {...register("title", { required: true })}
                  placeholder="title"
                  type="text"
                  name="title"
                  {...props}
                />
                {errors.title && <span>Title is required</span>}
              </InputFormGroup>
              <InputFormGroup>
                <Select {...register("category", { required: true })}>
                  <CategoryOptions>Please select a category</CategoryOptions>
                  {categories?.map((c) => (
                    <CategoryOptions key={c?.id} value={c?.id as string}>
                      {c?.attributes?.name}
                    </CategoryOptions>
                  ))}
                </Select>
                {errors.category && <span>Category is required</span>}
              </InputFormGroup>
            </InputFormGroupRow>

            <BodyTextWrapper>
              <ModalEditor
                id={user?.id as string}
                editorState={editorState}
                onEditorStateChange={(newState: EditorState) => {
                  setEditorState(newState);
                  setContent(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                  setValue("body", content);
                }}
              />
            </BodyTextWrapper>
          </InputContainer>
          <ButtonContainer>
            <CloseButton onClick={closeM} {...props} type="button">
              close
            </CloseButton>
            <SubmitButton type="submit">submit</SubmitButton>
          </ButtonContainer>
        </MainContainer>
      </FormWrap>
    </Modal>
  );
};

export default PostForm
