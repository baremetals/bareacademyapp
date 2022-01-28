import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Thumb,
  Image,
  ThumbInner,
  Container,
  ThumbsContainer,
} from "./uploader.styles";
import { UploadIcon } from "../../../public/assets/icons/UploadIcon"




const Uploader = ({ onChange, imageURL }: any) => {
    const [files, setFiles] = useState(
      imageURL ? [{ name: "upload", preview: imageURL }] : []
    );

    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      multiple: false,
      onDrop: useCallback(
        (acceptedFiles) => {
          setFiles(
            acceptedFiles.map((file: Blob | MediaSource) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
          onChange(acceptedFiles);
        },
        [onChange]
      ),
    });

    const thumbs = files.map((file) => (
      <Thumb key={file.name}>
        <ThumbInner>
          <Image src={file.preview} alt={file.name} />
        </ThumbInner>
      </Thumb>
    ));

    useEffect(
      () => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      },
      [files]
    );
  return (
    <>
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        <UploadIcon />
      </Container>
      {thumbs && <ThumbsContainer>{thumbs}</ThumbsContainer>}
    </>
  );
};

export default Uploader
