import React from "react";

import style from "../Login/index.module.css";
import {
  Button,
  CloseButton,
  FormFooter,
  FormHeader,
  InputField,
  InputLabel,
} from "@/components";

interface ISignupForm {
  handleCloseClick?: any;
  handleLinkClick?: any;
}

export const SignupForm: React.FC<ISignupForm> = ({
  handleCloseClick,
  handleLinkClick,
}) => {
  return (
    <div className={style.signup_container}>
      <div className={style.form_container_signup}>
        <div className={style.close_button_container}>
          <CloseButton onClick={handleCloseClick} />
        </div>

        <FormHeader
          heading="SIGN UP"
          subHeading="Create an account to continue"
        />

        <InputLabel label="Email" />
        <InputField placeholder="Enter your email" />

        <InputLabel label="Username" />
        <InputField placeholder="Choose a preferred username" />

        <InputLabel label="Password" />
        <InputField
          placeholder="Enter your password"
          icon={{ iconPath: "images/eyeIcon.svg", iconAlt: "eye" }}
        />

        <Button label="Continue" onClick={handleCloseClick} />

        <FormFooter
          footerText="Already have an account? "
          linkText="Login →"
          onLinkClick={handleLinkClick}
        />
      </div>
    </div>
  );
};
