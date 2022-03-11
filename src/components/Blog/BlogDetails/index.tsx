import React, { useState } from "react";
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
    ProfileWrapGroup,
    PageWrapGroup,
    SocialDropDown,
    SocialDropDownList,
    SocialDropDownItem,
} from "../../../styles/common.styles";
import RightSideBar from "components/Dashboard/RightSideBar";
import { RightBarInfo, RightBarTitle } from "components/AdCards/rightside.styles";
import { CardText, CardTitle } from "./details.styles";

import { SocialDropDownIcon }  from "../../../../public/assets/icons/SocialDropDownIcon"
import { FaceBook }  from "../../../../public/assets/icons/FaceBook"
import { Twitter }  from "../../../../public/assets/icons/Twitter"
import { LinkedIn }  from "../../../../public/assets/icons/LinkedIn"
import { WhatsApp }  from "../../../../public/assets/icons/WhatsApp"
import { TikTok }  from "../../../../public/assets/icons/TikTok"
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { Email } from "../../../../public/assets/icons/Email";
import { useRouter } from "next/router";

function BlogDetails() {

    const [socialDropdown, setSocialDropdown] = useState(false)
    const router = useRouter();
    const url: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
    const shareUrl: string = `${url}${router.asPath}`;
    return (
        <>
        <Dashboard>
            <ProfileWrapGroup>
                <PageWrapGroup style={{backgroundColor: 'transparent', boxShadow: 'none', borderRadius: '0' }}>
                   
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
                        Blog Detail
                    </PageHeading>
                    <CardTitle style={{marginBottom: '1rem'}}>Blog Description</CardTitle>
                    
                    <p style={{marginBottom: '1.5rem'}}>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p style={{marginBottom: '1.5rem'}}>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                </PageWrapGroup>
                <RightSideBar>
                    <RightBarInfo style={{backgroundColor: 'transparent', boxShadow: 'none', borderRadius: '0', padding: '0' }}>
                        <RightBarTitle style={{marginBottom: '1.5rem'}}>Recent posts</RightBarTitle>
                        <BlogCard className="horizontal">
                            <BlogCardImage className="horizontal-img" alt="course image" src="/assets/images/blog-post.jpg" />
                            <BlogCardBody className="horizontal-body">
                                <BlogCardCategory>3 Months</BlogCardCategory>
                                <BlogCardTitle style={{fontSize: '1rem'}}>Fullstack Javascript web Dev</BlogCardTitle>
                            </BlogCardBody>
                        </BlogCard>
                        <BlogCard className="horizontal">
                            <BlogCardImage className="horizontal-img" alt="course image" src="/assets/images/blog-post.jpg" />
                            <BlogCardBody className="horizontal-body">
                                <BlogCardCategory>3 Months</BlogCardCategory>
                                <BlogCardTitle style={{fontSize: '1rem'}}>Fullstack Javascript web Dev</BlogCardTitle>
                            </BlogCardBody>
                        </BlogCard>
                    </RightBarInfo>
                </RightSideBar>
            </ProfileWrapGroup>
        </Dashboard>
    </>
  );
}

export default BlogDetails;

