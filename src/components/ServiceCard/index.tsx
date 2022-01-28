import React from 'react'
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

const ServiceCard = ({id, ...props}:any) => {
  return (
    <ServiceSection id={id} {...props}>
      <ServiceContainer>
        <ServiceH1>Explore featured Courses</ServiceH1>
        <ServiceWrapper>
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
        </ServiceWrapper>
      </ServiceContainer>
    </ServiceSection>
  );
};

export default ServiceCard
