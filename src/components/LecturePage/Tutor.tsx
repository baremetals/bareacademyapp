import { Teacher } from 'generated/graphql';
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import styles from "../../styles/LecturePage/Tutor.module.css";

type Props = {
  tutor: Teacher;
  // {
  //   fullName: string;
  //   title: string;
  //   image: string;
  //   url?: string | null;
  // };
};

const Tutor = (props: Props) => {
  const { tutor } = props;
  // console.log(tutor)
  return (
    <div className={styles.tutorContainer}>
      <Link href={tutor.url as string}>
        <a className={styles.tutorInfos}>
          <div
            className={styles.tutorImage}
            style={{
              backgroundImage: `url('${tutor.image}')`,
            }}
          ></div>
          <div className={styles.tutorNameTitle}>
            <div className={styles.tutorName}>{tutor.fullName}</div>
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
