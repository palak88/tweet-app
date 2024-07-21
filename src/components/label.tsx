import React from "react";

import style from "./index.module.css";

interface IInputLabel {
  label: string;
  fontSize?: string;
}

export const InputLabel: React.FC<IInputLabel> = ({ label, fontSize }) => {
  return (
    <div
      className={style.label}
      style={{ fontSize: fontSize ? fontSize : "14px" }}
    >
      {label}
    </div>
  );
};
