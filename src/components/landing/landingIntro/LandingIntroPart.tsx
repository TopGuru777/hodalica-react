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
        <IntroText>{t("landing.app_available")}</IntroText>
        <AppAvailableDiv>
          <img src={googleSvg} alt="googleSvg" />
          <img src={appstoreSvg} alt="appstoreSvg" />
        </AppAvailableDiv>
      </LandingIntroDescDiv>
      <MobileAppIntroDiv />
      <MobileIntroPart />
    </LandingIntroDiv>
  );
};

export default LandingIntroPart;
