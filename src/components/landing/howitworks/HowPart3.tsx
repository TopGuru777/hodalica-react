import { Container } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import { CompassSvg, HowPart1Div, HowTitleDiv } from "./StyledHow";

import compassSvg from "assets/svg/compass.svg";

const HowPart3 = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HowPart1Div>
        <CompassSvg src={compassSvg} alt="compass" />
        <HowTitleDiv>
          <span>3</span>
          <div>{t("landing.how_data.how_3")}</div>
        </HowTitleDiv>
      </HowPart1Div>
    </Container>
  );
};

export default HowPart3;
