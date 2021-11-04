import React from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle } from "../StyledLandingPage";
import { PartnersDiv, PartnersGroup, ViewMoreBtn } from "./StyledPartner";

import partner1 from "assets/partners/1.png";
import partner2 from "assets/partners/2.png";
import partner3 from "assets/partners/3.png";
import partner4 from "assets/partners/4.png";
import partner5 from "assets/partners/5.png";
import partner6 from "assets/partners/6.png";
import partner7 from "assets/partners/7.png";
import partner8 from "assets/partners/8.png";
import partner9 from "assets/partners/9.png";
import partner10 from "assets/partners/10.png";
import partner11 from "assets/partners/11.png";
import partner12 from "assets/partners/12.png";
import Button from "components/custom/Button/Button";

const imgData = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
];

const PartnersPart = () => {
  const { t } = useTranslation();

  return (
    <PartnersDiv>
      <LandingPartTitle>{t("landing.partners")}</LandingPartTitle>
      <PartnersGroup>
        {imgData.map((item: any, key: any) => (
          <img src={item} key={key} alt={key + "partner"} />
        ))}
      </PartnersGroup>
      <ViewMoreBtn>
        <Button
          value={t("buttons.view_more")}
          onClick={() => {}}
          color="#ffffff00"
          borderLine="#000000"
          font="#000000"
        />
      </ViewMoreBtn>
    </PartnersDiv>
  );
};

export default PartnersPart;
