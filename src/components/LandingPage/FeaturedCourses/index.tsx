import React from 'react'
import styles from "styles/LandingPage/Landing.module.css";
import {
  ReviewEntity,
  CoursesDocument,
} from "generated/graphql";
import { CourseBox } from 'components/Courses/CourseBox';
import { useQuery } from '@apollo/client';


export const FeaturedCourses = () => {

  // const { data, loading, error } = useCoursesQuery();
  const { data, loading, error } = useQuery(CoursesDocument, {
    variables: { 
      pagination: {
        start: 0,
        limit: 3,
      },
      sort: "createdAt:desc",
    },
  });

  if (!data || loading || error) {
    return <div></div>;
  }

  const courses = data?.courses?.data || [];
  
  // console.log(courses)
  return (
    <>
      {courses.length > 0 ? (
        <article className={styles.featuredCoursesSection}>
          <div className={styles.container}>
            <div className={styles.featuredcoursesHeader}>
              <label>CHOOSE WHERE YOU WOULD LIKE TO BEGIN</label>
              <h2>Explore featured courses</h2>
            </div>
            <div className={styles.coursesItemsBlock}>
              <div className={styles.row}>
                {courses
                  ?.slice(0, 3)
                  .map(
                    (item: {
                      id: string;
                      attributes: {
                        slug: string;
                        title: string;
                        image: string;
                        level: string;
                        isFree: boolean;
                        price: number;
                        duration: number;
                        totalStudents: number;
                        reviews: { data: ReviewEntity[] };
                      };
                    }) => (
                      <CourseBox
                        key={item.id}
                        courseId={item.id as string}
                        slug={item?.attributes?.slug as string}
                        title={item?.attributes?.title as string}
                        // introduction={item?.attributes?.introduction as string}
                        image={item?.attributes?.image as string}
                        level={item?.attributes?.level as string}
                        isFree={item?.attributes?.isFree as boolean}
                        price={item?.attributes?.price as number}
                        duration={item?.attributes?.duration as number}
                        totalStudents={
                          item?.attributes?.totalStudents as number
                        }
                        reviews={
                          item?.attributes?.reviews?.data as ReviewEntity[]
                        }
                        page={`courses/${item?.attributes?.slug as string}`}
                      />
                    )
                  )}
              </div>
            </div>
          </div>
        </article>
      ) : null}
    </>
  );
}
