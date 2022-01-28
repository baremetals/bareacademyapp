import styled from 'styled-components'


export const CoursesH1 = styled.h1`
  font-size: 2.5rem;
  color: #655e5e;
  margin-bottom: 1.5rem;

  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;

export const DetailsCardWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

export const CardTop = styled.div`
`;

export const CardLeftWrap = styled.div`
  margin-bottom: 1rem;
`;

export const CardTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const StartDateTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #b3b3b3;
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const StartDate = styled.span`
  color: #7755e2;
`;

export const CardCenterWrap = styled.div`
  margin-bottom: 1rem;
`;
export const CardText = styled.span``;

export const ApplyButton = styled.button`
  background: #256ce1;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px 11px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: auto;
`;

export const CardBottom = styled.div`
  align-items: center;
  display: flex;
`;

export const MediaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.75rem;
`;

export const MediaContainer = styled.div`
  padding: 0.75rem;
  width: 33.33%;
  @media (max-width: 1366px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const CoursesH2 = styled.h2`
  font-size: 2rem;
  color: #000;
  margin-bottom: 1.5rem;
  @media (max-width: 991px) {
    font-size: 1.75rem;
  }
`;

export const CoursesTeacherWrap = styled.div`
  /* align-items: flex-start; */
  display: grid;
`;
export const CoursesTeacherNameAndImageWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px
`;

export const CoursesTeacherName = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin: 0 10px;
`;

export const CoursesTeacherImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;