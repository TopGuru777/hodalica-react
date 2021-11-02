import React from "react";
import { ContactDiv, ContactItem, FooterSubTitle } from "./StyledFooter";
import WebsiteSVG from "assets/svg/world1.svg";
import EmailSVG from "assets/svg/alpha.svg";
import PhoneSVG from "assets/svg/phone.svg";
import InstagramSVG from "assets/svg/instagram.svg";
import { useTranslation } from "react-i18next";

function ContactPart() {
  const { t } = useTranslation();
  return (
    <ContactDiv>
      <FooterSubTitle>{t("footer.contact.title")}</FooterSubTitle>
      <ContactItem>
        <img src={WebsiteSVG} alt="website" />
        {t("footer.contact.website")}
      </ContactItem>
      <ContactItem>
        <img src={EmailSVG} alt="email" />
        {t("footer.contact.email")}
      </ContactItem>
      <ContactItem>
        <img src={PhoneSVG} alt="phone" />
        {t("footer.contact.phone")}
      </ContactItem>
      <ContactItem>
        <img src={InstagramSVG} alt="instagram" />
        {t("footer.contact.instagram")}
      </ContactItem>
    </ContactDiv>
  );
}

export default ContactPart;
