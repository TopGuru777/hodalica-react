import styled from "styled-components";

export const ForPartnerVideoDiv = styled.div`
  margin-bottom: 76px;
`;

export const VideoDiv = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;
  img {
    position: absolute;
    right: 0;
    width: 15%;
    z-index: -1;
  }
`;

export const Video = styled.video`
  width: 96%;
  margin-top: 4%;
`;

export const VideoPlayBtn = styled.img`
  position: absolute;
  top: 42%;
  right: 45% !important;
  z-index: 0 !important;
`;
