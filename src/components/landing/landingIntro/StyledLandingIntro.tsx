import styled from "styled-components";

export const LandingIntroDiv = styled.div``;

export const LandingTitleDiv = styled.div`
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LandingTitle = styled.div`
  font-size: 82px;
`;

export const LandingSubTitle = styled.div`
  font-size: 49px;
`;

export const LandingIntroDescDiv = styled.div`
  width: 340px;
  margin: auto;
  margin-top: 20px;
`;

export const IntroText = styled.div`
  font-size: 24.6px;
  text-align: center;
`;

export const AppAvailableDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 11px;
  margin-top: 10px;
  width: 340px;
  img {
    width: 100%;
  }
`;

export const IntroAnimDiv = styled.div`
  position: relative;
  aspect-ratio: 9/8;
  width: 70%;
  margin: auto;
`;

type AnimProps = {
  no: Number;
};

export const AnimItem = styled.div<AnimProps>`
  video {
    width: 90%;
    border-radius: 7%;
  }
  ${({ no }) => {
    switch (no) {
      case 1:
        return "width:65%;left: 23%;top: 2%;z-index: 1 !important; ";
      case 2:
        return "video{width: 100%;};width:19%;left: 0;top: 0;";
      case 3:
        return "video{width: 100%;};width:20%;right: 0;top: -3%;";
      case 4:
        return "video{width: 100%;};width:18%;right: -3%;bottom: 0%;";
      case 5:
        return "video{width: 100%;};width:16%;left: -3%;bottom: 0%;";
      default:
        return;
    }
  }}
  z-index: 0;
  position: absolute;
  transition: 0.2s linear;
`;

export const AnimShapes = styled.div<AnimProps>`
  width: 8%;
  position: absolute;
  height: 7%;
  border-radius: 20%;
  ${({ no }) => {
    switch (no) {
      case 1:
        return "left: -5%;top: -4%;z-index: 1;background-color: #fc5f77;";
      case 2:
        return "right: 14%;top: 30%;z-index: -1;background-color: #FD9090;";
      case 3:
        return "left: -5%;bottom: -3%;z-index: -1;background-color: #FBB700;";
      default:
        return;
    }
  }}
  transition: 0.2s linear;
`;

export const MobileAppDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileAppDesc = styled.div`
  width: 55%;
`;

export const MABtnDiv = styled.div`
  width: 492px;
  font-size: 44px;
`;

export const MADesc = styled.div`
  font-size: 24.6px;
  span {
    font-size: 37px;
    text-decoration: underline;
  }
`;

export const MobileAppVideoDiv = styled.div`
  aspect-ratio: 3/4;
  width: 45%;
  position: relative;
  video {
    position: absolute;
    right: -50%;
    bottom: -10%;
  }
  img {
    position: absolute;
    z-index: -1;
    right: -55%;
    top: -10%;
  }
`;

export const MobileIntroDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5%;
`;

export const MobileDiv = styled.div`
  position: relative;
`;

export const DotGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 70px;
  }
  margin-bottom: -40px;
`;

type dotProps = {
  size: string;
  color?: string;
  pos?: Number;
};

export const Dot = styled.div<dotProps>`
  border-radius: 50%;
  ${({ size }) => {
    switch (size) {
      case "lg":
        return "width: 97.5px;height: 97.5px;";
      case "md":
        return "width: 70.5px;height: 70.5px;";
      case "sm":
        return "width: 52.5px;height: 52.5px;";
      case "xs":
        return "width: 43.5px;height: 43.5px;";
      default:
        return;
    }
  }}
  background-color: ${({ color }) => (color ? color : "#FC5F77")};
  ${({ pos }) => pos && "position: absolute;"}
  ${({ pos }) => {
    switch (pos) {
      case 1:
        return "right: 3%; top: 21%;";
      case 2:
        return "right: 3%; top: 30.5%;";
      case 3:
        return "right: 3%; top: 40%;";
      case 4:
        return "right: 3%; top: 49.5%;";
      case 5:
        return "right: 3%; top: 59%;";
      case 6:
        return "right: 3%; top: 68.5%;";
      default:
        break;
    }
  }};
`;
