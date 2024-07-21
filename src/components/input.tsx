import React from "react";

import style from "./index.module.css";

import Image from "next/image";

interface IInputField {
  placeholder: string;
  type?: string;
  icon?: any;
}

export const InputField: React.FC<IInputField> = ({
  placeholder,
  type = "text",
  icon,
}) => {
  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        placeholder={placeholder}
        className={style.inputField}
      />

      {icon && (
        <Image
          src={icon?.iconPath}
          alt={icon?.alt}
          width={20}
          height={20}
          className={style.inputIcon}
        />
      )}
    </div>
  );
};
