import React from 'react'
import { HeroSection } from './HeroSection';
import { CourseSection } from './CourseSection';
import { StudentSection } from './StudentSection';
import { FeaturedCourses } from './FeaturedCourses';
import { SuccessSection } from './SuccessSection';
import { Recommended } from './Recommended';
import { Testimonials } from './Testimonials';
// import { CareerSection } from './CareerSection';
import { QuestionSection } from './QuestionSection';

export const LandingPage = () => {
  return (
  <main>
    <HeroSection />
    <CourseSection />
    <StudentSection />
    <FeaturedCourses />
    <SuccessSection />
    <Recommended />
    <Testimonials />
    {/* <CareerSection /> */}
    <QuestionSection />
  </main>
  );
}
