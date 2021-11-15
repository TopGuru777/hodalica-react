import React from "react";
import { useTranslation } from "react-i18next";
import {
  DealsPartDiv,
  DealsRedeemedDiv,
  DHeavyTitle,
  DHeavyValue,
  DRTitle,
  DRValue,
  DTitle,
  DValue,
} from "./StyledStats";

const DealsPart = ({ data }: any) => {
  const { t } = useTranslation();
  return (
    <DealsPartDiv>
      <DealsRedeemedDiv>
        <DRTitle>{t("stats.deals_redeemed")}</DRTitle>
        <DRValue>{data.total}</DRValue>
      </DealsRedeemedDiv>
      <DealsRedeemedDiv>
        <DHeavyTitle>{t("stats.clients")}</DHeavyTitle>
        <DHeavyValue>{data.clients}</DHeavyValue>
      </DealsRedeemedDiv>
      <DealsRedeemedDiv>
        <DTitle>{t("stats.new_clients")}</DTitle>
        <DValue>{data.newClients}</DValue>
      </DealsRedeemedDiv>
      <DealsRedeemedDiv>
        <DTitle>{t("stats.existing_clients")}</DTitle>
        <DValue>{data.existingClients}</DValue>
      </DealsRedeemedDiv>
    </DealsPartDiv>
  );
};

export default DealsPart;
