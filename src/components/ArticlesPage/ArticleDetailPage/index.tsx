import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "app/hooks";
// import { analytics, logEvent } from "lib/admin";
import { isUser } from "features/auth/selectors";
import Dashboard from "components/Dashboard";
import {
  PageHeading,
  BlogCardImage,
  ProfileWrapGroup,
  PageWrapGroup,
  CoursesArticleWrap,
  CoursesArticleNameAndImageWrap,
  CoursesArticleImage,
  CoursesArticleName,
} from "../../../styles/common.styles";
import RightSideBar from "components/Dashboard/RightSideBar";
import { CardTitle } from "../../ArticlesPage/ArticleDetailPage/details.styles";

import { useRouter } from "next/router";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import { ArticleEntityResponseCollection } from 'generated/graphql';
import { ErrorMsg } from 'components/Input';
import SocialShare from 'components/SocialShare';

const RecentArticles = dynamic(() => import("../RecentArticles"));
import Markdown from "markdown-to-jsx";

function ArticleDetailPage(props: {
  props: {
    data: { articles: ArticleEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) {
  const { user: user } = useAppSelector(isUser);
  const router = useRouter();
  const [socialDropdown, setSocialDropdown] = useState(false);
  const toggle: any = () => {
    setSocialDropdown(!socialDropdown);
  };

  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }

  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  // const allPosts = data.data;
  const article = data?.articles?.data[0];

  // console.log(article);

  const imageurl = article?.attributes?.heroImage?.data?.attributes?.url;

  // useEffect(() => {
  //   if (typeof window != undefined) {
  //     logEvent(analytics, `${article?.attributes?.title}_visited`);
  //   }
  // });

  // if (typeof window != undefined) {
  //   useEffect(() => {
  //     logEvent(analytics, `${article?.attributes?.title}_visited`);
  //   });
  // }

  return (
    <>
      {!user?.id && <NavBar style={{ backgroundColor: "#fff" }} />}

      <Dashboard style={{}}>
        <ProfileWrapGroup className={ user?.id? '' : 'container-loggedin'}
          // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageHeading>
              <SocialShare
                pathname={router.asPath}
                toggle={toggle}
                socialDropdown={socialDropdown}
              />
              {article?.attributes?.title}
            </PageHeading>
            
            <CoursesArticleWrap style={{marginBottom: '2rem'}}>
              <CardTitle>Author</CardTitle>
              <CoursesArticleNameAndImageWrap style={{paddingTop: '0'}}>
                <CoursesArticleImage src="/D.jpg" />
                <CoursesArticleName>
                  Daniel Asante
                  <span>Developer</span>
                  </CoursesArticleName>
              </CoursesArticleNameAndImageWrap>
            </CoursesArticleWrap>

            <BlogCardImage
              style={{ borderRadius: "1rem" }}
              alt="article image"
              src={imageurl}
            />

            <CardTitle style={{ margin: "1rem 0" }}>
              {article?.attributes?.title}
            </CardTitle>
            <div style={{ marginBottom: "1.5rem" }}>
              <Markdown>{article?.attributes?.body as string}</Markdown>
            </div>
            
          </PageWrapGroup>
          <RightSideBar>
            <RecentArticles />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
      {!user?.id && <Footer />}
    </>
  );
}

export default ArticleDetailPage;
