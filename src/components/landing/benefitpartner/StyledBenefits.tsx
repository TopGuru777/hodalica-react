import styled from "styled-components";

export const BenefitPartnerDiv = styled.div`
  margin-bottom: 127px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    margin-bottom: 80px;
    transition: 0.2s linear;
    margin-top: -40px;
  }
`;

export const Benefits = styled.div`
  margin-top: 42px;
  & > *:not(:last-child) {
    margin-bottom: 35px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 20px;
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const BenefitItem = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: 25px;
  img {
    margin-right: 33px;
    width: 55px;
    height: 55px;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 1024px) {
    font-size: 22px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    img {
      margin-right: 29px;
      width: 50px;
      height: 50px;
    }
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 15px;
    img {
      margin-right: 15px;
      width: 30px;
      height: 30px;
    }
    transition: 0.2s linear;
  }
`;
