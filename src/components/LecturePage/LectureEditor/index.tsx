import React from "react";
// import dynamic from "next/dynamic";
import { Editor } from "react-draft-wysiwyg";
// import { storage } from "lib/admin";
// import {
//   uploadBytes,
// //   ref,
// //   getDownloadURL,
//   StorageReference,
// } from "firebase/storage";

// const Editor = dynamic(
//   () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
//   {
//     ssr: false,
//   }
// );
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// const folder: string | undefined = process.env.NEXT_PUBLIC_POST_UPLOAD_FOLDER;

const LectureEditor = ({
  onEditorStateChange,
  editorState,
  _id,
  // content,
  ...props
}: any) => {
//   const uploadImageCallBack = async (file: File) => {
//     const testingRef = ref(storage, `${folder}/${file.name}`);
//     await uploadInlineImageForModal(file, testingRef);
//     const url = await getDownloadURL(testingRef);
//     // console.log(res);
//     return Promise.resolve({
//       data: {
//         link: url,
//       },
//     });
//   };

  return (
    <Editor
      {...props}
      editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={onEditorStateChange}
      // toolbarOnFocus
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "fontFamily",
          "list",
          "textAlign",
          "colorPicker",
          "link",
          "embedded",
        //   "emoji",
        //   "image",
          "history",
        ],
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        // image: {
        //   urlEnabled: true,
        //   uploadEnabled: true,
        //   uploadCallback: uploadImageCallBack,
        //   previewImage: true,
        //   alt: { present: false, mandatory: false },
        // },
      }}
    />
  );
};

export default LectureEditor;

// export const uploadInlineImageForModal = async (
//   file: File,
//   storeRef: StorageReference
// ) => {
//   try {
//     return await uploadBytes(storeRef, file);
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// };
