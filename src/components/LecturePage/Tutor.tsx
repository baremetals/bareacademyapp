import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import styles from "../../styles/LecturePage/Tutor.module.css";

type Props = {
  tutor: {
    name: string;
    title: string;
    url: string;
    img: string;
  };
};

const Tutor = (props: Props) => {
  const { tutor } = props;
  return (
    <div className={styles.tutorContainer}>
      <Link href={tutor.url}>
        <a className={styles.tutorInfos}>
          <div
            className={styles.tutorImage}
            style={{
              backgroundImage: `url('${tutor.img}')`,
            }}
          ></div>
          <div className={styles.tutorNameTitle}>
            <div className={styles.tutorName}>{tutor.name}</div>
            <div className={styles.tutorTitle}>{tutor.title}</div>
          </div>
        </a>
      </Link>
      <div className={styles.tutorFollowButton}>
        <div className={styles.tutorFollowButtonInner}>
          <FiPlus />
        </div>
      </div>
    </div>
  );
};

export default Tutor;
