import styled from "styled-components";

export const HowDiv = styled.div``;

type TextPartProps = {
  maxW?: Number;
  mg?: string;
};

export const HowPart1Div = styled.div<TextPartProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxW }) => (maxW ? maxW + "px" : "380px")};
  margin-top: 45px;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const HowTitleDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  span {
    margin-top: -10px !important;
    font-size: 65px;
    font-weight: 900;
  }
  div {
    margin-top: 3px;
    padding-left: 15px;
    padding-right: 15px;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    span {
      font-size: 50px;
    }
    transition: 0.2s linear;
  }

  @media screen and (max-width: 425px) {
    font-size: 15px;
    div {
      margin-top: -5px;
    }
    span {
      font-size: 36px;
    }
    transition: 0.2s linear;
  }
`;

export const CompassSvg = styled.img`
  width: 98px;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    width: 80px;
    margin-bottom: 15px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    width: 50px;
    margin-bottom: 20px;
    transition: 0.2s linear;
  }
`;

export const HowPart2Div = styled.div`
  display: grid;
  grid-template-columns: 50% 40%;
  margin: 50px 0 0 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 50px 0 50px 0;
  }
`;

export const How2VideoDiv = styled.div`
  position: relative;
  padding-top: 96%;
  width: 100%;
`;

export const How2TextDiv = styled.div`
  max-width: 420px;
  width: 80%;
  margin-left: 15%;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    justify-self: right;
    margin-right: 10%;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    justify-self: right;
    width: calc(100% - 30px);
    margin-right: 15px;
    transition: 0.2s linear;
  }
`;

export const BoxImg = styled.img`
  width: 350px;
  margin-bottom: 15px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    width: 300px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    width: 180px;
    transition: 0.2s linear;
    /* margin-top: -135px; */
  }
`;

type CountProps = {
  no: Number;
};

export const How2Video = styled.video<CountProps>`
  position: absolute;
  ${({ no }) => {
    switch (no) {
      case 1:
        return "left:0; top: 0; width: 51%;";
      case 2:
        return "right:0; bottom: 0; width: 61%;";
      default:
        return;
    }
  }}
`;

export const Rect = styled.img<CountProps>`
  position: absolute;
  ${({ no }) => {
    switch (no) {
      case 1:
        return "right:20%; top: 10%; width: 17%;z-index:-1;";
      case 2:
        return "right:25%; top: 1%; width: 9%;";
      default:
        return;
    }
  }}
`;

export const How5VideoDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10px;
  padding-top: 2%;
  video {
    width: 100%;
  }
`;

export const Rect5 = styled.img<CountProps>`
  position: absolute;
  width: 15% !important;
  ${({ no }) => {
    switch (no) {
      case 1:
        return "left:0; bottom: 0; width: 17%;z-index:-1;";
      case 2:
        return "right:0%; top: 0%; width: 9%;z-index:-1;";
      default:
        return;
    }
  }}
`;

export const StartSavingDiv = styled.div`
  padding-top: 170px;
  padding-bottom: 170px;
  width: 100%;
  position: relative;
  text-align: center;
  div {
    font-size: 58px;
    font-weight: 600;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    transition: 0.2s linear;
    padding-top: 150px;
    padding-bottom: 150px;
    div {
      font-size: 50px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 425px) {
    transition: 0.2s linear;
    padding-top: 130px;
    padding-bottom: 100px;
    div {
      font-size: 40px;
      font-weight: 600;
    }
  }
`;

export const LogoImg = styled.img`
  width: 295px;
  margin-bottom: 50px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    width: 200px;
    margin-bottom: 30px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    width: 150px;
    margin-bottom: 20px;
    transition: 0.2s linear;
  }
`;

export const ArrowImg = styled.img`
  position: absolute;
  left: 15%;
  top: 3%;
  width: 180px;
  @media screen and (max-width: 768px) {
    width: 130px;
    margin-bottom: 30px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    margin-bottom: 30px;
    transition: 0.2s linear;
    top: 0%;
  }
`;

export const HowPart4Div = styled.div`
  margin-top: 100px;
  width: 90%;

  margin-left: 10%;
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  transition: 0.2s linear;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    transition: 0.2s linear;
    margin-top: 50px;
  }
`;

export const How4VideoPart = styled.div`
  width: 100%;
  padding-top: 150%;
  position: relative;
  video {
    position: absolute;
    width: 60%;
    right: 7%;
    bottom: 0;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    margin: auto;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    margin: auto;
    transition: 0.2s linear;
  }
`;

export const How4TextPart = styled.div`
  display: flex;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  margin-left: -10%;
  span {
    font-size: 65px;
    font-weight: 900;
  }
  div {
    margin-left: 15px;
    margin-right: 15px;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    margin: 30px 0 50px 0;
    font-size: 20px;
    span {
      font-size: 50px;
    }
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 15px;
    span {
      font-size: 36px;
    }
    transition: 0.2s linear;
  }
`;

export const Rect4 = styled.img<CountProps>`
  position: absolute;
  @media screen and (max-width: 768px) {
    right: 0;
    transition: 0.2s linear;
  }
  ${({ no }) => {
    switch (no) {
      case 1:
        return "right:2%; top: 21%; width: 30%;z-index:-1;";
      case 2:
        return "right:2%; top: 12%; width: 10%;z-index:-1;";
      case 3:
        return "right:-50%; bottom: 5%; width: 17%;z-index:-1;@media screen and (max-width: 768px) {bottom: 0;: 0;transition: 0.2s linear;}";
      default:
        return;
    }
  }}
  @media screen and (max-width: 768px) {
    ${({ no }) => no === 3 && "right:0"}
    transition: 0.2s linear;
  }
`;

export const QrImg = styled.img`
  position: absolute;
  z-index: -1;
  top: 45%;
  left: 0;
  width: 50%;
`;

export const Arrow4Img = styled.img`
  position: absolute;
  left: 15%;
  top: 0;
  width: 30%;
`;
