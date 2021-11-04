import styled from "styled-components";

export const BenefitPartnerDiv = styled.div`
  margin-bottom: 127px;
`;

export const Benefits = styled.div`
  margin-top: 42px;
  & > *:not(:last-child) {
    margin-bottom: 35px;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  img {
    margin-right: 33px;
    width: 55px;
    height: 55px;
  }
`;
