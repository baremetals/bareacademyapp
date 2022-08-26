import React from 'react'
import {
  FaFacebook,
  // FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  SmallFooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./smallfooter.styles";
import { Logo } from "../../../../public/assets/images/Logo";
import { animateScroll as scroll } from "react-scroll";

const SmallFooter
 = () => {

    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <SmallFooterContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>
              <Logo color="white" width="45" height="45" />
            </SocialLogo>
            <WebsiteRights>
              Baremetals Limited {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://twitter.com/bareacademy_"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com/baremetals.academy"
                target="_blank"
                aria-label="FaceBook"
              >
                <FaFacebook />
              </SocialIconLink>
              {/* <SocialIconLink href="" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink> */}
              <SocialIconLink
                href="https://www.youtube.com/channel/UCTmmiAeYJmHKo5oACmPGh-g/featured"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/bare-metals-academy"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </SmallFooterContainer>
    );
}

export default SmallFooter

