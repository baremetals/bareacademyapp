import React from "react";
import styles from "../../styles/LecturePage/LectureDescription.module.css";
import Markdown from "markdown-to-jsx";

type Props = {
  notes: string;
};

const LectureDescription = (props: Props) => {
  const { notes } = props;
  return (
    <div className={styles.description}>
      {notes.split("\n").map((line, index) => {
        return <Markdown key={index}>{line}</Markdown>;
      })}
      {/* <Markdown >{notes}</Markdown>; */}
    </div>
  );
};

export default LectureDescription;
