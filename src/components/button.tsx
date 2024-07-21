import React from "react";

import style from "./index.module.css";

interface IButton {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ label, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {label}
    </button>
  );
};
