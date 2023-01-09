import React from 'react'
import Image from "next/image";
import styles from "../../../styles/LandingPage/Landing.module.css";
import LandingButton from '../LandingButton';

export const Recommended = () => {
  return (
    <article className={styles.recommendedSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.recommendedImg}>
              <Image
                width={517}
                height={349}
                alt="recommended"
                src="/assets/images/recommendedbooks.png"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.sectionInfo}>
              <label>RECOMMENDED BOOKS</label>
              <h2 className={styles.sectionHeader}>
                An array of recommended books.
              </h2>
              <p>
                Each course will have a recommended book along with other
                reading materials and online videos to help you along the way.
              </p>
              <LandingButton />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
