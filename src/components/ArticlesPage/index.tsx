import React from 'react'
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";
import {
  CardBody,
  CardImage,
  CardTitle,
  PageWrapGroup,
  PageHeading,
  CardDescription,
  ProfileWrapGroup,
  PostCard,
  CardBottom,
  ApplyButton,
} from "styles/common.styles";
import Dashboard from 'components/Dashboard';
import RightSideBar from "components/Dashboard/RightSideBar";
import AdCardOne from "components/AdCards/AdCardOne";
import styled from 'styled-components';


function ArticleDetailsPage() {
  // const { user: user } = useAppSelector(isUser);
  return (
    <Dashboard>
      <PageHeading>Articles</PageHeading>
      <ProfileWrapGroup>
        <PageWrapGroup>
          <PostCard>
            <CardImage />
            <CardBody>
              <CardTitle>To kill a mocking Bird</CardTitle>
              <CardDescription></CardDescription>
              <CardBottom>
                <Author>Glen Schroeder</Author>
                <a href="">
                  <ApplyButton>Read more</ApplyButton>
                </a>
              </CardBottom>
            </CardBody>
          </PostCard>
        </PageWrapGroup>
        <RightSideBar>
          <AdCardOne />
        </RightSideBar>
      </ProfileWrapGroup>
    </Dashboard>
  );
}

export default ArticleDetailsPage;

export const Author = styled.span`
  font-size: 1rem;
  color: #a2a2c2;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 0.75rem;
  }
`;