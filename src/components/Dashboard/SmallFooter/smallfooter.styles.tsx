import styled from "styled-components";

export const SmallFooterContainer = styled.footer`
  margin-top: auto;
  margin-left: -2.5rem;
  margin-right: -2.5rem;
  margin-bottom: -2.5rem;
  @media screen and (max-width: 991px) {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    margin-bottom: -1.5rem;
  }
`;

export const SocialMedia = styled.section`
  margin-top: 2rem;
  max-width: 100%;
  width: 100%;
  padding: 1rem 1.75rem;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  background-color: #fff;
  @media screen and (max-width: 991px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLogo = styled.a`
  color: inherit;
  margin: -0.75rem;
  svg {
    display: block;
    width: 4rem;
    height: 4rem;
    rect {
      display: none;
    }
    path {
      fill: #7755e2;
    }
  }
`;

export const WebsiteRights = styled.small`
  color: #727272;
  font-size: 1rem;
  margin-right: auto;
  margin-left: 2rem;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 991px) {
    width: 200px;
  }
`;

export const SocialIconLink = styled.a`
  color: inherit;
  font-size: 1.5rem;
  svg {
    display: block;
  }
`;
