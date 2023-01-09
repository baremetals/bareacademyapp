import React from 'react'
import styles from "../../../styles/LandingPage/Landing.module.css";
import { LandingContainer, LandingRow } from "../styles";
import LandingButton from '../LandingButton';

export const CourseSection = () => {
  return (
    <article className={styles.coursesSection}>
      <LandingContainer>
        <LandingRow>
          <div className={styles.col}>
            <div className={styles.sectionInfo}>
              <label>Online Training Courses</label>
              <h2 className={styles.sectionHeader}>
                Transform your life through education
              </h2>
              <p>
                Learners around the world are launching new careers, advancing
                in their fields, and enriching their lives.
              </p>
              <LandingButton />
            </div>
          </div>
        </LandingRow>
      </LandingContainer>
    </article>
  );
}
