import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #101522;
    /* position: sticky; */
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;  
`;

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #15cdfc;
    transition: 0.3s east-out;
  }
`;

export const SocialMedia= styled.section`
    width: 100%;
`;

export const SocialMediaWrap= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo= styled.a`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights= styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
  /* color: #fff; */
  /* font-size: 24px; */
  text-decoration: none;
`;

export const FooterLinks = styled.a`
  text-decoration: none;
`;
export const FooterItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterInput = styled.input`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 4px 10px;
`;