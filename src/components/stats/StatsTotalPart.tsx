import React from "react";
import { useTranslation } from "react-i18next";
import {
  StateCountDiv,
  StatsTotalDiv,
  StatsTotalPartDiv,
  SubTotalText,
  TotalText,
} from "./StyledStats";

const StatsTotalPart = (data: any) => {
  const { t } = useTranslation();
  return (
    <StatsTotalPartDiv>
      <StatsTotalDiv>
        <StateCountDiv>
          <TotalText>{t("stats.app_downloads")}</TotalText>
          <TotalText>271</TotalText>
        </StateCountDiv>
        <StateCountDiv>
          <SubTotalText>{t("stats.android")}</SubTotalText>
          <SubTotalText>182</SubTotalText>
        </StateCountDiv>
        <StateCountDiv>
          <SubTotalText>{t("stats.ios")}</SubTotalText>
          <SubTotalText>89</SubTotalText>
        </StateCountDiv>
      </StatsTotalDiv>
      <StatsTotalDiv>
        <StateCountDiv>
          <TotalText>{t("stats.app_signups")}</TotalText>
          <TotalText>128</TotalText>
        </StateCountDiv>
        <StateCountDiv>
          <SubTotalText>{t("stats.android")}</SubTotalText>
          <SubTotalText>86</SubTotalText>
        </StateCountDiv>
        <StateCountDiv>
          <SubTotalText>{t("stats.ios")}</SubTotalText>
          <SubTotalText>42</SubTotalText>
        </StateCountDiv>
      </StatsTotalDiv>
    </StatsTotalPartDiv>
  );
};

export default StatsTotalPart;
