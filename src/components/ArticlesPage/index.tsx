import React, {useState} from "react";
import Link from "next/link";
import { useAppSelector } from "app/hooks";
// import { analytics, logEve } from "lib/admin";
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
import NavDropDown from 'components/NavDropDown';



function ArticlesPage(props: {
  props: { data: Query; loading: boolean; error: any };
}) {

  const { user: user } = useAppSelector(isUser);

  const { data, loading, error } = props.props;
  
  if (!data || loading) {
    return <div>loading...</div>;
  }

   if (error) return <ErrorMsg>{error}</ErrorMsg>;

   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu: any = () => {
     setIsOpen(!isOpen);
   };

  const articleData = data?.articles;
  const articles = articleData?.data as Array<ArticleEntity>;

  // useEffect(() => {
  //   logEve(analytics, "articlespage_visited");
  // });

  // if (typeof window != undefined) {
  //   useEffect(() => {
  //     logEve(analytics, "articlespage_visited");
  //   });
  // }

  return (
    <>
      {!user?.id && (
        <>
          <NavBar style={{ backgroundColor: "#fff" }} toggle={toggleMenu} />
          <NavDropDown toggle={toggleMenu} isOpen={isOpen} />
        </>
      )}

      <Dashboard style={{}}>
        <ProfileWrapGroup
          className={user?.id ? "" : "container-loggedin"}
          // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageHeading>Articles</PageHeading>
            <PageWrapper className={!user?.id ? "" : "blog-wrapper"}>
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
            </PageWrapper>
          </PageWrapGroup>
        </ProfileWrapGroup>
      </Dashboard>
      {!user?.id && <Footer />}
    </>
  );
}

export default ArticlesPage;
