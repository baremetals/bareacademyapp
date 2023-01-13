import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { CourseEntity, RelatedCoursesDocument } from "generated/graphql";
import styles from "styles/LandingPage/Landing.module.css";
import durationToString from 'helpers/durationToString';
import ReviewSection from '../CourseBox/Review';

type TRelatedCourses = {
  categories: string[];
};
const RelatedCourses = ({ categories }: TRelatedCourses) => {
  const { data } = useQuery(RelatedCoursesDocument, {
    variables: {
      filters: {
        categories: {
          id: {
            in: categories,
          },
        },
      },
      pagination: {
        start: 0,
        limit: 3,
      },
      sort: "updatedAt:desc",
    },
  });
  const courses: CourseEntity[] = data?.courses?.data;
  // console.log(categories);
  return (
    <article className={styles.relatedCoursesSection}>
      <div className={styles.container}>
        <h2>Related Courses</h2>
        <div className={styles.relatedCourses}>
          <div
            className={`${styles.owlCarouselRelate} ${styles.owlCarousel} ${styles.owlTheme} ${styles.owlDrag} ${styles.owlLoaded}`}
          >
            <div className={styles.owlStageOuter}>
              <div
                className={styles.owlStage}
                style={{ width: "4620px", marginRight: "30px" }}
              >
                {courses?.map((c) => (
                  <div
                    className={`${styles.owlItem} ${styles.active}`}
                    style={{ width: "390px", marginRight: "30px" }}
                    key={c?.id}
                  >
                    <div className={styles.item}>
                      <div className={styles.coursesItems}>
                        <div className={styles.coursesImg}>
                          <Image
                            width={430}
                            height={283}
                            alt="courses"
                            className={styles.coursesPic}
                            src={c?.attributes?.image as string}
                            // style={{ position: "relative" }}
                          />
                          {c?.attributes?.isFree && (
                            <label
                              className={`${styles.priceTag} ${styles.price}`}
                            >
                              FREE
                            </label>
                          )}
                          {c?.attributes?.hasPrivateVersion && (
                            <label
                              className={`${styles.priceTag} ${styles.price}`}
                            >
                              PRIVATE
                            </label>
                          )}
                        </div>

                        <div className={styles.coursesInfo}>
                          <label>£ {c?.attributes?.price as number}</label>
                          <h3>{c?.attributes?.title as string}</h3>
                          <ReviewSection
                            reviews={c?.attributes?.reviews?.data}
                          />
                          <div className={styles.coursesNumber}>
                            <div className={styles.col}>
                              <Image
                                width={33}
                                height={22}
                                alt="time"
                                src="/assets/images/uiw_time-o.svg"
                              />{" "}
                              {durationToString(
                                c?.attributes?.duration as number
                              )}
                            </div>
                            <div className={styles.col}>
                              <Image
                                width={25}
                                height={25}
                                alt="time"
                                src="/assets/images/bi_person.svg"
                              />{" "}
                              {c?.attributes?.totalStudents as number} Students
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className={styles.owlNav}>
              <button
                type="button"
                role="presentation"
                className={styles.owlPrev}
              >
                <span aria-label="Previous">‹</span>
              </button>
              <button
                type="button"
                role="presentation"
                className={styles.owlNext}
              >
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className={styles.owlDots}>
              <button
                role="button"
                className={`${styles.owlDot}  ${styles.active}`}
              >
                <span></span>
              </button>
              <button role="button" className={styles.owlDots}>
                <span></span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default RelatedCourses;
