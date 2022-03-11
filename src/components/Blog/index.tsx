import React from "react";
import Dashboard from 'components/Dashboard';
import {
    PageContainer,
    InnerContainer,
    PageRightSide,
    PageHeading,
    PageWrapper,
    BlogCard,
    BlogCardTitle,
    BlogCardBody,
    BlogCardImage,
    BlogCardDescription,
    BlogCardCategory,
    BlogCardBottom,
    ApplyButton,
} from "../../styles/common.styles";
import LeftSideBar from "components/Dashboard/LeftSideBar";
import Topbar from "components/Dashboard/TopBar";
import SmallFooter from "components/Dashboard/SmallFooter";

function BlogPage() {
  return (
    <>
      <PageContainer>
        
        <LeftSideBar />
        
        <InnerContainer>
            <Topbar />
            <PageHeading>Blog</PageHeading>
            <PageWrapper className="blog-wrapper">
                <BlogCard>
                    <BlogCardImage alt="course image" src="/assets/images/blog-post.jpg" />
                    <BlogCardBody>
                        <BlogCardCategory>3 Months</BlogCardCategory>
                        <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                        <BlogCardDescription>
                            The course includes: HTML, CSS and JavaScript and React Framework.
                        </BlogCardDescription>
                        <BlogCardBottom>
                            <ApplyButton>Apply</ApplyButton>
                        </BlogCardBottom>
                    </BlogCardBody>
                </BlogCard>
                <BlogCard>
                    <BlogCardImage alt="course image" src="/assets/images/blog-post.jpg" />
                    <BlogCardBody>
                        <BlogCardCategory>3 Months</BlogCardCategory>
                        <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                        <BlogCardDescription>
                            The course includes: HTML, CSS and JavaScript and React Framework.
                        </BlogCardDescription>
                        <BlogCardBottom>
                            <ApplyButton>Apply</ApplyButton>
                        </BlogCardBottom>
                    </BlogCardBody>
                </BlogCard>
                <BlogCard>
                    <BlogCardImage alt="course image" src="/assets/images/blog-post.jpg" />
                    <BlogCardBody>
                        <BlogCardCategory>3 Months</BlogCardCategory>
                        <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                        <BlogCardDescription>
                            The course includes: HTML, CSS and JavaScript and React Framework.
                        </BlogCardDescription>
                        <BlogCardBottom>
                            <ApplyButton>Apply</ApplyButton>
                        </BlogCardBottom>
                    </BlogCardBody>
                </BlogCard>
                <BlogCard>
                    <BlogCardImage alt="course image" src="/assets/images/blog-post.jpg" />
                    <BlogCardBody>
                        <BlogCardCategory>3 Months</BlogCardCategory>
                        <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                        <BlogCardDescription>
                            The course includes: HTML, CSS and JavaScript and React Framework.
                        </BlogCardDescription>
                        <BlogCardBottom>
                            <ApplyButton>Apply</ApplyButton>
                        </BlogCardBottom>
                    </BlogCardBody>
                </BlogCard>
                <BlogCard>
                    <BlogCardImage alt="course image" src="/assets/images/blog-post.jpg" />
                    <BlogCardBody>
                        <BlogCardCategory>3 Months</BlogCardCategory>
                        <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                        <BlogCardDescription>
                            The course includes: HTML, CSS and JavaScript and React Framework.
                        </BlogCardDescription>
                        <BlogCardBottom>
                            <ApplyButton>Apply</ApplyButton>
                        </BlogCardBottom>
                    </BlogCardBody>
                </BlogCard>
            </PageWrapper>
            <SmallFooter />
        </InnerContainer>
        {/* <PageRightSide>blow my wig</PageRightSide> */}
    </PageContainer>
    </>
  );
}

export default BlogPage;
