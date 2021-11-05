import styled from "styled-components";

export const BenefitUserDiv = styled.div`
  width: 40%;
  margin: 200px auto 200px auto;
  transition: 0.2s linear;
  @media screen and (max-width: 1280px) {
    width: 50%;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 1024px) {
    width: 60%;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    width: 75%;
    margin: 100px auto 100px auto;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    width: calc(100% - 30px);
    transition: 0.2s linear;
  }
`;
