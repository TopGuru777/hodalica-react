import styled from "styled-components";

export const FooterDiv = styled.div`
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20%;
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
  :hover {
    color: #fc5f77;
    transition: 0.2s linear;
  }
`;

export const FooterSubTitle = styled.div`
  font-size: 16.5px;
  margin-bottom: 1px;
`;

export const ContactDiv = styled.div``;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12.5px;
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
  font-weight: 500;
  font-size: 37px;
`;

export const MarkSubTitle = styled.div`
  font-size: 18px;
`;
