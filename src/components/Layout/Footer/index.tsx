import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
import styles from "styles/LandingPage/Landing.module.css";
import {
  SocialIconLink,
  FooterItem,
  FooterInput,
} from "./styles";


function Footer(): ReactElement {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <footer style={{ background: "#101522", padding: "80px 0 68px" }}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* <!-- logo --> */}
          <div className={styles.col}>
            <div className="footer-logo">
              <SocialIconLink href="#" onClick={toggleHome}>
                <Image
                  width={50}
                  height={50}
                  alt="bare academy footer logo"
                  src="/assets/images/footer-logo.png"
                />
              </SocialIconLink>
            </div>
            <div className={styles.socialMedia}>
              <div>
                <SocialIconLink
                  href="https://twitter.com/bareacademy_"
                  aria-label="Twitter"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/assets/images/mdi_twitter.svg"
                    alt="Twitter icon"
                  />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/baremetals.academy"
                  aria-label="FaceBook"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/assets/images/ic_round-facebook.svg"
                    alt="Facebook icon"
                  />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.tiktok.com/@bareacademy"
                  aria-label="TikTok"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/assets/images/ic_round-tiktok.svg"
                    alt="Tiktok icon"
                  />
                </SocialIconLink>
              </div>
              <div>
                <SocialIconLink
                  href="https://www.youtube.com/channel/UCTmmiAeYJmHKo5oACmPGh-g/featured"
                  aria-label="YouTube"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/assets/images/ph_youtube-logo-fill.svg"
                    alt="YouTube icon"
                  />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/company/bare-metals-academy"
                  aria-label="LinkedIn"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/assets/images/mdi_linkedin.svg"
                    alt="LinkedIn icon"
                  />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/bareacademy"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/assets/images/ph_instagram-logo-fill.svg"
                    alt="Instgram icon"
                  />
                </SocialIconLink>
              </div>
            </div>
          </div>
          {/* <!-- footer link --> */}
          <div className={styles.col}>
            <div className={styles.footerLinkBlock}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <h2>Bare Tutorials</h2>
                  <ul className={styles.footerLink}>
                    <FooterItem>
                      <Link href="/course" aria-label="link to courses">
                        Courses
                      </Link>
                    </FooterItem>
                    <FooterItem>
                      <Link href="/articles" aria-label="link to articles">
                        Articles
                      </Link>
                    </FooterItem>
                    <FooterItem>
                      <Link href="/forum" aria-label="link to forum page">
                        Forum
                      </Link>
                    </FooterItem>
                    <FooterItem>
                      <Link href="/books" aria-label="link to books page">
                        Books
                      </Link>
                    </FooterItem>
                  </ul>
                </div>
                <div className={styles.col}>
                  <h2>About</h2>
                  <ul className={styles.footerLink}>
                    <FooterItem>
                      <Link href="/terms" aria-label="link to terms page">
                        Terms of Service
                      </Link>
                    </FooterItem>
                    <FooterItem>
                      <Link
                        href="/privacy"
                        aria-label="link to privacy policy page"
                      >
                        Privacy Policy
                      </Link>
                    </FooterItem>
                    <FooterItem>
                      <Link
                        href="/contact-us"
                        aria-label="link to contact us page"
                      >
                        Get in Touch
                      </Link>
                    </FooterItem>
                    <FooterItem>
                      <Link href="/support" aria-label="link to support page">
                        Support
                      </Link>
                    </FooterItem>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Don’t miss out --> */}
          <div className={styles.col}>
            <div className={styles.dontMissOut}>
              <h2>Don’t miss out</h2>
              <div className="">
                <p>subscribe for the newsletter.</p>
                <div className={styles.dontMissOutInput}>
                  <FooterInput type="text" placeholder="Your name" />
                  <FooterInput type="text" placeholder="Your email" />
                </div>
                <div className={styles.sendButton}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnPrimery}`}
                  >
                    Send Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          Baremetals Limited {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
