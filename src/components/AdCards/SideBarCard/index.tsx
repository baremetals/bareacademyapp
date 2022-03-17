
import React from 'react'
import { BlogCard, BlogCardBody, BlogCardCategory, BlogCardImage, BlogCardTitle } from 'styles/common.styles';

type cardProps = {
  title: string;
  image: string;
  category?: string;
  duration?: string;
  onClick: any;
  style: any;
};


const SideBarCard = ({title, image, category, duration, ...props }: cardProps) => {
  return (
    <BlogCard className="horizontal" {...props}>
      
        <BlogCardImage
          className="horizontal-img"
          alt="course image"
          src={image ? image : "/assets/images/blog-post.jpg"}
        />
      <BlogCardBody className="horizontal-body">
        <BlogCardCategory>{category || duration}</BlogCardCategory>
          <BlogCardTitle style={{ fontSize: "1rem" }}>{title}</BlogCardTitle>
      </BlogCardBody>
    </BlogCard>
  );
}

export default SideBarCard