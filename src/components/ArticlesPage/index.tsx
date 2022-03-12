import React from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import Dashboard from "components/Dashboard";
import {
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
  ProfileWrapGroup,
  PageWrapGroup,
} from "../../styles/common.styles";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

function ArticlesPage() {
  const { user: user } = useAppSelector(isUser);
  return (
    <>
      {!user && <NavBar style={{ backgroundColor: "#fff" }} />}

      <Dashboard style={{}}>
        <ProfileWrapGroup
          style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageHeading>Blog </PageHeading>
            <PageWrapper className="blog-wrapper">
              <BlogCard>
                <BlogCardImage
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody>
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                  <BlogCardDescription>
                    The course includes: HTML, CSS and JavaScript and React
                    Framework.
                  </BlogCardDescription>
                  <BlogCardBottom>
                    <ApplyButton>Apply</ApplyButton>
                  </BlogCardBottom>
                </BlogCardBody>
              </BlogCard>
              <BlogCard>
                <BlogCardImage
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody>
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                  <BlogCardDescription>
                    The course includes: HTML, CSS and JavaScript and React
                    Framework.
                  </BlogCardDescription>
                  <BlogCardBottom>
                    <ApplyButton>Apply</ApplyButton>
                  </BlogCardBottom>
                </BlogCardBody>
              </BlogCard>
              <BlogCard>
                <BlogCardImage
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody>
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                  <BlogCardDescription>
                    The course includes: HTML, CSS and JavaScript and React
                    Framework.
                  </BlogCardDescription>
                  <BlogCardBottom>
                    <ApplyButton>Apply</ApplyButton>
                  </BlogCardBottom>
                </BlogCardBody>
              </BlogCard>
              <BlogCard>
                <BlogCardImage
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody>
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                  <BlogCardDescription>
                    The course includes: HTML, CSS and JavaScript and React
                    Framework.
                  </BlogCardDescription>
                  <BlogCardBottom>
                    <ApplyButton>Apply</ApplyButton>
                  </BlogCardBottom>
                </BlogCardBody>
              </BlogCard>
              <BlogCard>
                <BlogCardImage
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody>
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle>Fullstack Javascript web Dev</BlogCardTitle>
                  <BlogCardDescription>
                    The course includes: HTML, CSS and JavaScript and React
                    Framework.
                  </BlogCardDescription>
                  <BlogCardBottom>
                    <ApplyButton>Apply</ApplyButton>
                  </BlogCardBottom>
                </BlogCardBody>
              </BlogCard>
            </PageWrapper>
          </PageWrapGroup>
        </ProfileWrapGroup>
      </Dashboard>
      {!user && <Footer />}
    </>
  );
}

export default ArticlesPage;
