import { Container } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  CompassSvg,
  How5VideoDiv,
  HowPart1Div,
  HowTitleDiv,
  Rect5,
} from "./StyledHow";

import ticketsImg from "assets/svg/park-tickets-couple.svg";

import mob1 from "assets/mobiles/1.png";
import mob2 from "assets/mobiles/2.png";
import mob3 from "assets/mobiles/3.png";

import rect1 from "assets/rect/Rectangle-red.svg";
import rect2 from "assets/rect/Rectangle-pink.svg";

const HowPart5 = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HowPart1Div maxW={550}>
        <CompassSvg src={ticketsImg} alt="ticketsImg" />
        <HowTitleDiv>
          <span>5</span>
          <div>
            {t("landing.how_data.how_5_1")}
            <b>{t("landing.how_data.how_5_receipt")}</b>
            {t("landing.how_data.how_5_2")}
            <b>{t("landing.how_data.how_5_partner")}</b>
          </div>
        </HowTitleDiv>
      </HowPart1Div>
      <How5VideoDiv>
        <video
          // autoPlay
          playsInline
          muted
          loop
          className="top-animation-video-1 grid__item small-video"
          poster={mob1}
        >
          <source src="" type="video/mp4" />
        </video>
        <video
          // autoPlay
          playsInline
          muted
          loop
          className="top-animation-video-1 grid__item small-video"
          poster={mob2}
        >
          <source src="" type="video/mp4" />
        </video>
        <video
          // autoPlay
          playsInline
          muted
          loop
          className="top-animation-video-1 grid__item small-video"
          poster={mob3}
        >
          <source src="" type="video/mp4" />
        </video>
        <Rect5 no={1} src={rect1} alt="rect1" />
        <Rect5 no={2} src={rect2} alt="rect2" />
      </How5VideoDiv>
    </Container>
  );
};

export default HowPart5;
