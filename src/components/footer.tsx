import React from "react";

import style from "./index.module.css";

interface IFormFooter {
  footerText: string;
  linkText: string;
  onLinkClick?: any;
}

export const FormFooter: React.FC<IFormFooter> = ({
  footerText,
  linkText,
  onLinkClick,
}) => {
  return (
    <div className={style.footerContainer}>
      <span className={style.footerText}>{footerText}</span>
      <span className={style.linkText} onClick={onLinkClick}>
        {linkText}
      </span>
    </div>
  );
};
