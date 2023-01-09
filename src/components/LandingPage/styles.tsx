import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 11;
  h1 {
    font-size: 38px;
    line-height: normal;
    text-align: center;
  }
`;

export const HeroArticle = styled.article`
  background-image: url(/assets/images/hero-banner.jpg);
  min-height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const HeroTitleText = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 81px;
  color: #ffffff;
  overflow-wrap: break-word;
`;

export const HeroText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 40px;
`;

export const LandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background: #7755e2;
  min-width: 207px;
  min-height: 51px;
  border-radius: 26px;

  color: #fff;
  transition: 0.3s;
  img {
    margin-left: 10px;
  }
  &:hover {
    background: #f28c1c;
    color: #fff;
  }
`;

export const LandingContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const LandingRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
`;

export const LandingColumn = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const TestimonialColumn = styled.div`
  min-width: 33.33%;
  padding-right: 12px;
`;
export const SuccessImage = styled.div`
  background-image: url(/assets/images/success-bg.svg);
`;

export const TestimonialSection = styled.article`
  padding: 120px 0 0;
`;

export const CarouselContainer = styled.div`
  background-color: #7755e2;
  border-radius: 24px;
  overflow: hidden;
  padding: 32px;
  position: relative;
  background-image: url(/assets/images/Lines.svg);
  background-repeat: no-repeat;
  background-size: cover;
  /* display: block; */
`;
export const CarouselWrapper = styled.div`
  display: block;
  width: 100%;
  z-index: 1;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  /* -ms-touch-action: pan-Y;
  touch-action: manipulation;
  -moz-backface-visibility: hidden; */
`;
export const CarouselContentWrap = styled.div`
  position: relative;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;
export const CarouselCardWrap = styled.div`
  /* transform: translate3d(-2544px, 0px, 0px); */
  transition: all 0s ease 0s;
  width: 5278px;
  position: relative;
  /* -ms-touch-action: pan-Y; */
  touch-action: manipulation;
  /* -moz-backface-visibility: hidden; */

  :after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
`;
export const CarouselCard = styled.div`
  min-height: 200px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    margin-bottom: 48px;
    display: block;
    user-select: none;
  }
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #fff;
    overflow-wrap: break-word;
  }
  /* img {
    display: block;
    width: 100%;
  } */
  .active {
    background: #ffb900;
  }
`;

export const CarouselOwner = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  margin-bottom: 48px;
  display: block;
  user-select: none;
`;
export const CarouselCardText = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  color: #fff;
`;
export const CarouselNavigation = styled.div``;
export const CarouselDots = styled.div``;
