import React from "react";
import { useTranslation } from "react-i18next";
import {
  AppAvailableDiv,
  IntroText,
  LandingIntroDescDiv,
  LandingIntroDiv,
  LandingSubTitle,
  LandingTitle,
  LandingTitleDiv,
} from "./StyledLandingIntro";

import googleSvg from "assets/svg/googleplay.svg";
import appstoreSvg from "assets/svg/appstore.svg";

import IntroAnimPart from "./IntroAnimPart";
import MobileAppIntroDiv from "./MobileAppIntroDiv";
import MobileIntroPart from "./MobileIntroPart";

const LandingIntroPart = () => {
  const { t } = useTranslation();

  return (
    <LandingIntroDiv>
      <LandingTitleDiv>
        <LandingSubTitle>{t("landing.subtitle1")}</LandingSubTitle>
        <LandingTitle>{t("landing.title")}</LandingTitle>
        <LandingSubTitle>{t("landing.subtitle2")}</LandingSubTitle>
      </LandingTitleDiv>
      <IntroAnimPart />
      <LandingIntroDescDiv>
        <IntroText>
          {t("landing.app_available_prefix")}
          <br />
          <span>{t("landing.app_store")}</span>&nbsp;
          {t("landing.and")}&nbsp;
          <span>{t("landing.google_play")}</span>
        </IntroText>
        <AppAvailableDiv>
          <a
            href="https://play.google.com/store/apps/details?id=com.hodalica"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googleSvg} alt="googleSvg" />
          </a>
          <a
            href="https://apps.apple.com/app/hodalica/id1577507558?l=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appstoreSvg} alt="appstoreSvg" />
          </a>
        </AppAvailableDiv>
      </LandingIntroDescDiv>
      <MobileAppIntroDiv />
      <MobileIntroPart />
    </LandingIntroDiv>
  );
};

export default LandingIntroPart;
