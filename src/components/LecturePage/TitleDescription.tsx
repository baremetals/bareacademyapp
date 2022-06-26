import React from "react";
import styles from "../../styles/LecturePage/TitleDescription.module.css";

type Props = {
  title: string;
  description: string;
};

const TitleDescription = (props: Props) => {
  const { title, description } = props;
  return (
    <div className={styles.TitleDescription}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default TitleDescription;
