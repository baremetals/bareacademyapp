import React from "react";
import styles from "../../styles/LecturePage/LectureDescription.module.css";

type Props = {
  description: string;
};

const LectureDescription = (props: Props) => {
  const { description } = props;
  return (
    <div className={styles.description}>
      {description.split("\n").map((line, index) => {
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
};

export default LectureDescription;
