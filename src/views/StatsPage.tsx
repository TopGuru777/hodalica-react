import { StatsSVG } from "components/custom/CustomSVG";
import DatePickerGroup from "components/custom/DatePickerGroup/DatePickerGroup";
import ChartsPart from "components/stats/ChartsPart";
import DealsPart from "components/stats/DealsPart";
import StatListPart from "components/stats/StatListPart";
import StatsTotalPart from "components/stats/StatsTotalPart";
import { HrDiv, StatsPageDiv } from "components/stats/StyledStats";
import { Container, PageTitle } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";

const StatsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <StatsPageDiv>
        <PageTitle>
          <StatsSVG />
          {t("stats.title")}
        </PageTitle>
        <DatePickerGroup />

        <DealsPart />
        <ChartsPart />
        <StatListPart />
        <HrDiv />
        <StatsTotalPart />
      </StatsPageDiv>
    </Container>
  );
};

export default StatsPage;
