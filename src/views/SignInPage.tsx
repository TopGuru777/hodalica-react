import { LogoImg, SignInDiv } from "components/signin/StyledSignIn";
import React from "react";

import logoImg from "assets/icons/logoBlack.svg";
import SignInForm from "components/signin/SignInForm";
import Footer from "layouts/footer";

import { useRouter } from "action/action";
const SignInPage: React.FC = () => {
  const history = useRouter();
  return (
    <React.Fragment>
      <SignInDiv>
        <LogoImg
          src={logoImg}
          alt="logo Image"
          onClick={() => {
            history.push("/");
          }}
        />
        <SignInForm />
      </SignInDiv>
      <Footer />
    </React.Fragment>
  );
};

export default SignInPage;
