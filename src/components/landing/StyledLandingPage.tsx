import styled from "styled-components";
import dashedBorder from "assets/svg/Line.svg";

export const LandingPageDiv = styled.div`
  margin-top: 100px;
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

export const TitleDiv = styled.div`
  display: flex;
  align-items: end;
  .small-title {
    font-size: 24.6px;
    padding-bottom: 9px;
  }
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
