import React from 'react'
import Link from "next/link";

import {
  PageContainer,
  InnerContainer,
  Inbox,
  Image,
  InboxContent,
  InboxTitle,
  InboxDes,
  Logo,
} from "./style.template";
import { LogoShape } from "../../../public/assets/icons/LogoShape";
import { InboxIcon } from "../../../public/assets/icons/InboxIcon";

type pageProps = {
  message: string;
};


const EmailTemplate = ({ message }: pageProps) => {
  return (
    <PageContainer style={{ minHeight: "100vh", backgroundColor: "#5634bf" }}>
      <InnerContainer>
        <Link href="/">
          <Logo>
            <Image style={{ margin: "auto" }}>
              <LogoShape color="#e3e1e9" width="100" height="100" />
            </Image>
          </Logo>
        </Link>
        <Inbox style={{ marginTop: "3rem" }}>
          <InboxContent>
            <InboxIcon />
            <InboxTitle>Check your inbox</InboxTitle>
            <InboxDes>
              {message}
              <Link href="/contact-us"> Get in touch</Link>
            </InboxDes>
          </InboxContent>
        </Inbox>
      </InnerContainer>
    </PageContainer>
  );
};
export default EmailTemplate