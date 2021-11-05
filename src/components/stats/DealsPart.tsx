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

const DealsPart = () => {
  const { t } = useTranslation();
  return (
    <DealsPartDiv>
      <DealsRedeemedDiv>
        <DRTitle>{t("stats.deals_redeemed")}</DRTitle>
        <DRValue>16</DRValue>
      </DealsRedeemedDiv>
      <DealsRedeemedDiv>
        <DHeavyTitle>{t("stats.clients")}</DHeavyTitle>
        <DHeavyValue>14</DHeavyValue>
      </DealsRedeemedDiv>
      <DealsRedeemedDiv>
        <DTitle>{t("stats.new_clients")}</DTitle>
        <DValue>83% | 11</DValue>
      </DealsRedeemedDiv>
      <DealsRedeemedDiv>
        <DTitle>{t("stats.existing_clients")}</DTitle>
        <DValue>17% | 1</DValue>
      </DealsRedeemedDiv>
    </DealsPartDiv>
  );
};

export default DealsPart;
