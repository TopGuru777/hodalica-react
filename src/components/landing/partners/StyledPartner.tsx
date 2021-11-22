import styled from "styled-components";

export const PartnersDiv = styled.div`
  margin-bottom: 117px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    transition: 0.2s linear;
    margin-bottom: 80px;
    margin-top: -30px;
  }
`;

export const PartnersGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 7%;
  grid-row-gap: 40px;
  img {
    width: 100%;
  }
  margin: 29px 0 55px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 15px;

    img {
      width: 100%;
      margin: auto;
    }
  }
`;

export const ViewMoreBtn = styled.div`
  max-width: 220px;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  margin: auto;
  z-index: 1;
`;
