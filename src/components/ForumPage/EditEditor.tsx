import React, { useState } from 'react'
import dynamic from "next/dynamic";

import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
const ModalEditor: any = dynamic(() => import("./ModalEditor"), {
  ssr: false,
});

type editorProps = {
  onEditorStateChange: any;
  body: string
};


const EditEditor = ({ onEditorStateChange, body }: editorProps) => {
  const [content] = useState(body);

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
    <ModalEditor
      editorState={editorState}
      onEditorStateChange={(newState: EditorState) => {
        setEditorState(newState);
        onEditorStateChange(newState);
      }}
    />
  );
};

export default EditEditor
