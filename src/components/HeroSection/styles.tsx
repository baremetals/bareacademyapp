import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"

export const HeroContainer = styled.div`
  height: 40rem;
  display: flex;
  background-color: #eef0f3;
  @media (max-width: 991px) {
    height: 30rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  max-width: 65rem;
  text-align: center;
  margin: auto;
  padding: 2rem;
`;

export const HeroH1 = styled.h1`
  color: #000;
  font-size: 3.5rem;
  line-height: 1.2;
  text-transform: capitalize;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    font-size: 2.5rem;
  }
`;

export const HeroP = styled.p`
  font-size: 2rem;
  @media (max-width: 991px) {
    font-size: 1.25rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
`;

export const Button = styled.button`

`;

export const ArrowForward = styled(MdArrowForward)`
  float: right;
  margin-left: 0.75rem;
  font-size: 1rem;
  vertical-align: sub;
  transform: scale(1.2);
  fill: #7755e2;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  float: right;
  margin-left: 0.75rem;
  font-size: 1rem;
  vertical-align: sub;
  transform: scale(1.2);
`;