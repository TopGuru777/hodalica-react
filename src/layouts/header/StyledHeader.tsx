import styled from "styled-components";

export const HeaderBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;

  height: 117px;
  z-index: 2;
  background-color: #fffaf2;

  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    height: 80px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 100%;
`;

export const scrollEvent = () => {
  const scrollmove: any = document.getElementById("Header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollmove.style.boxShadow = "0 3px 21px #00000040";
    scrollmove.style.backgroundColor = "#FDF5E9";
    scrollmove.style.height = "80px";
  } else {
    if (window.innerWidth <= 425) {
      scrollmove.style.height = "80px";
    } else {
      scrollmove.style.height = "117px";
    }
    scrollmove.style.boxShadow = "none";
    scrollmove.style.backgroundColor = "#fffaf2";
  }
};

export const LogoDiv = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const MarkText = styled.div``;

export const MarkImg = styled.img`
  width: 46px;
  height: 48px;
  margin-right: 20px;
  transition: all 0.2s linear;
  @media screen and (max-width: 425px) {
    width: 36px;
    height: 38px;
    margin-right: 10px;
    transition: all 0.2s linear;
  }
`;

export const MarkTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #fc5f77;
`;

export const MarkSubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #fc5f7780;
`;

export const MarkBigTitle = styled.div`
  font-weight: 900;
  font-size: 36px;
  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    font-size: 26px;
    transition: 0.2s linear;
  }
`;

export const MenuItemDiv = styled.div`
  display: flex;
`;

export const Menus = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 40px;
  }
`;

export const MenuShowBtn = styled.div`
  margin-left: 20px;
  font-size: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    margin-left: 10px;
    transition: 0.2s linear;
  }
`;

type activeProps = {
  active: boolean;
};

export const MenuItem = styled.div<activeProps>`
  font-weight: 600;
  svg {
    margin-right: 9px;
    transition: 0.2s linear;
    fill: #000000;
    ${({ active }) => active && "fill: #fc5f77;"};
  }
  color: ${({ active }) => (active ? "#fc5f77" : "#000000")};
  /* color: #000000; */
  font-size: 18px;
  transition: 0.2s linear;
  :hover {
    color: #fc5f77;
    svg {
      fill: #fc5f77;
      transition: 0.2s linear;
    }
  }
  cursor: pointer;
`;

export const LogDiv = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  padding: 0 33px;
  width: 173px;
  font-size: 18px;
`;

export const TransDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
  align-items: center;
  transition: 0.2s linear;
  img {
    width: 33px;
    cursor: pointer;
  }
  @media screen and (max-width: 425px) {
    grid-gap: 10px;
    transition: 0.2s linear;
    img {
      width: 25px;
      cursor: pointer;
    }
  }
`;

type MenuProps = {
  flag: boolean;
};
export const MobileMenuDiv = styled.div<MenuProps>`
  ${({ flag }) => (!flag ? "left: -290px;" : "left: 0;")};
  transition: 0.2s linear;
  width: 280px;
  position: absolute;
  top: 0;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 5px 10px #000000;
  z-index: 2;
`;

export const SideMenuDiv = styled.div`
  margin-top: 50px;
`;

export const SideMenu = styled.div<activeProps>`
  display: flex;
  font-weight: 600;
  align-items: center;
  padding: 15px 30px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  transition: 0.2s linear;
  svg {
    margin-right: 9px;
    transition: 0.2s linear;
    fill: #fff;
    ${({ active }) => active && "fill: #fc5f77;"};
  }
  color: ${({ active }) => (active ? "#fc5f77" : "white")};
  :hover {
    color: #fc5f77;
    svg {
      fill: #fc5f77;
      transition: 0.2s linear;
    }
  }
`;

export const SideBottomDiv = styled.div`
  margin-bottom: 50px;
`;
