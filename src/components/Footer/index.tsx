import React, { ReactElement } from 'react'
import Link from 'next/link'
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from "react-icons/si";
import { LogoShape } from "../../../public/assets/icons/LogoShape";
// interface Props {
    
// }

function Footer(): ReactElement {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItem>
                <FooterLinkTitle>Bare Tutorials</FooterLinkTitle>
                {/* <Link href="">
                  <FooterLink>Terms of Service</FooterLink>
                </Link> */}
                <Link href="/courses">
                  <FooterLink>Courses</FooterLink>
                </Link>
                <Link href="/forum">
                  <FooterLink>Forum</FooterLink>
                </Link>
                <Link href="/books">
                  <FooterLink>Books</FooterLink>
                </Link>
                {/* <Link href="/messages">
                  <FooterLink>Chat</FooterLink>
                </Link> */}
              </FooterLinkItem>

              <FooterLinkItem>
                <FooterLinkTitle>About</FooterLinkTitle>
                <Link href="/terms">
                  <FooterLink>Terms of Service</FooterLink>
                </Link>
                <Link href="/privacy">
                  <FooterLink>Privacy Policy </FooterLink>
                </Link>
                <Link href="/contact-us">
                  <FooterLink>Get in Touch</FooterLink>
                </Link>
                <Link href="/support">
                  <FooterLink>Support</FooterLink>
                </Link>
              </FooterLinkItem>
            </FooterLinkWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo onClick={toggleHome}>
                <LogoShape color="#5634bf" width="45" height="45" />
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
                <SocialIconLink
                  href="https://www.tiktok.com/@bareacademy"
                  target="_blank"
                  aria-label="Tiktok"
                >
                  <SiTiktok />
                </SocialIconLink>
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
                <SocialIconLink
                  href="https://www.instagram.com/bareacademy"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
}

export default Footer
