import styled from "styled-components";


export const PageContainer = styled.div`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  position: relative;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .space-bottom {
    margin-bottom: 6.25rem;
    @media (max-width: 991px) {
      margin-bottom: 1.25rem;
    }
  }
`;

export const InnerContainer = styled.div`
  max-width: 1232px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Inbox = styled.div``;

export const Logo = styled.div`
  margin-right: auto;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1;
  svg {
    width: 150px;
    @media (max-width: 991px) {
      width: 120px;
    }
  }
`;

export const Image = styled.svg`
  display: block;
  /* width: 100%; */
`;

export const InboxContent = styled.div`
  background-color: #fff;
  color: #fff;
  max-width: 30rem;
  border-radius: 0.75rem;
  margin: auto;
  padding: 3rem;
  text-align: center;
  svg {
    width: 3rem;
    height: 3rem;
    fill: #5634bf;
    position: relative;
    margin-bottom: 1rem;
  }
`;

export const InboxTitle = styled.h2`
  margin-bottom: 1rem;
  color: #000;
`;

export const InboxDes = styled.div`
  color: #000;
  a {
    text-decoration: underline;
    color: #5634bf;
  }
`;
