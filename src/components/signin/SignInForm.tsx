import { signinAction } from "action/action";
import Button from "components/custom/Button/Button";
import FormInput from "components/custom/FormInput/FormInput";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SignInButton,
  SignInFormDiv,
  SignInFormGroup,
  SignInTitle,
} from "./StyledSignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import btnSpinner from "assets/svg/spinnerButton.svg";
import { useHistory } from "react-router";
// import { withRouter } from "react-router";
// import { withRouter } from "react-router-dom";

const SignInForm = () => {
  const { t } = useTranslation();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const handleLogIn = async () => {
    if (username === "") {
      setErrors((prev: any) => ({
        ...prev,
        username: "Username Field is required.",
      }));
    } else {
      setErrors((prev: any) => ({
        ...prev,
        username: "",
      }));
    }
    if (password === "") {
      setErrors((prev: any) => ({
        ...prev,
        password: "Password Field is required.",
      }));
    } else {
      setErrors((prev: any) => ({
        ...prev,
        password: "",
      }));
    }
    if (username !== "" && password !== "") {
      const data: any = {
        username: username,
        password: password,
      };
      setloading(true);
      const res = await signinAction(data);
      setloading(false);
      if (res.success) {
        history.push("/stats");
        localStorage.setItem("currentUrl", "stats");
        localStorage.setItem("isAuth", "true");
      } else {
        toast.error(res.error, { autoClose: 3000 });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SignInFormDiv>
      <ToastContainer />
      <SignInTitle>{t("signin.title")}</SignInTitle>
      <SignInFormGroup>
        <FormInput
          type="text"
          onChange={(e: any) => {
            setusername(e.target.value);
          }}
          name="username"
          value={username}
          placeholder={t("signin.username")}
          error={errors.username}
        />
        <FormInput
          type="password"
          onChange={(e: any) => {
            setpassword(e.target.value);
          }}
          name="password"
          value={password}
          placeholder={t("signin.password")}
          error={errors.password}
        />
      </SignInFormGroup>
      <SignInButton>
        {loading ? (
          <Button
            value={<img src={btnSpinner} alt="spinner" />}
            onClick={() => {}}
            color="#FC5F77"
            borderLine="#FC5F77"
            font="#ffffff"
          />
        ) : (
          <Button
            value={t("buttons.lets_go")}
            onClick={handleLogIn}
            color="#FC5F77"
            borderLine="#FC5F77"
            font="#ffffff"
          />
        )}
      </SignInButton>
    </SignInFormDiv>
  );
};

export default SignInForm;
