import { LogoImg, SignInDiv } from "components/signin/StyledSignIn";
import React from "react";

import logoImg from "assets/icons/logo.png";
import SignInForm from "components/signin/SignInForm";
import Footer from "layouts/footer";

const SignInPage: React.FC = () => {
  return (
    <React.Fragment>
      <SignInDiv>
        <LogoImg src={logoImg} alt="logo Image" />
        <SignInForm />
      </SignInDiv>
      <Footer />
    </React.Fragment>
  );
};

export default SignInPage;
