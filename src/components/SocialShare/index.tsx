import React from 'react'

import { SocialDropDownIcon } from "../../../public/assets/icons/SocialDropDownIcon";
import { FaceBook } from "../../../public/assets/icons/FaceBook";
import { Twitter } from "../../../public/assets/icons/Twitter";
import { LinkedIn } from "../../../public/assets/icons/LinkedIn";
import { WhatsApp } from "../../../public/assets/icons/WhatsApp";
import { Email } from "../../../public/assets/icons/Email";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { SocialDropDown, SocialDropDownItem, SocialDropDownList } from 'styles/common.styles';

type shareProps = {
  pathname: string;
  toggle: any;
  socialDropdown: boolean;
};

const SocialShare = ({ pathname, toggle, socialDropdown }: shareProps) => {
  const url: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl: string = `${url}${pathname}`;
  return (
    <SocialDropDown>
      <span onClick={toggle}>
        <SocialDropDownIcon />
        Share
      </span>
      <SocialDropDownList
        className={`${socialDropdown ? "opened" : ""}`}
        onClick={toggle}
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
  );
};

export default SocialShare