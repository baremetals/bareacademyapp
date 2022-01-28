import React from "react";
import Link from "next/link";
import { useAppSelector } from "app/hooks";
import Dashboard from 'components/Dashboard';
import {
  PostCard,
  CardTitle,
  CardImage,
  CardDescription,
  CardDuration,
  CardBottom,
  CardStartDate,
  ApplyButton,
  CardBody,
  PageHeading,
  PageWrapper,
} from "../../styles/common.styles";
import { theCourses } from "features/courses/selectors";


function CoursesPage() {
  const courses: any = useAppSelector(theCourses);
  // console.log(courses);
  return (
    <>
      <Dashboard>
        <PageHeading>Courses</PageHeading>
        <PageWrapper>
          {!courses ? (
            <div>loading...</div>
          ) : (
            courses.map((course: any, id: string) =>
              !course ? null : (
                <PostCard key={id}>
                  <Link href={`/courses/${course.slug}`}>
                    <CardImage alt="course image" src={course.image} />
                  </Link>
                  <CardBody>
                    <CardDuration> - {course.duration}</CardDuration>
                    <CardTitle>
                      <Link href={`/courses/${course.slug}`}>
                        {course.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                    <CardBottom>
                      <CardStartDate>{course.startDate}</CardStartDate>
                      <Link href={`/courses/${course.slug}`}>
                        <ApplyButton>apply</ApplyButton>
                      </Link>
                    </CardBottom>
                  </CardBody>
                </PostCard>
              )
            )
          )}
        </PageWrapper>
      </Dashboard>
    </>
  );
}

export default CoursesPage;
