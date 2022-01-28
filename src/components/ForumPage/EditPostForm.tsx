import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
// import { useRouter } from "next/router";

// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth";
// import { setCategory } from "features/ui/reducers";

import {
  useCategoryQuery,
  useEditPostMutation,
} from "generated/graphql";

import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
const EditEditor = dynamic(() => import("./EditEditor"), {
  ssr: false,
});

import Modal from "components/ShareForm/Modal";

import { AiFillCloseCircle } from "react-icons/ai";

import {
  InputContainer,
  TitleInput,
  Select,
  CategoryOptions,
  BodyTextWrapper,
  InputFormGroupRow,
  InputFormGroup,
  FormWrap,
  MainContainer,
  CloseButtonWrap,
  CardText,
  ButtonContainer,
  CloseButton,
  SubmitButton,
} from "../ShareForm/modal.styles";
import { FormInput } from "./PostForm"
import { ErrorMsg, SuccessMsg } from 'components/Input';


type editPostType = {
  closeM: any;
  showModal: any;
  setShowModal: any;
//   form: FormInput;
    title: string;
    category: string;
    body: string;
    id: string;
};

const EditPostForm = ({ ...props }: editPostType) =>
  //   { title, category, body, id }: FormInput
  {
    const { data } = useCategoryQuery();

    const [editPost] = useEditPostMutation();
    // const { user: user } = useAppSelector(isUser);

    const categories = data?.getAllCategories as any;
    // dispatch(setCategory(data?.getAllCategories));

    const { closeM, showModal, setShowModal, title, category, body, id } =
      props;
    // console.log(props)

    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<FormInput>();

    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [content, setContent] = useState(body);

    const [, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const onEditSubmit = async (info: FormInput) => {
      // console.log(info);
      const res = await editPost({
        variables: {
          id: id as string,
          categoryName: category ? category : info.category,
          title: title ? title : info.title,
          body: body ? body : info.body,
        },
      });
      // console.log(res)
      const message = res?.data?.editPost?.messages![0] as string;
      setMsg(message);
      if (res?.data?.editPost?.messages![0].includes("successfully.")) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setShowModal(false);
        }, 5000);
      } else {
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
        <FormWrap onSubmit={handleSubmit(onEditSubmit)}>
          <MainContainer>
            <CloseButtonWrap>
              <AiFillCloseCircle onClick={closeM} />
            </CloseButtonWrap>
            <CardText>Edit Post</CardText>
            {error && <ErrorMsg>{msg}</ErrorMsg>}
            {success && <SuccessMsg>{msg}</SuccessMsg>}
            <InputContainer>
              <InputFormGroupRow>
                <InputFormGroup>
                  <TitleInput
                    {...register("title", { required: true })}
                    placeholder="title"
                    type="text"
                    defaultValue={title}
                    name="title"
                  />
                  {errors.title && <span>Title is required</span>}
                </InputFormGroup>
                <InputFormGroup>
                  <Select {...register("category", { required: true })}>
                    <CategoryOptions>{category}</CategoryOptions>
                    {categories?.map(
                      (c: { value: string; name: string; id: string }) => (
                        <CategoryOptions
                          key={c.id}
                          defaultValue={category}
                          value={c.value}
                        >
                          {c.name}
                        </CategoryOptions>
                      )
                    )}
                  </Select>
                  {errors.category && <span>Category is required</span>}
                </InputFormGroup>
              </InputFormGroupRow>

              <BodyTextWrapper>
                <EditEditor
                  onEditorStateChange={(newState: EditorState) => {
                    setEditorState(newState);
                    setContent(
                      draftToHtml(convertToRaw(newState.getCurrentContent()))
                    );
                    setValue("body", content);
                  }}
                  body={content}
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

export default EditPostForm
