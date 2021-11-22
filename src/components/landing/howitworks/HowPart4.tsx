import { Container } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Arrow4Img,
  How4TextPart,
  How4VideoPart,
  HowPart4Div,
  QrImg,
  Rect4,
} from "./StyledHow";

import mob from "assets/mobiles/4.png";
import qrcode from "assets/svg/qrCode.svg";
import rect1 from "assets/rect/Rectangle-yellow.svg";
import rect11 from "assets/rect/Rectangle-yellow2.svg";
import arrow from "assets/svg/arrow2.svg";

const HowPart4 = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HowPart4Div>
        <How4VideoPart>
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={mob}
          >
            <source src="" type="video/mp4" />
          </video>
          <Arrow4Img src={arrow} alt="arrow" />
          <Rect4 no={1} src={rect1} alt="rect1" />
          <Rect4 no={2} src={rect11} alt="rect2" />
          <QrImg src={qrcode} alt="qrcode" />
        </How4VideoPart>
        <How4TextPart>
          <span>4</span>
          <div>
            {t("landing.how_data.how_4_1")}
            <b>{t("landing.how_data.qr_code")}</b>
            <b>{t("landing.how_data.how_4_2")}</b>
            {t("landing.how_data.redeem")}
          </div>
        </How4TextPart>
      </HowPart4Div>
    </Container>
  );
};

export default HowPart4;
