import React from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle } from "../StyledLandingPage";
import { ForPartnerVideoDiv, Video, VideoDiv, VideoPlayBtn } from "./StyledFPV";
import logo from "assets/icons/logo.png";

import videoImg from "assets/img/video.png";

import videoPlay from "assets/svg/videoPlay.svg";
import rectImg from "assets/rect/Rectangle-yellow.svg";

const ForPartnerVideoPart = () => {
  const { t } = useTranslation();
  return (
    <ForPartnerVideoDiv id="news">
      <LandingPartTitle>
        <img src={logo} alt="video_title" />
        {t("landing.videopart_title")}
      </LandingPartTitle>
      <VideoDiv>
        <Video
          // autoPlay
          playsInline
          muted
          loop
          className="top-animation-video-1 grid__item small-video"
          poster={videoImg}
        >
          <source
            src="https://technoandchill.com/wp-content/uploads/2021/07/topVideoNew3.mp4"
            type="video/mp4"
            // preload="none"
          />
        </Video>
        <VideoPlayBtn src={videoPlay} onClick={() => {}} alt="videoPlayBtn" />
        <img src={rectImg} alt="rectangle" />
      </VideoDiv>
    </ForPartnerVideoDiv>
  );
};

export default ForPartnerVideoPart;
