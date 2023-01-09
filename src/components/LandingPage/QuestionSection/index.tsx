import React from 'react'
import Image from "next/image";
import styles from "../../../styles/LandingPage/Landing.module.css";

// import Link from 'next/link';
import LandingButton from '../LandingButton';
// import { CarouselCard, CarouselContainer, CarouselOwner, LandingButton } from "../styles";

export const QuestionSection = () => {
  return (
    <article className={styles.questionSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.sectionInfo}>
              <label>FORUM</label>
              <h2 className={styles.sectionHeader}>
                Stuck? Post a question to the forum
              </h2>
              <p>
                The forum has been created for students to ask any challenging
                questions. All students and teachers have access and are all
                willing to help. We want to build a helpful and thriving
                community.
              </p>

              <LandingButton />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.questionImg}>
              <Image
                width={460}
                height={281}
                alt="posta Question"
                src="/assets/images/Postaquestion.png"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
