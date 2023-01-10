import React, { useState } from 'react'
import Image from "next/image";
import { LeftArrow } from "../../../../public/assets/icons/LeftArrow"
import { RightArrow } from "../../../../public/assets/icons/RightArrow";
import styles from "../../../styles/LandingPage/Landing.module.css";
import { ReviewEntity } from 'generated/graphql';
import Link from 'next/link';

type TCard = {
  reviews: ReviewEntity[]
}
export const TestimonialCard = ({reviews = []}: TCard) => {
  const [current, setCurrent] = useState<number>(0)
  const length: number = reviews.length

  // console.log(reviews);
  const nextSlide = () => {
    setCurrent(current === length - 1? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0? length - 1 : current - 1) 
  }
  return (
    <div className={styles.testimonialContent}>
      <div
        className={`${styles.owlCarousel} ${styles.owlTheme} ${styles.owlDrag} ${styles.owlLoaded}`}
      >
        <div className={styles.owlStageOuter}>
          <div className={styles.owlStage}>
            <div
              className={`${styles.owlItem} ${styles.active}`}
              style={{ width: "838px", marginRight: "10px" }}
            >
              {reviews.map((rev, i) => {
                return (
                  <div
                    className={`${styles.item} ${
                      i === current
                        ? `${styles.slide} ${styles.active}`
                        : `${styles.slide}`
                    }`}
                    key={i}
                  >
                    {i === current && (
                      <>
                        <span>What they say</span>
                        <h4>{rev?.attributes?.message}</h4>
                        <div className={styles.owner}>
                          <div className={styles.ownerPic}>
                            <Image
                              width={72}
                              height={76}
                              alt="owner"
                              src={
                                rev?.attributes?.user?.data?.attributes
                                  ?.img as string
                              }
                            />
                          </div>
                          <div className={styles.ownerSpe}>
                            <h4>
                              {
                                rev?.attributes?.user?.data?.attributes
                                  ?.fullName
                              }
                            </h4>
                            <Link
                              href={`/courses/${
                                rev?.attributes?.course?.data?.attributes
                                  ?.slug as string
                              }`}
                            >
                              <p style={{ cursor: "pointer" }}>
                                {
                                  rev?.attributes?.course?.data?.attributes
                                    ?.title as string
                                }
                              </p>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.owlNav}>
          <button
            aria-label="previous"
            type="button"
            role="presentation"
            className={styles.owlPrev}
            onClick={prevSlide}
          >
            <LeftArrow />
          </button>
          <button
            aria-label="next"
            type="button"
            role="presentation"
            className={styles.owlNext}
            onClick={nextSlide}
          >
            <RightArrow />
          </button>
        </div>
        <div className={styles.owlDots}>
          {reviews.map((rev, i) => {
            return (
              <button
                aria-label="card status decoration"
                role="button"
                className={`${styles.owlDot} ${
                  i === current && `${styles.active}`
                }`}
                key={i}
              >
                <span></span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
