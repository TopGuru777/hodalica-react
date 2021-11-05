import styled from "styled-components";

export const FooterDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20%;
  margin-bottom: 80px;
  @media screen and (max-width: 1100px) {
    grid-column-gap: 15%;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    transition: 0.2s linear;
  }
`;

export const LinksPart = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 50%;
    margin: auto;
    flex-direction: column;
    transition: 0.2s linear;
    & > *:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const AboutDescDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuickLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16.5px;
`;

export const QuickLinkItem = styled.div`
  position: relative;
  margin-top: 6.7px;
  cursor: pointer;
  transition: 0.2s linear;
  font-weight: 600;
  :hover {
    color: #fc5f77;
    transition: 0.2s linear;
  }
`;

export const FooterSubTitle = styled.div`
  font-size: 16.5px;
  margin-bottom: 1px;
  font-weight: 900;
`;

export const ContactDiv = styled.div``;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12.5px;
  font-weight: 600;
  img {
    margin-right: 9px;
  }
`;

export const FooterMarkDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const AboutDesc = styled.div`
  margin-top: 16.5px;
  font-weight: 600;
  font-size: 16.5px;
`;

export const MarkImg = styled.img`
  width: 62px;
  margin-right: 15px;
`;

export const MarkText = styled.div`
  color: #fc5f77;
`;

export const MarkTitle = styled.div`
  font-weight: 900;
  font-size: 37px;
`;

export const MarkSubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
