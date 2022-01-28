import styled from "styled-components";

export const AdCardWrapper = styled.div`
  margin-bottom: 1.875rem;
  padding: 1.875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: .625rem;
`;

export const ImageText = styled.span`
    font-weight: 300;
    font-size: 1rem;
`;

export const RightSideTitle = styled.h4`
    margin-bottom: 1.25rem;
`;

export const UsersLists = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;




export const RightBarTitle = styled.h4`
  letter-spacing: 0.02em;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.5;
`;

export const RightBarInfo = styled.div`
  margin-bottom: 0.875rem;
  padding: 1.875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
`;

export const RightBarInfoItem = styled.div`
  display: flex;
  margin-bottom: 0.375rem;
`;

export const RightBarInfoKey = styled.span`
  font-weight: 500;
  color: #000;
  width: 50%;
`;

export const RightBarInfoValue = styled.span`
  font-weight: 300;
`;