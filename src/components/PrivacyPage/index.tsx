import React from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import {
  PageContainer,
  InnerContainer,
  PageHeading,
} from "../../styles/common.styles";
import Dashboard from "components/Dashboard";
import PrivacyContent from "./PrivacyContent";
import Footer from "components/Layout/Footer";

function PrivacyPage() {
  const { user: user } = useAppSelector(isUser);
  return (
    <>
      {!user ? (
        <>
          <PageContainer>
            <InnerContainer>
              <PageHeading>Privacy Policy and Cookie Policy</PageHeading>
              <PrivacyContent />
            </InnerContainer>
          </PageContainer>
          <Footer />
        </>
      ) : (
        <Dashboard>
          <PageHeading>Privacy Policy and Cookie Policy</PageHeading>
          <PrivacyContent />
        </Dashboard>
      )}
    </>
  );
}

export default PrivacyPage;
