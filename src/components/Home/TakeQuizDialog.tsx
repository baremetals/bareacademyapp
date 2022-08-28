import Image from "next/image";
import React from "react";
import styles from "../../styles/Home/TakeQuizDialog.module.css";

interface Props {}

const TakeQuizDialog = (props: Props) => {
  return (
    <div className={styles.TakeQuizDialog}>
      <div className={styles.TakeQuizImage}>
        <Image src={require("./assets/takequiz.png")} alt="takequiz" />
      </div>
      <div className={styles.TakeQuizText}>Haven't decided what to study?</div>
      <div className={styles.button}>Start quiz</div>
    </div>
  );
};

export default TakeQuizDialog;
