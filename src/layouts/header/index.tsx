import React, { useEffect, useRef, useState } from "react";
import {
  HeaderBar,
  HeaderContainer,
  HeaderDiv,
  LogDiv,
  LogoDiv,
  MarkBigTitle,
  MarkImg,
  MarkSubTitle,
  MarkText,
  MarkTitle,
  MenuItem,
  MenuItemDiv,
  Menus,
  MenuShowBtn,
  MobileMenuDiv,
  scrollEvent,
  SideBottomDiv,
  SideMenu,
  SideMenuDiv,
  TransDiv,
} from "./StyledHeader";

import { useTranslation } from "react-i18next";

import LogoIMG from "assets/icons/color-logo1.png";
import Logo1IMG from "assets/icons/logo.png";
import en_img from "assets/icons/English.png";
import bn_img from "assets/icons/bosnian.png";
import { ProfileSVG, ReviewSVG, StatsSVG } from "components/custom/CustomSVG";
import Button from "components/custom/Button/Button";
import btnSpinner from "assets/svg/spinnerButton.svg";

import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { logoutAction } from "action/action";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [state, setState] = useState({ mobileView: false });
  const { mobileView } = state;
  const [isAuth, setIsAuth] = useState(false);
  const [menuflag, setMenuflag] = useState(false);
  const menuRef = useRef<any>(null);
  const [current, setCurrent] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true" ? true : false);
    const setResponsiveness = () => {
      return window.innerWidth <= 850
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (e: any) => {
    if (menuRef.current && menuRef.current.contains(e.target)) {
      return;
    } else {
      setMenuflag(false);
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  window.onscroll = function () {
    scrollEvent();
  };

  const RenderLogoDiv = () => {
    return (
      <LogoDiv>
        <MarkImg src={isAuth ? LogoIMG : Logo1IMG} alt="logo" />
        <MarkText>
          {isAuth ? (
            <React.Fragment>
              <MarkTitle>{t("header_mark.mark_title")}</MarkTitle>
              <MarkSubTitle>{t("header_mark.mark_subtitle")}</MarkSubTitle>
            </React.Fragment>
          ) : (
            <MarkBigTitle>{t("footer_mark.mark_title")}</MarkBigTitle>
          )}
        </MarkText>
      </LogoDiv>
    );
  };

  const handleLogout = async () => {
    setloading(true);
    await logoutAction();
    setloading(false);
    localStorage.removeItem("isAuth");
    window.location.href = "/";
  };

  const RenderAuthMenu = () => {
    if (isAuth) {
      return (
        <React.Fragment>
          <Menus>
            <Link
              to="/stats"
              style={{ textDecoration: "none" }}
              onClick={() => {
                localStorage.setItem("currentUrl", "/stats");
                setCurrent("/stats");
              }}
            >
              <MenuItem
                active={
                  localStorage.getItem("currentUrl") === "/stats" ||
                  current === "/stats"
                    ? true
                    : false
                }
              >
                <StatsSVG />
                {t("menus.stats")}
              </MenuItem>
            </Link>
            <Link
              to="/reviews"
              style={{ textDecoration: "none" }}
              onClick={() => {
                localStorage.setItem("currentUrl", "/reviews");
                setCurrent("/reviews");
              }}
            >
              <MenuItem
                active={
                  localStorage.getItem("currentUrl") === "/reviews" ||
                  current === "/reviews"
                    ? true
                    : false
                }
              >
                <ReviewSVG />
                {t("menus.reviews")}
              </MenuItem>
            </Link>
            <Link
              to="/profile"
              style={{ textDecoration: "none" }}
              onClick={() => {
                localStorage.setItem("currentUrl", "/profile");
                setCurrent("/profile");
              }}
            >
              <MenuItem
                active={
                  localStorage.getItem("currentUrl") === "/profile" ||
                  current === "/profile"
                    ? true
                    : false
                }
              >
                <ProfileSVG />
                {t("menus.profile")}
              </MenuItem>
            </Link>
          </Menus>
          <LogDiv>
            {loading ? (
              <Button
                value={<img src={btnSpinner} alt="spinner" />}
                onClick={() => {}}
                color="#ffffff00"
                borderLine="#000000"
                font="#000000"
              />
            ) : (
              <Button
                value={t("buttons.logout")}
                onClick={handleLogout}
                color="#ffffff00"
                borderLine="#000000"
                font="#000000"
              />
            )}
          </LogDiv>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Menus>
            <a
              href="/#how"
              style={{ textDecoration: "none" }}
              onClick={() => {
                localStorage.setItem("currentUrl", "/#how");
                setCurrent("/#how");
              }}
            >
              <MenuItem
                active={
                  localStorage.getItem("currentUrl") === "/#how" ||
                  current === "/#how"
                    ? true
                    : false
                }
              >
                {t("menus.how_it_works")}
              </MenuItem>
            </a>
            <a
              href="/#faq"
              style={{ textDecoration: "none" }}
              onClick={() => {
                localStorage.setItem("currentUrl", "/#faq");
                setCurrent("/#faq");
              }}
            >
              <MenuItem
                active={
                  localStorage.getItem("currentUrl") === "/#faq" ||
                  current === "/#faq"
                    ? true
                    : false
                }
              >
                {t("menus.faq")}
              </MenuItem>
            </a>
            <a
              href="/#news"
              style={{ textDecoration: "none" }}
              onClick={() => {
                localStorage.setItem("currentUrl", "/#news");
                setCurrent("/#news");
              }}
            >
              <MenuItem
                active={
                  localStorage.getItem("currentUrl") === "/#news" ||
                  current === "/#news"
                    ? true
                    : false
                }
              >
                {t("menus.news")}
              </MenuItem>
            </a>
          </Menus>
          <Link
            to="/signin"
            style={{ textDecoration: "none" }}
            onClick={() => {
              localStorage.setItem("currentUrl", "/signin");
              setCurrent("/signin");
            }}
          >
            <LogDiv>
              <Button
                value={t("buttons.for_partners")}
                onClick={() => {}}
                color="#ffffff00"
                borderLine="#000000"
                font="#000000"
              />
            </LogDiv>
          </Link>
        </React.Fragment>
      );
    }
  };

  const RenderMenuContainer = () => {
    return (
      <HeaderDiv>
        {localStorage.getItem("currentUrl") !== "/signin" ? (
          <React.Fragment>
            <RenderLogoDiv />
            <MenuItemDiv>
              {!mobileView && <RenderAuthMenu />}

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
              {mobileView && localStorage.getItem("currentUrl") !== "/signin" && (
                <MenuShowBtn onClick={() => setMenuflag(true)}>
                  <TiThMenu />
                </MenuShowBtn>
              )}
            </MenuItemDiv>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div />
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
          </React.Fragment>
        )}
      </HeaderDiv>
    );
  };

  return (
    <HeaderBar id="Header">
      <HeaderContainer>
        <RenderMenuContainer />
      </HeaderContainer>
      {mobileView && (
        <MobileMenuDiv flag={menuflag} ref={menuRef}>
          {isAuth ? (
            <SideMenuDiv>
              <Link
                to="/stats"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.setItem("currentUrl", "/stats");
                  setMenuflag(false);
                  setCurrent("/stats");
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/stats" ||
                    current === "/stats"
                      ? true
                      : false
                  }
                >
                  <StatsSVG />
                  {t("menus.stats")}
                </SideMenu>
              </Link>
              <Link
                to="/reviews"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.setItem("currentUrl", "/reviews");
                  setMenuflag(false);
                  setCurrent("/reviews");
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/reviews" ||
                    current === "/reviews"
                      ? true
                      : false
                  }
                >
                  <ReviewSVG />
                  {t("menus.reviews")}
                </SideMenu>
              </Link>
              <Link
                to="/profile"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.setItem("currentUrl", "/profile");
                  setMenuflag(false);
                  setCurrent("/profile");
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/profile" ||
                    current === "/profile"
                      ? true
                      : false
                  }
                >
                  <ProfileSVG />
                  {t("menus.profile")}
                </SideMenu>
              </Link>
            </SideMenuDiv>
          ) : (
            <SideMenuDiv>
              <a
                href="/#how"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.setItem("currentUrl", "/#how");
                  setCurrent("/#how");
                  setMenuflag(false);
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/#how" ||
                    current === "/#how"
                      ? true
                      : false
                  }
                >
                  {t("menus.how_it_works")}
                </SideMenu>
              </a>
              <a
                href="/#faq"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.setItem("currentUrl", "/#faq");
                  setCurrent("/#faq");
                  setMenuflag(false);
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/#faq" ||
                    current === "/#faq"
                      ? true
                      : false
                  }
                >
                  {t("menus.faq")}
                </SideMenu>
              </a>
              <a
                href="/#news"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.setItem("currentUrl", "/#news");
                  setCurrent("/#news");
                  setMenuflag(false);
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/#news" ||
                    current === "/#news"
                      ? true
                      : false
                  }
                >
                  {t("menus.news")}
                </SideMenu>
              </a>
            </SideMenuDiv>
          )}

          <SideBottomDiv>
            {isAuth ? (
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.removeItem("isAuth");
                  window.location.href = "/";
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/logout" ||
                    current === "/logout"
                      ? true
                      : false
                  }
                >
                  {t("buttons.logout")}
                </SideMenu>
              </Link>
            ) : (
              <Link
                to="/signin"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  localStorage.setItem("currentUrl", "/signin");
                  setMenuflag(false);
                  setCurrent("/signin");
                }}
              >
                <SideMenu
                  active={
                    localStorage.getItem("currentUrl") === "/signin" ||
                    current === "/signin"
                      ? true
                      : false
                  }
                >
                  {t("buttons.for_partners")}
                </SideMenu>
              </Link>
            )}
          </SideBottomDiv>
        </MobileMenuDiv>
      )}
    </HeaderBar>
  );
};

export default Header;
