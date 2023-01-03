import Dashboard from 'components/Dashboard'
import React from 'react'
import { PageHeading, PageWrapGroup, PageWrapper, ProfileWrapGroup } from 'styles/common.styles'
import { CourseBox } from './CourseBox';
import { CourseEntity } from 'generated/graphql';


type ITemplate = {
  id: string;
  description: string;
  courses: CourseEntity[];
};

export const CourseTemplate = ({ id, description, courses }: ITemplate) => {
  return (
    <Dashboard>
      <ProfileWrapGroup
        className={id ? "" : "container-loggedin"}
        // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
      >
        <PageWrapGroup
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderRadius: "0",
          }}
        >
          <PageHeading>Courses</PageHeading>
          <div>
            <p>{description}</p>
          </div>
          <div></div>
          <br />
          <div></div>
          <PageWrapper className={id ? "blog-wrapper" : ""}>
            {courses?.map((item) => (
              <CourseBox
                key={item.id}
                courseId={item.id as string}
                slug={item?.attributes?.slug as string}
                title={item?.attributes?.title as string}
                introduction={item?.attributes?.introduction as string}
                image={item?.attributes?.image as string}
                level={item?.attributes?.level as string}
                isFree={item?.attributes?.isFree as boolean}
                price={item?.attributes?.price as number}
                duration={item?.attributes?.duration as number}
              />
            ))}
          </PageWrapper>
        </PageWrapGroup>
      </ProfileWrapGroup>
    </Dashboard>
  );
};
