import {
  Button,
  FormFooter,
  FormHeader,
  InputField,
  InputLabel,
} from "@/components";
import React from "react";

import style from "./index.module.css";

export const LoginForm: React.FC = () => {
  return (
    <div className={style.form_container}>
      <FormHeader heading="welcome back" subHeading="Log into your account" />

      <InputLabel label="Email or Username" />
      <InputField placeholder="Enter Email or Username" />

      <div className={style.password_label_container}>
        <InputLabel label="Password" />
        <InputLabel label="Forgot password?" fontSize={"12px"} />
      </div>

      <InputField
        placeholder="Enter your password"
        icon={{ iconPath: "images/eyeIcon.svg", iconAlt: "eye" }}
      />

      <Button label="Login now" />

      <FormFooter footerText="Not registered yet? " linkText="Register →" />
    </div>
  );
};
