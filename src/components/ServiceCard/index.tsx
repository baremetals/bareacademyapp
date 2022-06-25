import React from "react";
import { useCoursesQuery } from "generated/graphql";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import {
  ServiceSection,
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServicesColumn,
  ServicesCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./styles";
import Link from 'next/link';
// type courseProps = {
//   id: string;
//   attributes: {
//     title: string;
//     startDate: Date;
//     image: { data: { attributes: { url: string } } };
//   };
// };

const ServiceCard = ({ linkIid, ...props }: any) => {
  const { data, loading, error } = useCoursesQuery();
  // console.log(data);

  if (!data || loading || error) {
    return <div>loading...</div>;
  }

  const courses = data?.courses?.data;
  return (
    <ServiceSection id={linkIid} {...props}>
      <ServiceContainer>
        <ServiceH1>Explore featured Courses</ServiceH1>
        <ServiceWrapper>
          {courses &&
            courses.slice(0, 3)?.map((c, id) => (
              <ServicesColumn key={id}>
                <ServicesCard>
                  <Link href={`/courses/${c?.attributes?.slug}`}>
                    <ServiceIcon
                      src={c?.attributes?.image?.data?.attributes?.url}
                    />
                  </Link>

                  <ServiceH2>{c?.attributes?.title}</ServiceH2>
                  <ServiceP>
                    {c?.attributes?.duration} |{" "}
                    {c?.attributes?.isFree
                      ? "Free"
                      : `£${c?.attributes?.price}`}
                  </ServiceP>
                </ServicesCard>
              </ServicesColumn>
            ))}
          {!data ||
            loading ||
            (error && (
              <>
                <ServicesColumn>
                  <ServicesCard>
                    <ServiceIcon src="/assets/images/learning3.svg" />
                    <ServiceH2>Getting started with JavaScript</ServiceH2>
                    <ServiceP>ES6 and Beyond</ServiceP>
                  </ServicesCard>
                </ServicesColumn>

                <ServicesColumn>
                  <ServicesCard>
                    <ServiceIcon src="/assets/images/learning3.svg" />
                    <ServiceH2>Django & Python for beginners</ServiceH2>
                    <ServiceP>Django Rest Framework</ServiceP>
                  </ServicesCard>
                </ServicesColumn>

                <ServicesColumn>
                  <ServicesCard>
                    <ServiceIcon src="/assets/images/learning3.svg" />
                    <ServiceH2>Deep dive to understanding HTML & CSS</ServiceH2>
                    <ServiceP>HTML & CSS Fundamentals</ServiceP>
                  </ServicesCard>
                </ServicesColumn>
              </>
            ))}
        </ServiceWrapper>
      </ServiceContainer>
    </ServiceSection>
  );
};

export default ServiceCard;
