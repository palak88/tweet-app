import React from "react";

import style from "./index.module.css";

interface IButton {
  label: string;
}

export const Button: React.FC<IButton> = ({ label }) => {
  return <button className={style.button}>{label}</button>;
};
