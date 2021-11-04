import React from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle } from "../StyledLandingPage";
import { BenefitItem, BenefitPartnerDiv, Benefits } from "./StyledBenefits";

import ben1 from "assets/svg/pie-chart.svg";
import ben2 from "assets/svg/world.svg";
import ben3 from "assets/svg/target.svg";
import ben4 from "assets/svg/giftbox.svg";
import ben5 from "assets/svg/user.svg";

const BenefitPartnerPart = () => {
  const { t } = useTranslation();
  return (
    <BenefitPartnerDiv>
      <LandingPartTitle>
        <span>{t("landing.benefits")}</span>&nbsp;
        {t("landing.for_partners")}
      </LandingPartTitle>
      <Benefits>
        <BenefitItem>
          <img src={ben1} alt="ben1" />
          {t("landing.benefits_partner_data.benefit_1")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben2} alt="ben2" />
          {t("landing.benefits_partner_data.benefit_2")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben3} alt="ben3" />
          {t("landing.benefits_partner_data.benefit_3")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben4} alt="ben4" />
          {t("landing.benefits_partner_data.benefit_4")}
        </BenefitItem>
        <BenefitItem>
          <img src={ben5} alt="ben5" />
          {t("landing.benefits_partner_data.benefit_5")}
        </BenefitItem>
      </Benefits>
    </BenefitPartnerDiv>
  );
};

export default BenefitPartnerPart;
