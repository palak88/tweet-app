"use client";

import {
  Button,
  CloseButton,
  FormFooter,
  FormHeader,
  InputField,
  InputLabel,
} from "@/components";
import React from "react";

import style from "./index.module.css";
import { useRouter } from "next/navigation";

interface ILoginForm {
  showWithBackdrop?: boolean;
  showCloseIcon?: boolean;
  handleCloseClick?: any;
  handleLinkClick?: any;
}

export const LoginForm: React.FC<ILoginForm> = ({
  showWithBackdrop,
  showCloseIcon,
  handleCloseClick,
  handleLinkClick,
}) => {
  const router = useRouter();

  const goToTweetsPage = () => {
    router.push("/posts");
  };

  return (
    <div className={showWithBackdrop ? style.signup_container : ""}>
      <div className={style.form_container}>
        {showCloseIcon && (
          <div className={style.close_button_container}>
            <CloseButton onClick={handleCloseClick} />
          </div>
        )}

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

        <Button
          label="Login now"
          onClick={handleCloseClick ? handleCloseClick : goToTweetsPage}
        />

        <FormFooter
          footerText="Not registered yet? "
          linkText="Register →"
          onLinkClick={handleLinkClick}
        />
      </div>
    </div>
  );
};
