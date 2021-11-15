import React from "react";
import { ArrowImg, LogoImg, StartSavingDiv } from "./StyledHow";

import logoImg from "assets/icons/logoBlack.svg";
import { Container } from "layouts/StyledLayout";
import { useTranslation } from "react-i18next";

import arrow from "assets/svg/arrow1.svg";

const StartSavingPart = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <StartSavingDiv>
        <ArrowImg src={arrow} alt="arrow" />
        <LogoImg src={logoImg} alt="logoImg" />
        <div>
          {t("landing.how_data.start")}
          <b>{t("landing.how_data.saving")}</b>
          <br />
          {t("landing.how_data.on_the")}
          <u>
            <b>{t("landing.how_data.go")}</b>
          </u>
        </div>
      </StartSavingDiv>
    </Container>
  );
};

export default StartSavingPart;
