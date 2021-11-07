import { Container } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle } from "../StyledLandingPage";
import HowPart1 from "./HowPart1";
import HowPart2 from "./HowPart2";
import HowPart3 from "./HowPart3";
import HowPart4 from "./HowPart4";
import HowPart5 from "./HowPart5";
import StartSavingPart from "./StartSavingPart";
import { HowDiv } from "./StyledHow";

const HowitworksPart = () => {
  const { t } = useTranslation();
  return (
    <HowDiv id="how">
      <Container>
        <LandingPartTitle>
          <span>{t("landing.how_data.how")}</span>
          &nbsp;{t("landing.how_data.it_works")}
        </LandingPartTitle>
      </Container>
      <HowPart1 />
      <HowPart2 />
      <HowPart3 />
      <HowPart4 />
      <HowPart5 />
      <StartSavingPart />
    </HowDiv>
  );
};

export default HowitworksPart;
