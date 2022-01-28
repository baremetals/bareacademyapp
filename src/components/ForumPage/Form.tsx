import Modal from 'components/ShareForm/Modal';
import React from 'react'
import { useForm } from "react-hook-form";

export type FormInput = {
  title: string;
  category: string;
  body: string;
  id?: string;
};

const Form = ({
  closeM,
  showModal,
  setShowModal,
  onSubmit,
  formTitle,
  error,
  msg,
  content,
  title,
  category,
  children,
  ...props
}: any) => {

    const {
      

        setValue,
    //   formState: { errors },
    } = useForm<FormInput>();

    setValue("body", content)
    // register("title", title)
    // register("category", category);

    return (
      <Modal
        showModal={showModal}
        closeM={() => setShowModal(false)}
        setShowModal={setShowModal}
      >
       
      </Modal>
    );
}

export default Form
