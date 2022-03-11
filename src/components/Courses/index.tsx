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

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import NavBar from "components/NavBar/NavBar";
import { PageContainer } from "components/ErrorPage";
import { InnerContainer } from "components/EmailTemplate/style.template";
import Footer from "components/Footer/Footer";
dayjs.extend(relativeTime);


function CoursesPage() {
  const courses: any = useAppSelector(theCourses);
  // console.log(courses);
  return (
    <>

    <NavBar style={{backgroundColor: '#fff'}} />
      <PageContainer>
        <InnerContainer style={{paddingTop: '7rem'}}>
        <PageHeading>Courses</PageHeading>
        <PageWrapper>
          {!courses ? (
            <div>loading...</div>
          ) : (
            courses.data.map((course: any, id: string) =>
              !course ? null : (
                <PostCard key={id}>
                  <Link href={`/courses/${course.attributes.slug}`}>
                    <CardImage
                      alt="course image"
                      // src={course.attributes.image.data.attributes.url}
                    />
                  </Link>
                  <CardBody>
                    <CardDuration> {course.attributes.duration}</CardDuration>
                    <CardTitle>
                      <Link href={`/courses/${course.attributes.slug}`}>
                        {course.attributes.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {/* {course.attributes.description.slice(0, 150)} */}
                    </CardDescription>
                    <CardBottom>
                      <CardStartDate>
                        {dayjs(course.attributes.startDate).fromNow()}
                      </CardStartDate>
                      <Link href={`/courses/${course.attributes.slug}`}>
                        <ApplyButton>apply</ApplyButton>
                      </Link>
                    </CardBottom>
                  </CardBody>
                </PostCard>
              )
            )
          )}
        </PageWrapper>
        </InnerContainer>
      </PageContainer>
      <Footer />
    </>
  );
}

export default CoursesPage;
