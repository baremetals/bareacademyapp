import React from 'react'
import styled from 'styled-components';

const AdCardTwo = () => {
    return (
      <AdCardWrapper>
        <RightSideAdvert alt="" src="/assets/images/Terms.svg" />
      </AdCardWrapper>
    );
}

export default AdCardTwo

const AdCardWrapper = styled.div`
  margin-bottom: 1.875rem;
  padding: 1.875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
`;

export const RightSideAdvert = styled.img`
  width: 100%;
  border-radius: 0.625rem;
  margin: 2rem 0;
`;