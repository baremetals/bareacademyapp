import React from 'react'
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import {
    PageContainer,
    InnerContainer,
    PageHeading,
    ContentArea,
} from "../../styles/common.styles";
import Dashboard from "components/Dashboard";
import TermsContent from './TermsContent';



function TermsAndConditionsPage() {
    const { user: user } = useAppSelector(isUser);
    return (
      <>
        {!user ? (
          <PageContainer>
            <InnerContainer>
              <PageHeading>End user license agreement</PageHeading>
                <TermsContent />
            </InnerContainer>
          </PageContainer>
        ) : (
          <Dashboard>
                <PageHeading>End user license agreement</PageHeading>
                <ContentArea>
                  <TermsContent />
                </ContentArea>
          </Dashboard>
        )}
      </>
    );
}

export default TermsAndConditionsPage
