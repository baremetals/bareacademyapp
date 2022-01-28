import styled from "styled-components";


export const ServiceSection = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: #eef0f3;
  @media (max-width: 991px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const ServiceContainer = styled.div`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;


export const ServiceWrapper = styled.div`
  display: flex;
  margin-left: -1rem;
  margin-right: -1rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ServicesColumn = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 33.33%;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ServicesCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
  padding: 2.5rem;
  transition: all 0.2s ease-in-out;
  text-align: center;
  margin-top: 5rem;
  width: 100%;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceIcon = styled.img`
  height: 10rem;
  width: 10rem;
  background-color: #fff;
  border-radius: 10rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: -7rem;
`;

export const ServiceH1 = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 3rem;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const ServiceH2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

export const ServiceP = styled.p`
  font-size: 1rem;
  margin-top: auto;
`;