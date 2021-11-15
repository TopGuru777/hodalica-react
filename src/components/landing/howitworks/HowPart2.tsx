import React from "react";
import {
  BoxImg,
  How2TextDiv,
  How2Video,
  How2VideoDiv,
  HowPart2Div,
  HowTitleDiv,
  Rect,
} from "./StyledHow";

import { useTranslation } from "react-i18next";
import packImg from "assets/svg/pack.svg";
import mob1 from "assets/mobiles/6.png";
import mob2 from "assets/mobiles/5.png";

import rect11 from "assets/rect/Rectangle-green2.svg";
import rect1 from "assets/rect/Rectangle-green.svg";

const HowPart2 = () => {
  const { t } = useTranslation();
  return (
    <HowPart2Div>
      <How2VideoDiv>
        <How2Video
          no={1}
          // autoPlay
          playsInline
          muted
          loop
          className="top-animation-video-1 grid__item small-video"
          poster={mob1}
        >
          <source src="" type="video/mp4" />
        </How2Video>
        <How2Video
          no={2}
          // autoPlay
          playsInline
          muted
          loop
          className="top-animation-video-1 grid__item small-video"
          poster={mob2}
        >
          <source src="" type="video/mp4" />
        </How2Video>

        <Rect src={rect1} no={1} alt="rect1" />
        <Rect src={rect11} no={2} alt="rect2" />
      </How2VideoDiv>
      <How2TextDiv dir="rtl">
        <BoxImg src={packImg} alt="pack" />
        <HowTitleDiv>
          <span>2</span>
          <div>
            {t("landing.how_data.how_2")}
            <b>{t("landing.how_data.how_2_suffix")}</b>
          </div>
        </HowTitleDiv>
      </How2TextDiv>
    </HowPart2Div>
  );
};

export default HowPart2;
