import React from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import { CourseTemplate } from './Template';
import { CourseEntity } from 'generated/graphql';


type TCoursesPage = {
  desc: string;
  courses: CourseEntity[];
};

function CoursesPage({ desc, courses }: TCoursesPage) {
  const { user: user } = useAppSelector(isUser);

  return (
    <CourseTemplate
      id={user?.id as string}
      description={desc}
      courses={courses}
    />
  );
}

export default CoursesPage;
