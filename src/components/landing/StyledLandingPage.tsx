import styled from "styled-components";
import dashedBorder from "assets/svg/Line.svg";

export const LandingPageDiv = styled.div`
  margin-top: 70px;
  transition: 0.2s linear;

  @media screen and (max-width: 425px) {
    transition: 0.2s linear;
    margin-top: 0;
  }
`;

export const ForPartnerDiv = styled.div`
  background-color: #fbf2e480;
  position: relative;
  padding-top: 100px;
  margin-top: 200px;
  padding-bottom: 50px;
  @media screen and (max-width: 425px) {
    transition: 0.2s linear;
    padding-top: 40px;
    margin-top: 20px;
  }
`;

export const DashBorder = styled.div`
  position: absolute;
  top: -30px;
  width: 100%;
  height: 20px;
  background-image: url(${dashedBorder});
  background-size: 100%;
  background-repeat: repeat-x;
  @media screen and (max-width: 425px) {
    top: -10px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: end;
  .small-title {
    font-size: 24px;
    padding-bottom: 9px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      transition: 0.2s linear;
      padding-bottom: 6px;
    }
    @media screen and (max-width: 500px) {
      font-size: 15px;
      transition: 0.2s linear;
    }
  }
`;

export const LandingPartTitle = styled.div`
  font-weight: 900;
  display: flex;
  align-items: center;
  font-size: 58px;
  transition: 0.2s linear;
  img {
    width: 92px;
    margin-right: 47.5px;
  }
  span {
    text-decoration: underline 3px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 50px;
    transition: 0.2s linear;
    img {
      width: 70px;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 42px;
    transition: 0.2s linear;
    img {
      width: 60px;
      margin-right: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 33px;
    transition: 0.2s linear;
    img {
      width: 50px;
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 375px) {
    font-size: 28px;
    transition: 0.2s linear;
    img {
      width: 50px;
      margin-right: 20px;
    }
  }
`;
