import durationToString from 'helpers/durationToString';
import Link from 'next/link'
import React from 'react'
import { ApplyButton, BlogCard, BlogCardBody, BlogCardImage, BlogCardTitle, CardBottom, CardDescription, CardDuration, CardPrice, CardStartDate } from 'styles/common.styles'

type ICourseBox = {
  courseId: string;
  slug: string;
  title: string;
  introduction: string;
  image: string;
  level: string;
  isFree: boolean;
  price: number;
  duration: number;
};

export const CourseBox = ({
  courseId,
  slug,
  image,
  level,
  isFree,
  price,
  title,
  duration,
  introduction,
}: ICourseBox) => {
  return (
    <BlogCard key={courseId}>
      <Link href={`/courses/${slug}`}>
        <BlogCardImage alt="course image" src={image} />
      </Link>
      <BlogCardBody>
        <CardBottom>
          <CardDuration>{level}</CardDuration>
          <CardPrice> {isFree ? "Free" : `£${price}`}</CardPrice>
        </CardBottom>

        <BlogCardTitle>
          <Link href={`/courses/${slug}`}>{title}</Link>
        </BlogCardTitle>
        <CardDescription>{introduction?.slice(0, 80)}...</CardDescription>
        <CardBottom>
          <CardStartDate>
            {durationToString(duration)}
          </CardStartDate>
          <Link href={`/courses/${slug}`}>
            <ApplyButton>Buy course</ApplyButton>
          </Link>
        </CardBottom>
      </BlogCardBody>
    </BlogCard>
  );
};
