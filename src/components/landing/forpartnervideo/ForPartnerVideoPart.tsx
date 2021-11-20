import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle } from "../StyledLandingPage";
import { ForPartnerVideoDiv, Video, VideoDiv, VideoPlayBtn } from "./StyledFPV";
import logo from "assets/icons/logoBlack.svg";
import videoSrc from "assets/partnere.mp4";
import videoImg from "assets/img/cover.png";

import videoPlay from "assets/svg/videoPlay.svg";
import rectImg from "assets/rect/Rectangle-yellow.svg";

const ForPartnerVideoPart = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);
  const { t } = useTranslation();
  const handlePlayClick = () => {
    setPlay(true);
    videoRef.current?.play();
  };

  const handleVideoClick = () => {
    if (play) {
      setPlay(false);
      videoRef.current?.pause();
      // if (videoRef.current) {
      //   videoRef.current.currentTime = 0;
      // }
    }
  };

  const handleTimeUpdate = () => {
    console.log();
    if (videoRef.current?.currentTime) {
      if (
        Math.round(videoRef.current?.currentTime).toFixed(0) ===
        Math.round(videoRef.current?.duration).toFixed(0)
      ) {
        setPlay(false);
        videoRef.current.currentTime = 0;
      }
      //   alert(videoRef.current.duration);
    }
  };

  return (
    <ForPartnerVideoDiv id="news">
      <LandingPartTitle>
        <img src={logo} alt="video_title" />
        {t("landing.videopart_title")}
      </LandingPartTitle>
      <VideoDiv>
        <Video
          onClick={handleVideoClick}
          ref={videoRef}
          playsInline
          muted
          onTimeUpdate={handleTimeUpdate}
          // controls
          // loop
          className="top-animation-video-1 grid__item small-video"
          poster={!play ? videoImg : ""}
        >
          <source
            src={videoSrc}
            type="video/mp4"
            // preload="none"
          />
        </Video>
        {!play && (
          <VideoPlayBtn
            src={videoPlay}
            onClick={handlePlayClick}
            alt="videoPlayBtn"
          />
        )}
        <img src={rectImg} alt="rectangle" />
      </VideoDiv>
    </ForPartnerVideoDiv>
  );
};

export default ForPartnerVideoPart;
