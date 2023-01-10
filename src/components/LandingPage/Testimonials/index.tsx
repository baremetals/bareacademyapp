import React from 'react'
import Image from "next/image";
import styles from "../../../styles/LandingPage/Landing.module.css";
import { TestimonialCard } from './TestimonialCard';
import { useQuery } from '@apollo/client';
import { ReviewEntity, ReviewsDocument } from 'generated/graphql';


export const Testimonials = () => {

  const { data } = useQuery(ReviewsDocument, {
    variables: {
      pagination: {
        start: 0,
        limit: 5,
      },
      sort: "createdAt:desc",
    },
  });
  const reviews: ReviewEntity[] = data?.reviews?.data || [];
  // console.log()
  return (
        <article className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.sectionInfo}>
                  <Image
                    width={48}
                    height={56}
                    src="/assets/images/quotes.svg"
                    alt="quote icon"
                  />
                  <h2 className={styles.sectionHeader}>
                    what they say about BARE
                  </h2>
                  <p>
                    More than 100 users have been helped by World Online Course.
                  </p>
                </div>
              </div>
              <div className={styles.col}>
                <TestimonialCard reviews={reviews} />
                {/* <div className={styles.testimonialContent}>
              <div
                className={`${styles.owlCarousel} ${styles.owlTheme} ${styles.owlDrag} ${styles.owlLoaded}`}
              >
                <div className={styles.owlStageOuter}>
                  <div
                    className={styles.owlStage}
                    style={{
                      transform: "translate3d(-2544px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "5936px",
                    }}
                  >
                    <div
                      className={`${styles.owlItem} ${styles.cloned}`}
                      style={{ width: "838px", marginRight: "10px" }}
                    >
                      <div className={styles.item}>
                        <span>What they say</span>
                        <h4>
                          “Studying at BARE is fun, the curriculum is complete,
                          the instructors are competent, and the assignments
                          given are also relevant to the current scope of work.”
                        </h4>
                        <div className={styles.owner}>
                          <div className={styles.ownerPic}>
                            <img alt="owner" src="assets/images/owner.png" />
                          </div>
                          <div className={styles.ownerSpe}>
                            <h4>Ricky Fernanda</h4>
                            <p>Product Designer at Tokopedia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.owlItem} ${styles.active}`}
                      style={{ width: "838px", marginRight: "10px" }}
                    >
                      <div className={styles.item}>
                        <span>What they say</span>
                        <h4>
                          “Studying at BARE is fun, the curriculum is complete,
                          the instructors are competent, and the assignments
                          given are also relevant to the current scope of work.”
                        </h4>
                        <div className={styles.owner}>
                          <div className={styles.ownerPic}>
                            <img alt="owner" src="assets/images/owner.png" />
                          </div>
                          <div className={styles.ownerSpe}>
                            <h4>Ricky Fernanda</h4>
                            <p>Product Designer at Tokopedia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.owlItem}
                      style={{ width: "838px", marginRight: "10px" }}
                    >
                      <div className={styles.item}>
                        <span>What they say</span>
                        <h4>
                          “Studying at BARE is fun, the curriculum is complete,
                          the instructors are competent, and the assignments
                          given are also relevant to the current scope of work.”
                        </h4>
                        <div className={styles.owner}>
                          <div className={styles.ownerPic}>
                            <img alt="owner" src="assets/images/owner.png" />
                          </div>
                          <div className={styles.ownerSpe}>
                            <h4>Ricky Fernanda</h4>
                            <p>Product Designer at Tokopedia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.owlItem} ${styles.cloned}`}
                      style={{ width: "838px", marginRight: "10px" }}
                    >
                      <div className={styles.item}>
                        <span>What they say</span>
                        <h4>
                          “Studying at BARE is fun, the curriculum is complete,
                          the instructors are competent, and the assignments
                          given are also relevant to the current scope of work.”
                        </h4>
                        <div className={styles.owner}>
                          <div className={styles.ownerPic}>
                            <img alt="owner" src="/assets/images/owner.png" />
                          </div>
                          <div className={styles.ownerSpe}>
                            <h4>Ricky Fernanda</h4>
                            <p>Product Designer at Tokopedia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.owlNav}>
                  <button
                    type="button"
                    role="presentation"
                    className={styles.owlPrev}
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="23.5" stroke="white"></circle>
                      <path
                        d="M29.3737 34.0401C29.7288 33.6851 29.761 33.1295 29.4706 32.7381L29.3737 32.6259L20.748 23.9997L29.3737 15.3734C29.7288 15.0184 29.761 14.4629 29.4706 14.0714L29.3737 13.9592C29.0187 13.6042 28.4632 13.5719 28.0717 13.8624L27.9595 13.9592L18.6262 23.2926C18.2712 23.6476 18.2389 24.2031 18.5294 24.5946L18.6262 24.7068L27.9595 34.0401C28.35 34.4306 28.9832 34.4306 29.3737 34.0401Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className={styles.owlNext}
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="23.5" stroke="white"></circle>
                      <path
                        d="M18.6263 34.0401C18.2712 33.6851 18.239 33.1295 18.5294 32.7381L18.6263 32.6259L27.252 23.9997L18.6263 15.3734C18.2712 15.0184 18.239 14.4629 18.5294 14.0714L18.6263 13.9592C18.9813 13.6042 19.5368 13.5719 19.9283 13.8624L20.0405 13.9592L29.3738 23.2926C29.7288 23.6476 29.7611 24.2031 29.4706 24.5946L29.3738 24.7068L20.0405 34.0401C19.65 34.4306 19.0168 34.4306 18.6263 34.0401Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className={styles.owlDots}>
                  <button role="button" className={styles.owlDot}>
                    <span></span>
                  </button>
                  <button
                    role="button"
                    className={`${styles.owlDot} ${styles.active}`}
                  >
                    <span></span>
                  </button>
                  <button role="button" className={styles.owlDot}>
                    <span></span>
                  </button>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </article>
  );
}
