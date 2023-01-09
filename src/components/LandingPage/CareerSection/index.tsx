import React from 'react'
import Image from "next/image";
import styles from "../../../styles/LandingPage/Landing.module.css";

export const CareerSection = () => {
  return (
    <article className={styles.careerSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.careerImg}>
              <Image
              width={553}
              height={434}
                alt="Construct A Stunning Career Perspective"
                src="/assets/images/construct.png"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.sectionInfo}>
              <label>EVERYTHING bare</label>
              <h2 className={styles.sectionHeader}>
                Construct A Stunning Career Perspective
              </h2>
              <div className={styles.acc}>
                <div className={`${styles.acc__card} ${styles.active}`}>
                  <div className={`${styles.acc__title} ${styles.active}`}>
                    Multiple Platforms Supported for Teaching & Studying
                  </div>
                  <div className={styles.acc__panel}>
                    Bare supports the act of teaching and learning on multiple
                    platforms like online or offline via material downloads. We
                    know things aren’t supposed to be devoured in a short time,
                    you can always access our knowledge base from any device.
                  </div>
                </div>
                <div className={styles.acc__card}>
                  <div className={styles.acc__title}>
                    Multiple Course Participation at the Same Time
                  </div>
                  <div className={styles.acc__panel}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </div>
                </div>
                <div className={styles.acc__card}>
                  <div className={styles.acc__title}>
                    Track Study Progress & Deliver Prompt Feedback
                  </div>
                  <div className={styles.acc__panel}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}