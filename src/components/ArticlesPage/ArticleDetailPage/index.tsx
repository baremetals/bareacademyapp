import React, { useState } from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import Dashboard from "components/Dashboard";
import {
  PageHeading,
  BlogCard,
  BlogCardTitle,
  BlogCardBody,
  BlogCardImage,
  BlogCardCategory,
  ProfileWrapGroup,
  PageWrapGroup,
  SocialDropDown,
  SocialDropDownList,
  SocialDropDownItem,
} from "../../../styles/common.styles";
import RightSideBar from "components/Dashboard/RightSideBar";
import {
  RightBarInfo,
  RightBarTitle,
} from "components/AdCards/rightside.styles";
import { CardTitle } from "../../ArticlesPage/ArticleDetailPage/details.styles";

import { SocialDropDownIcon } from "../../../../public/assets/icons/SocialDropDownIcon";
import { FaceBook } from "../../../../public/assets/icons/FaceBook";
import { Twitter } from "../../../../public/assets/icons/Twitter";
import { LinkedIn } from "../../../../public/assets/icons/LinkedIn";
import { WhatsApp } from "../../../../public/assets/icons/WhatsApp";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Email } from "../../../../public/assets/icons/Email";
import { useRouter } from "next/router";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

function ArticleDetailPage() {
  const { user: user } = useAppSelector(isUser);
  const [socialDropdown, setSocialDropdown] = useState(false);
  const router = useRouter();
  const url: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl: string = `${url}${router.asPath}`;
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
            <PageHeading>
              <SocialDropDown>
                <span onClick={() => setSocialDropdown(!socialDropdown)}>
                  <SocialDropDownIcon />
                  Share
                </span>
                <SocialDropDownList
                  className={`${socialDropdown ? "opened" : ""}`}
                  onClick={() => setSocialDropdown(!socialDropdown)}
                >
                  <SocialDropDownItem>
                    <FacebookShareButton url={shareUrl}>
                      <FaceBook />
                      Facebook
                    </FacebookShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <TwitterShareButton url={shareUrl}>
                      <Twitter />
                      Twitter
                    </TwitterShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <LinkedinShareButton url={shareUrl}>
                      <LinkedIn />
                      LinkedIn
                    </LinkedinShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsApp />
                      Whatsapp
                    </WhatsappShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <EmailShareButton url={shareUrl}>
                      <Email />
                      Email
                    </EmailShareButton>
                  </SocialDropDownItem>
                </SocialDropDownList>
              </SocialDropDown>
              Fullstack Javascript web Dev
            </PageHeading>

            <BlogCardImage
              style={{ borderRadius: "1rem" }}
              alt="course image"
              src="/assets/images/blog-post.jpg"
            />

            <CardTitle style={{ margin: "1rem 0" }}>Blog Description</CardTitle>

            <p style={{ marginBottom: "1.5rem" }}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </PageWrapGroup>
          <RightSideBar>
            <RightBarInfo
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                borderRadius: "0",
                padding: "0 0 0 1rem",
              }}
            >
              <RightBarTitle style={{ marginBottom: "1.5rem" }}>
                Recent posts
              </RightBarTitle>
              <BlogCard className="horizontal">
                <BlogCardImage
                  className="horizontal-img"
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody className="horizontal-body">
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle style={{ fontSize: "1rem" }}>
                    Fullstack Javascript web Dev
                  </BlogCardTitle>
                </BlogCardBody>
              </BlogCard>
              <BlogCard className="horizontal">
                <BlogCardImage
                  className="horizontal-img"
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody className="horizontal-body">
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle style={{ fontSize: "1rem" }}>
                    Fullstack Javascript web Dev
                  </BlogCardTitle>
                </BlogCardBody>
              </BlogCard>
            </RightBarInfo>
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
      {!user && <Footer />}
    </>
  );
}

export default ArticleDetailPage;
