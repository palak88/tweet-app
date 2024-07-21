import React from "react";

import Image from "next/image";

import style from "./index.module.css";

interface ICloseButton {
  onClick?: any;
}

export const CloseButton: React.FC<ICloseButton> = ({ onClick }) => {
  return (
    <div className={style.close_container} onClick={onClick}>
      <Image src="/images/close.svg" alt="close" height={16} width={20} />
    </div>
  );
};
