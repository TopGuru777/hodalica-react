import { Container } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaqList,
  FaqListItem,
  FaqUserDiv,
  FaqSubtitle,
  ListContent,
  ListTitle,
  ListContentGroup,
} from "../faqpatner/StyledFaq";
import { LandingPartTitle } from "../StyledLandingPage";

const FaqUserPart = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <FaqUserDiv>
        <LandingPartTitle>{t("landing.faq_title")}</LandingPartTitle>
        <FaqSubtitle>{t("landing.for_users_up")}</FaqSubtitle>
        <FaqList>
          <FaqListItem>
            <ListTitle>{t("landing.faq_user_data.question_1")}</ListTitle>
            <ListContent>{t("landing.faq_user_data.answer_1")}</ListContent>
          </FaqListItem>
          <FaqListItem>
            <ListTitle>{t("landing.faq_user_data.question_2")}</ListTitle>
            <ListContent>{t("landing.faq_user_data.answer_2_1")}</ListContent>
            <ListContentGroup>
              <ListContent>
                <div /> {t("landing.faq_user_data.answer_2_2")}
              </ListContent>
              <ListContent>
                <div /> {t("landing.faq_user_data.answer_2_3")}
              </ListContent>
            </ListContentGroup>
            <ListContent>{t("landing.faq_user_data.answer_2_4")}</ListContent>
          </FaqListItem>
          <FaqListItem>
            <ListTitle>{t("landing.faq_user_data.question_3")}</ListTitle>
            <ListContent>{t("landing.faq_user_data.answer_3")}</ListContent>
          </FaqListItem>
          <FaqListItem>
            <ListTitle>{t("landing.faq_user_data.question_4")}</ListTitle>
            <ListContent>{t("landing.faq_user_data.answer_4")}</ListContent>
          </FaqListItem>
          <FaqListItem>
            <ListTitle>{t("landing.faq_user_data.question_5")}</ListTitle>
            <ListContent>{t("landing.faq_user_data.answer_5")}</ListContent>
          </FaqListItem>
          <FaqListItem>
            <ListTitle>{t("landing.faq_user_data. ")}</ListTitle>
            <ListContent>{t("landing.faq_user_data.answer_6")}</ListContent>
          </FaqListItem>
        </FaqList>
      </FaqUserDiv>
    </Container>
  );
};

export default FaqUserPart;
