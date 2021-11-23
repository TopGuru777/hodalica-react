import { LogoImg, SignInDiv } from "components/signin/StyledSignIn";
import React from "react";

import logoImg from "assets/icons/logoBlack.svg";
import SignInForm from "components/signin/SignInForm";
import Footer from "layouts/footer";

// import { useRouter } from "action/action";
import { withRouter } from "react-router-dom";
const SignInPage: React.FC = ({ history }: any) => {
  // const history = useRouter();
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
        sadfasdfasdfasdf
        <SignInForm />
      </SignInDiv>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(SignInPage);
