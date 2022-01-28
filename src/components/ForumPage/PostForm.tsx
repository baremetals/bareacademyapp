import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";


import { useAppDispatch, useAppSelector } from "app/hooks";
import { isUser } from "features/auth";
import { setCategory } from "features/ui/reducers";

import {
  useCategoryQuery,
  useCreatePostMutation,
} from "generated/graphql";

import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
const ModalEditor = dynamic(() => import("./ModalEditor"), {
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
import { ErrorMsg } from "components/Input";

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
  const { data } = useCategoryQuery();
  

  const [post] = useCreatePostMutation();
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const { user: user } = useAppSelector(isUser);
  const categories = data?.getAllCategories as any;
  dispatch(setCategory(data?.getAllCategories));

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
    console.log(info)
    //   setShowModal(false);
    const res = await post({
      variables: {
        userId: user?.id as string,
        categoryName: info.category,
        title: info.title,
        body: info.body,
      },
    });
    
    if (res?.data?.createPost?.messages![0].includes("success-")) {
        const detailpage = res?.data?.createPost?.messages![0].slice(
          8
        );
        // console.log(response?.data?.createPost?.messages);
        router.push(`/forum/${detailpage}`);
        setShowModal(false);
    } else {
        const message = res?.data?.createPost?.messages![0] as string;
        setMsg(message);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
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
                  {categories?.map(
                    (c: { value: string; name: string; id: string }) => (
                      <CategoryOptions key={c.id} value={c.value}>
                        {c.name}
                      </CategoryOptions>
                    )
                  )}
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
