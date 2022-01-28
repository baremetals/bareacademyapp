import React, { useState } from "react";
// import dynamic from "next/dynamic"; 
import htmlToDraft from "html-to-draftjs";
import { ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

// const Editor =
//   dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
//     ssr: false,
//   });

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PostEditor = ({ onEditorStateChange, content, ...props }: any) => {

  const blocksFromHtml = htmlToDraft(content);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createWithContent(contentState)
  );

  return (
    <Editor
      {...props}
      editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={(newState: EditorState) => {
        setEditorState(newState);
        onEditorStateChange(newState);
      }}
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
          "emoji",
          "history",
        ],
        // inline: { inDropdown: true },
        // list: { inDropdown: true },
        // textAlign: { inDropdown: true },
        // link: { inDropdown: true },
        // history: { inDropdown: true },
      }}
    />
  );
};

export default PostEditor
