import React from "react";
import {
  HeaderDiv,
  LogDiv,
  LogoDiv,
  MarkImg,
  MarkSubTitle,
  MarkText,
  MarkTitle,
  MenuItem,
  MenuItemDiv,
  Menus,
  scrollEvent,
  TransDiv,
} from "./StyledHeader";

import { useTranslation } from "react-i18next";

import LogoIMG from "assets/icons/color-logo1.png";
import en_img from "assets/icons/English.png";
import bn_img from "assets/icons/bosnian.png";
import { ProfileSVG, ReviewSVG, StatsSVG } from "components/custom/CustomSVG";
import Button from "components/custom/Button/Button";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  window.onscroll = function () {
    scrollEvent();
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <HeaderDiv id="Header">
      <LogoDiv>
        <MarkImg src={LogoIMG} alt="logo" />
        <MarkText>
          <MarkTitle>{t("header_mark.mark_title")}</MarkTitle>
          <MarkSubTitle>{t("header_mark.mark_subtitle")}</MarkSubTitle>
        </MarkText>
      </LogoDiv>
      <MenuItemDiv>
        <Menus>
          <MenuItem>
            <StatsSVG />
            {t("menus.stats")}
          </MenuItem>
          <MenuItem>
            <ReviewSVG />
            {t("menus.reviews")}
          </MenuItem>
          <MenuItem>
            <ProfileSVG />
            {t("menus.profile")}
          </MenuItem>
        </Menus>
        <LogDiv>
          <Button
            value={t("buttons.logout")}
            onClick={() => {}}
            color="#ffffff00"
            borderLine="#000000"
            font="#000000"
          />
        </LogDiv>
        <TransDiv>
          <img
            src={bn_img}
            onClick={() => changeLanguage("bn")}
            alt="bosnian"
          />
          <img
            src={en_img}
            onClick={() => changeLanguage("en")}
            alt="english"
          />
        </TransDiv>
      </MenuItemDiv>
    </HeaderDiv>
  );
};

export default Header;
