import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import slugify from "slugify";
import axios from "axios";

// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth";
// import { setCategory } from "features/ui/reducers";

import {
  useCategoriesQuery,
} from "generated/graphql";

import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
const EditEditor: any = dynamic(
  () => import("./EditEditor"),
  {
    ssr: false,
  }
);

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
  categoryName: string;
  categoryId: string;
  body: string;
  id: string;
};

const EditPostForm = ({ ...props }: editPostType) =>
  //   { title, category, body, id }: FormInput
  {
    const router = useRouter();
    const { data } = useCategoriesQuery();
    // const { user: user } = useAppSelector(isUser);

    const categories = data?.categories?.data;
    // dispatch(setCategory(data?.getAllCategories));
    

    const {
      closeM,
      showModal,
      setShowModal,
      title,
      categoryName,
      categoryId,
      body,
      id,
    } = props;
    

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

      const slug: string = slugify(info.title);
      await axios
        .post("/api/posts/edit", {
          data: {
            updatePostId: id,
            title: info.title,
            slug: slugify(info.title),
            body: info.body,
          },
        })
        .then(() => {
          setShowModal(false);
          setMsg("Post edited successfully");
          setSuccess(true);
          router.push(`/forum/${slug}`);
        })
        .catch((err) => {
          setMsg("Sorry something went wrong please try again later.");
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 10000);
        });
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
                    <CategoryOptions>{categoryName}</CategoryOptions>
                    {categories?.map((c) => (
                      <CategoryOptions
                        key={c.id}
                        // defaultValue={categoryId}
                        value={c.id ? c?.id : (categoryId as string)}
                      >
                        {c.attributes?.name}
                      </CategoryOptions>
                    ))}
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
