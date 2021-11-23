import styled from "styled-components";

export const LandingIntroDiv = styled.div``;

export const LandingTitleDiv = styled.div`
  font-weight: 900;
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: -10px;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    transition: 0.2s linear;
  }
`;

export const LandingTitle = styled.div`
  font-size: 82px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 70px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 50px;
    transition: 0.2s linear;
  }
`;

export const LandingSubTitle = styled.div`
  font-size: 49px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 30px;
    transition: 0.2s linear;
  }
`;

export const LandingIntroDescDiv = styled.div`
  max-width: 360px;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 425px) {
    margin-top: 40px;
  }
`;

export const IntroText = styled.div`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  span {
    font-weight: 700;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px;
    transition: 0.2s linear;
  }
`;

export const AppAvailableDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 11px;
  margin-top: 10px;
  max-width: 340px;

  width: 100%;
  img {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    max-width: 260px;
  }
`;

export const IntroAnimDiv = styled.div`
  position: relative;
  /* aspect-ratio: 9/8; */
  width: 70%;
  padding-top: 78.75%;
  margin: auto;
  margin-top: 20px;
  @media screen and (max-width: 425px) {
    padding-top: 112.5%;
    margin-top: 60px;
    width: 100%;
  }
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
  width: 80%;
  margin-left: 20%;
  transition: 0.2s linear;
  @media screen and (max-width: 1240px) {
    width: 85%;
    margin-left: 15%;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin-left: 10%;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    margin: 100px auto;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    width: calc(100% - 50px);
    margin: 50px auto;
    margin-left: 25px;
    margin-right: 25px;
    transition: 0.2s linear;
  }
`;

export const MobileAppDesc = styled.div`
  width: 55%;
  @media screen and (max-width: 768px) {
    width: 100%;
    transition: 0.2s linear;
  }
`;

export const MABtnDiv = styled.div`
  width: 492px;
  font-size: 44px;
  font-weight: 900 !important;
  transition: 0.2s linear;
  @media screen and (max-width: 1024px) {
    font-size: 35px;
    width: 400px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    transition: 0.2s linear;
    width: 350px;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
    transition: 0.2s linear;
    max-width: 300px;
    width: 100%;
  }
`;

export const MADesc = styled.div`
  font-weight: 500;
  font-size: 24px;
  span {
    font-weight: 900;
    font-size: 37px;
    text-decoration: underline;
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    span {
      font-size: 30px;
    }
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    span {
      font-size: 26px;
    }
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
    span {
      font-size: 22px;
    }
    transition: 0.2s linear;
  }
`;

export const MobileAppVideoDiv = styled.div`
  aspect-ratio: 1/1;
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 15% auto;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    margin-top: 80px;
  }
`;

export const MobileAppVideo = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  video {
    width: 80%;
    position: absolute;
    right: 13%;
    top: 5%;
  }
  img {
    width: 80%;
    position: absolute;
    z-index: -1;
    right: 10%;
    top: -10%;
  }
`;

export const MobileIntroDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5%;
  @media screen and (max-width: 768px) {
    width: 70%;
    grid-gap: 2%;
    margin: auto;
    grid-template-columns: 1fr;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;

export const MobileDiv = styled.div`
  position: relative;
  video {
    width: 100%;
  }
`;

export const DotGroup = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 70px;
  }
  margin-bottom: -4%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    margin-bottom: -10%;
    & > *:not(:last-child) {
      margin-bottom: 40px;
    }
  }
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
        return "width: 37%;aspect-ratio: 1/1;";
      case "md":
        return "width: 25%;aspect-ratio: 1/1;";
      case "sm":
        return "width: 17%;aspect-ratio: 1/1;";
      case "xs":
        return "width: 13%;aspect-ratio: 1/1;";
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
