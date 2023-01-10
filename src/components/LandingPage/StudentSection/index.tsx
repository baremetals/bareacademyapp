import React from 'react'
import Image from "next/image"
import styles from "../../../styles/LandingPage/Landing.module.css";

export const StudentSection = () => {
  return (
    <article className={styles.studentSection}>
      <div className={styles.bgBlock}>
        <Image
          width={1107}
          height={450}
          alt="box"
          src="/assets/images/box.svg"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.studentBlock}>
          <div className={`${styles.studentCard} ${styles.firstCard}`}>
            <div className={styles.studentPic}>
              <Image
                width={99}
                height={55}
                alt="student image"
                src="/assets/images/PhilippThomas.jpg"
              />
            </div>
            <div className={styles.studentInfo}>
              <label>Philipp Thomas</label>
              <span>Aberdeen</span>
              <div className={styles.plusIcon}>
                <Image
                  width={15}
                  height={15}
                  src="/assets/images/plus-icon.svg"
                  alt="plus sign image"
                  // style={{ marginLeft: "3px" }}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.totalStudentsCard} ${styles.secondCard}`}>
            <div className={styles.studentPic}>
              <Image
                width={119}
                height={60}
                alt="student image"
                src="/assets/images/45KStudents.png"
              />
            </div>
            <div className={styles.studentInfo}>
              <label>100+ Students</label>
              <span>
                5.00{" "}
                <Image
                  width={68}
                  height={11.5}
                  src="/assets/images/yellow-rating.svg"
                  alt="rating star image"
                />
              </span>
            </div>
          </div>
          <div className={`${styles.studentCard} ${styles.thirdCard} `}>
            <div className={styles.studentPic}>
              <Image
                width={99}
                height={55}
                alt="student image"
                src="/assets/images/JoanEloise.png"
              />
            </div>
            <div className={styles.studentInfo}>
              <label>Joan Eloise</label>
              <span>Kent</span>
              <div className={styles.plusIcon}>
                <Image
                  width={15}
                  height={15}
                  src="/assets/images/plus-icon.svg"
                  alt="plus sign image"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.studentCard} ${styles.fourthCard} `}>
            <div className={styles.studentPic}>
              <Image
                width={99}
                height={55}
                alt="student image"
                src="/assets/images/women.png"
              />
            </div>
            <div className={styles.studentInfo}>
              <label>Sarah Baker</label>
              <span>London</span>
              <div className={styles.plusIcon}>
                <Image
                  width={15}
                  height={15}
                  src="/assets/images/plus-icon.svg"
                  alt='plus sign icon'
                />
              </div>
            </div>
          </div>
          <div className={`${styles.studentCard} ${styles.fiveCard} `}>
            <div className={styles.studentPic}>
              <Image
                width={99}
                height={55}
                alt="student image"
                src="/assets/images/JennaMissy.png"
              />
            </div>
            <div className={styles.studentInfo}>
              <label>Jenna Missy</label>
              <span>London</span>
              <div className={styles.plusIcon}>
                <Image
                  width={15}
                  height={15}
                  src="/assets/images/plus-icon.svg"
                  alt="plus sign icon"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.studentCard} ${styles.sixCard} `}>
            <div className={styles.studentPic}>
              <Image
                width={99}
                height={55}
                alt="studen image"
                src="/assets/images/baldric-eli.png"
              />
            </div>
            <div className={styles.studentInfo}>
              <label>Baldric Eli</label>
              <span>UK</span>
              <div className={styles.plusIcon}>
                <Image
                  width={15}
                  height={15}
                  src="/assets/images/plus-icon.svg"
                  alt="plus sign icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
