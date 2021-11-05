import Button from "components/custom/Button/Button";
import FormInput from "components/custom/FormInput/FormInput";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SignInButton,
  SignInFormDiv,
  SignInFormGroup,
  SignInTitle,
} from "./StyledSignIn";

const SignInForm = () => {
  const { t } = useTranslation();
  const [partnerCode, setPartnerCode] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  return (
    <SignInFormDiv>
      <SignInTitle>{t("signin.title")}</SignInTitle>
      <SignInFormGroup>
        <FormInput
          type="text"
          onChange={(e: any) => {
            setPartnerCode(e.target.value);
          }}
          name="partnerCode"
          value={partnerCode}
          placeholder={t("signin.partner_code")}
        />
        <FormInput
          type="text"
          onChange={(e: any) => {
            setConfirmCode(e.target.value);
          }}
          name="confirmCode"
          value={confirmCode}
          placeholder={t("signin.confirm_partner_code")}
        />
      </SignInFormGroup>
      <SignInButton>
        <Button
          value={t("buttons.lets_go")}
          onClick={() => {
            window.location.href = "/stats";
            localStorage.setItem("currentUrl", "stats");
            localStorage.setItem("isAuth", "true");
          }}
          color="#FC5F77"
          borderLine="#FC5F77"
          font="#ffffff"
        />
      </SignInButton>
    </SignInFormDiv>
  );
};

export default SignInForm;
