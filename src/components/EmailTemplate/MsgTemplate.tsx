import React from "react";
import Link from "next/link";

import {
  PageContainer,
  InnerContainer,
  Inbox,
//   Image,
  InboxContent,
  InboxTitle,
  InboxDes,
//   Logo,
} from "./style.template";
// import { LogoShape } from "../../../public/assets/icons/LogoShape";
// import { Email } from "../../../public/assets/icons/Email";
// import { AdminIcon } from "../../../public/assets/icons/AdminIcon";
import { Logo as LG } from "../../../public/assets/icons/Logo";

type pageProps = {
  data: {
    message: string;
    route: string;
    note: string;
  };
};

const MessageTemplate = ({ data: { message, route, note} }: pageProps) => {
  return (
    <PageContainer style={{ minHeight: "100vh", backgroundColor: "#5634bf" }}>
      <InnerContainer>
        {/* <Link href="/">
          <Logo>
            <Image style={{ margin: "auto" }}>
              <LogoShape color="#e3e1e9" width="100" height="100" />
            </Image>
          </Logo>
        </Link> */}
        <Inbox style={{ marginTop: "3rem" }}>
          <InboxContent>
            <LG color="#ffffff" width="100" height="100" />
            <InboxTitle>{note}</InboxTitle>
            <InboxDes>
              {message}
              {/* <Link href={route}> Get in touch</Link> */}
            </InboxDes>
            <br />
            <Link href={route}> Home</Link>
          </InboxContent>
        </Inbox>
      </InnerContainer>
    </PageContainer>
  );
};
export default MessageTemplate;
