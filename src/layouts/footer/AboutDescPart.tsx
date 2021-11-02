import React from "react";
import { useTranslation } from "react-i18next";
import {
  AboutDesc,
  AboutDescDiv,
  FooterMarkDiv,
  MarkImg,
  MarkSubTitle,
  MarkText,
  MarkTitle,
} from "./StyledFooter";

import LogoIMG from "assets/icons/color-logo1.png";

function AboutDescPart() {
  const { t } = useTranslation();
  return (
    <AboutDescDiv>
      <FooterMarkDiv>
        <MarkImg src={LogoIMG} />
        <MarkText>
          <MarkTitle>{t("footer_mark.mark_title")}</MarkTitle>
          <MarkSubTitle>{t("footer_mark.mark_subtitle")}</MarkSubTitle>
        </MarkText>
      </FooterMarkDiv>
      <AboutDesc>{t("footer.about_desc")}</AboutDesc>
    </AboutDescDiv>
  );
}

export default AboutDescPart;
