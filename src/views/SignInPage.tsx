import { LogoImg, SignInDiv } from "components/signin/StyledSignIn";
import React from "react";

import logoImg from "assets/icons/logo.png";
import SignInForm from "components/signin/SignInForm";

const SignInPage: React.FC = () => {
  return (
    <SignInDiv>
      <LogoImg src={logoImg} alt="logo Image" />
      <SignInForm />
    </SignInDiv>
  );
};

export default SignInPage;
