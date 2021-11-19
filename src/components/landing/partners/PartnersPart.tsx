import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle } from "../StyledLandingPage";
import { PartnersDiv, PartnersGroup, ViewMoreBtn } from "./StyledPartner";

import Button from "components/custom/Button/Button";
import { partnerImgs } from "./data";

const PartnersPart = () => {
  const { t } = useTranslation();
  const [viewmore, setViewmore] = useState(true);

  return (
    <PartnersDiv>
      <LandingPartTitle>{t("landing.partners")}</LandingPartTitle>
      <PartnersGroup>
        {partnerImgs.map((item: any, key: any) => {
          if (viewmore) {
            if (key > 11) {
              return null;
            }
          }
          return <img src={item} key={key} alt={key + "partner"} />;
        })}
      </PartnersGroup>
      <ViewMoreBtn>
        <Button
          value={viewmore ? t("buttons.view_more") : t("buttons.view_less")}
          onClick={() => {
            setViewmore((prev) => !prev);
          }}
          color="#ffffff00"
          borderLine="#000000"
          font="#000000"
        />
      </ViewMoreBtn>
    </PartnersDiv>
  );
};

export default PartnersPart;
