import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import {
  PageContainer,
  InnerContainer,
  PageHeading,
} from "../../styles/common.styles";
import {
  ContactUsWrapper,
  ContactUsColumn,
  ContactUsDetail,
} from "./contact.styles";

import Dashboard from "components/Dashboard";
import { BackToHomeButton } from "../../styles/common.styles";
import Footer from "components/Layout/Footer";
import ContactForm from "./ContactForm";

function ContactUsPage() {
  const { user: user } = useAppSelector(isUser);
  return (
    <>
      {!user ? (
        <>
          <PageContainer>
            <InnerContainer>
              <PageHeading>Get in touch</PageHeading>
              <ContactUsWrapper>
                <ContactUsColumn>
                  <Link href="/">
                    <BackToHomeButton>Home</BackToHomeButton>
                  </Link>
                  <ContactForm />
                </ContactUsColumn>
                <ContactUsColumn>
                  <ContactUsDetail>
                    <NextImage
                      src="/assets/images/my_location.svg"
                      alt="404 image"
                      width={600}
                      height={620}
                      layout="responsive"
                    />
                  </ContactUsDetail>
                </ContactUsColumn>
              </ContactUsWrapper>
            </InnerContainer>
          </PageContainer>
          <Footer />
        </>
      ) : (
        <Dashboard>
          <PageHeading>Get in touch</PageHeading>
          <ContactUsWrapper>
            <ContactUsColumn>
              <ContactForm />
            </ContactUsColumn>
            <ContactUsColumn>
              <ContactUsDetail>
                <NextImage
                  src="/assets/images/my_location.svg"
                  alt="404 image"
                  width={600}
                  height={620}
                  layout="responsive"
                />
              </ContactUsDetail>
            </ContactUsColumn>
          </ContactUsWrapper>
        </Dashboard>
      )}
    </>
  );
}

export default ContactUsPage;
