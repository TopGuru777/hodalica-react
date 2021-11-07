import { Container } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import { AppAvailableDiv } from "../landingIntro/StyledLandingIntro";
import { HowPart1Div, HowTitleDiv } from "./StyledHow";
import googleSvg from "assets/svg/googleplay.svg";
import appstoreSvg from "assets/svg/appstore.svg";
const HowPart1 = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HowPart1Div mg="45px 0 0 0">
        <HowTitleDiv>
          <span>1</span>
          <div>
            {t("landing.how_data.how_1_prefix")}
            <b>{t("landing.google_play")}</b>&nbsp;
            {t("landing.how_data.or")}&nbsp;
            <b>{t("landing.app_store")}</b>
          </div>
        </HowTitleDiv>
        <AppAvailableDiv>
          <img src={googleSvg} alt="googleSvg" />
          <img src={appstoreSvg} alt="appstoreSvg" />
        </AppAvailableDiv>
      </HowPart1Div>
    </Container>
  );
};

export default HowPart1;
