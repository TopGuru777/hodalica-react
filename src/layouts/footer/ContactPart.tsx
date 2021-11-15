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
      <ContactItem href="https://hodalica.ba" target="_blank">
        <img src={WebsiteSVG} alt="website" />
        {t("footer.contact.website")}
      </ContactItem>
      <ContactItem href={`mailto:${t("footer.contact.email")}?Subject=Hello!`}>
        <img src={EmailSVG} alt="email" />
        {t("footer.contact.email")}
      </ContactItem>
      <ContactItem href={`tel:+${t("footer.contact.phone")}`}>
        <img src={PhoneSVG} alt="phone" />
        {t("footer.contact.phone")}
      </ContactItem>
      <ContactItem
        href={`https://instagram.com/${t("footer.contact.instagram")}`}
        target="_blank"
      >
        <img src={InstagramSVG} alt="instagram" />
        {t("footer.contact.instagram")}
      </ContactItem>
    </ContactDiv>
  );
}

export default ContactPart;
