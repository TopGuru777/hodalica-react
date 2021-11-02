import React from "react";
import { useTranslation } from "react-i18next";
import { FooterSubTitle, QuickLinkDiv, QuickLinkItem } from "./StyledFooter";

function QuickLinkPart() {
  const { t } = useTranslation();

  return (
    <QuickLinkDiv>
      <FooterSubTitle>{t("footer.quick_links.title")}</FooterSubTitle>
      <QuickLinkItem>{t("footer.quick_links.links.for_users")}</QuickLinkItem>
      <QuickLinkItem>
        {t("footer.quick_links.links.for_partners")}
      </QuickLinkItem>
      <QuickLinkItem>{t("footer.quick_links.links.how_it_work")}</QuickLinkItem>
      <QuickLinkItem>{t("footer.quick_links.links.partners")}</QuickLinkItem>
      <QuickLinkItem>
        {t("footer.quick_links.links.privacy_policy")}
      </QuickLinkItem>
      <QuickLinkItem>
        {t("footer.quick_links.links.cookie_policy")}
      </QuickLinkItem>
      <QuickLinkItem>
        {t("footer.quick_links.links.terms_conditions")}
      </QuickLinkItem>
    </QuickLinkDiv>
  );
}

export default QuickLinkPart;
