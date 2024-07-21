import React from "react";

import Image from "next/image";

import style from "./index.module.css";
import { LoginForm } from "./form";

export const Login: React.FC = () => {
  return (
    <div className={style.login_container}>
      <Image src="/images/Logo.svg" alt="Logo" width={40} height={40} />
      <LoginForm />
    </div>
  );
};
