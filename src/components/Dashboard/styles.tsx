import styled from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  background-color: #eef0f3;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const HomeInnerContainer = styled.div`
  flex: 1 0 0%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 1.5rem;
    min-height: calc(100vh - 4.625rem);
  }
`;

export const InnerWrapGroup = styled.div`
  display: flex;
  &.container-loggedin {
    max-width: 1232px;
    width: 100%;
    margin: 0 auto;
    padding-top: 5rem;
  }
`;