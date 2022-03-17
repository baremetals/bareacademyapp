import React, {useEffect} from "react";
import Link from "next/link";
import { useAppSelector } from "app/hooks";
import { analytics, logEve } from "lib/admin";
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
import { ArticleEntity, Query } from 'generated/graphql';
import { ErrorMsg } from 'components/Input';


function ArticlesPage(props: {
  props: { data: Query; loading: boolean; error: any };
}) {

  const { user: user } = useAppSelector(isUser);

  const { data, loading, error } = props.props;
  
  if (!data || loading) {
    return <div>loading...</div>;
  }

   if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const articleData = data?.articles;
  const articles = articleData?.data as Array<ArticleEntity>;

  useEffect(() => {
    logEve(analytics, "articlespage_visited");
  });

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
            <PageHeading>Articles</PageHeading>
            <PageWrapper className="blog-wrapper">
              {articles?.map((art, id) => (
                <BlogCard key={id}>
                  <BlogCardImage
                    alt="article image"
                    src={art?.attributes?.heroImage?.data?.attributes?.url}
                  />
                  <BlogCardBody>
                    <BlogCardCategory>
                      {art?.attributes?.category?.data?.attributes?.name}
                    </BlogCardCategory>
                    <BlogCardTitle>{art?.attributes?.title}</BlogCardTitle>
                    <BlogCardDescription>
                      {art?.attributes?.description}
                    </BlogCardDescription>
                    <BlogCardBottom>
                      <Link href={`/articles/${art?.attributes?.slug}`}>
                        <ApplyButton>Read</ApplyButton>
                      </Link>
                    </BlogCardBottom>
                  </BlogCardBody>
                </BlogCard>
              ))}
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
