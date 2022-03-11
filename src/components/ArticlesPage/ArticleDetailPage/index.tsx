import React, { useState } from 'react'
import { useRouter } from "next/router";
import Dashboard from "components/Dashboard";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import { SocialDropDownIcon } from "../../../../public/assets/icons/SocialDropDownIcon";
import { FaceBook } from "../../../../public/assets/icons/FaceBook";
import { Twitter } from "../../../../public/assets/icons/Twitter";
import { LinkedIn } from "../../../../public/assets/icons/LinkedIn";
import { WhatsApp } from "../../../../public/assets/icons/WhatsApp";
import { Email } from "../../../../public/assets/icons/Email";
import {
  PageHeading,
  SocialDropDown,
  SocialDropDownList,
  SocialDropDownItem,
} from "styles/common.styles";

const ArticleDetail = () => {
    const router = useRouter();
    const [socialDropdown, setSocialDropdown] = useState(false);

    const url: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
    const shareUrl: string = `${url}${router.asPath}`;
  return (
    <Dashboard>
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
        To kill a mocking Bird
      </PageHeading>
      <br />
    </Dashboard>
  );
}

export default ArticleDetail