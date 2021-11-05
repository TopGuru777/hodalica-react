import React from "react";
import { useTranslation } from "react-i18next";
import { BenefitItem, Benefits } from "../benefitpartner/StyledBenefits";
import { LandingPartTitle } from "../StyledLandingPage";
import { BenefitUserDiv } from "./StyledBenefitUser";
import ben1 from "assets/svg/king.svg";
import ben2 from "assets/svg/tag.svg";
import ben3 from "assets/svg/squirrel-with-acorn.svg";
import ben4 from "assets/svg/world.svg";
import ben5 from "assets/svg/heart.svg";
const BenefitUserPart = () => {
  const { t } = useTranslation();
  return (
    <BenefitUserDiv>
      <LandingPartTitle>
        <span>{t("landing.benefits")}</span>&nbsp;
        {t("landing.for_users")}
      </LandingPartTitle>
      <Benefits>
        <BenefitItem>
          <img src={ben1} alt="ben1" />
          {t("landing.benefits_user_data.benefit_1")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben2} alt="ben2" />
          {t("landing.benefits_user_data.benefit_2")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben3} alt="ben3" />
          {t("landing.benefits_user_data.benefit_3")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben4} alt="ben4" />
          {t("landing.benefits_user_data.benefit_4")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben5} alt="ben5" />
          {t("landing.benefits_user_data.benefit_5")}
        </BenefitItem>
      </Benefits>
    </BenefitUserDiv>
  );
};

export default BenefitUserPart;
