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
      <HowPart1Div>
        <HowTitleDiv>
          <span>1</span>
          {t("landing.how_data.how_1")}
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
