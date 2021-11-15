import styled from "styled-components";

export const SignInDiv = styled.div`
  max-width: 348px;
  width: 80%;
  margin: 50px auto 200px auto;
  display: flex;
  flex-direction: column;
  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    margin: 0 auto 100px auto;
    transition: 0.2s linear;
  }
`;

export const LogoImg = styled.img`
  align-self: center;
  width: 132px;
  @media screen and (max-width: 425px) {
    width: 100px;
    transition: 0.2s linear;
  }
`;

export const SignInFormDiv = styled.div``;

export const SignInTitle = styled.div`
  font-weight: 900;
  font-size: 58px;
  margin: 28px 0 15px 0;
  @media screen and (max-width: 425px) {
    font-size: 50px;
    transition: 0.2s linear;
  }
`;

export const SignInFormGroup = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 11px;
`;

export const SignInButton = styled.div`
  margin-top: 17px;
  font-size: 20px;
  font-weight: 700;
`;
