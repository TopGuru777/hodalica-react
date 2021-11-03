import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: fixed;
  width: calc(100% - 60px);
  top: 0;
  display: flex;
  height: 117px;
  z-index: 1;
  background-color: #fffaf2;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

export const scrollEvent = () => {
  const scrollmove: any = document.getElementById("Header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollmove.style.boxShadow = "0 3px 21px #00000040";
    scrollmove.style.backgroundColor = "#FDF5E9";
  } else {
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
`;

export const MarkTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #fc5f77;
`;

export const MarkSubTitle = styled.div`
  font-size: 14px;
  color: #fc5f7780;
`;

export const MenuItemDiv = styled.div`
  display: flex;
`;

export const Menus = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.div`
  svg {
    margin-right: 9px;
    transition: 0.2s linear;
  }
  margin: 0 25px;
  font-size: 18px;
  font-weight: 500;
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
  img {
    width: 34.5px;
    cursor: pointer;
  }
`;
