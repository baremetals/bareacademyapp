import React from 'react'
// import Image from "next/image";
import styles from "../../../styles/LandingPage/Landing.module.css";
import {
  SuccessImage,
} from "../styles";

export const SuccessSection = () => {
  return (
    <article className={styles.keySuccessSection}>
      <div className={styles.container}>
        <SuccessImage
          className={styles.row}
          // style={{ backgroundImage: "/assets/images/success-bg.svg" }}
        >
          {/* <Image
            src={"/assets/images/success-bg.svg"}
            width="1201"
            height="473"
          /> */}
          {/* aria-label="Twitter" */}
          <div className={styles.col}>
            <div className={styles.successInfo}>
              <label>MAXIMISE YOUR POTENTIAL AND POSSIBILITIES</label>
              <h2>
                Learn the secrets to Life Success, these people have got the
                key.
              </h2>
              <div className={styles.successNumbers}>
                <div className={styles.successNumber}>
                  <h3>120+</h3>
                  <p>REGISTERED ENROLLS</p>
                </div>
                <div className={styles.successNumber}>
                  <h3>120</h3>
                  <p>FINISHED SESSIONS</p>
                </div>
                <div className={styles.successNumber}>
                  <h3>100%</h3>
                  <p>SATISFACTION RATE</p>
                </div>
              </div>
            </div>
          </div>
        </SuccessImage>
      </div>
    </article>
  );
}
