import React from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle } from "../StyledLandingPage";
import {
  FaqList,
  FaqListItem,
  FaqPartnerDiv,
  FaqSubtitle,
  ListContent,
  ListTitle,
} from "./StyledFaq";

const FaqPartnerPart = () => {
  const { t } = useTranslation();
  return (
    <FaqPartnerDiv>
      <LandingPartTitle>{t("landing.faq_title")}</LandingPartTitle>
      <FaqSubtitle>{t("landing.for_partners_up")}</FaqSubtitle>
      <FaqList>
        <FaqListItem>
          <ListTitle>{t("landing.faq_parter_data.question_1")}</ListTitle>
          <ListContent>{t("landing.faq_parter_data.answer_1")}</ListContent>
        </FaqListItem>
        <FaqListItem>
          <ListTitle>{t("landing.faq_parter_data.question_2")}</ListTitle>
          <ListContent>{t("landing.faq_parter_data.answer_2_1")}</ListContent>
          <br />
          <ListContent>{t("landing.faq_parter_data.answer_2_2")}</ListContent>
          <ListContent>{t("landing.faq_parter_data.answer_2_3")}</ListContent>
          <ListContent>{t("landing.faq_parter_data.answer_2_4")}</ListContent>
        </FaqListItem>
        <FaqListItem>
          <ListTitle>{t("landing.faq_parter_data.question_3")}</ListTitle>
          <ListContent>{t("landing.faq_parter_data.answer_3")}</ListContent>
        </FaqListItem>
        <FaqListItem>
          <ListTitle>{t("landing.faq_parter_data.question_4")}</ListTitle>
          <ListContent>{t("landing.faq_parter_data.answer_4")}</ListContent>
        </FaqListItem>
        <FaqListItem>
          <ListTitle>{t("landing.faq_parter_data.question_5")}</ListTitle>
          <ListContent>{t("landing.faq_parter_data.answer_5")}</ListContent>
        </FaqListItem>
      </FaqList>
    </FaqPartnerDiv>
  );
};

export default FaqPartnerPart;
