import styled from "styled-components";
import dashedBorder from "assets/svg/Line.svg";

export const LandingPageDiv = styled.div``;

export const LandingTitleDiv = styled.div`
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LandingSubTitle = styled.div`
  font-size: 49px;
`;

export const LandingTitle = styled.div`
  font-size: 82px;
`;

export const ForPartnerDiv = styled.div`
  background-color: #fbf2e480;
  position: relative;
  padding-top: 180px;
`;

export const DashBorder = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 20px;
  background-image: url(${dashedBorder});
  background-size: 100%;
  background-repeat: repeat-x;
`;

export const LandingPartTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 58px;
  img {
    width: 92px;
    margin-right: 47.5px;
  }
  span {
    text-decoration: underline 3px;
  }
`;
