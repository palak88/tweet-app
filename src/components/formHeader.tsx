import React from "react";

import style from "./index.module.css";

interface IFormHeader {
  heading: string;
  subHeading: string;
}

export const FormHeader: React.FC<IFormHeader> = ({ heading, subHeading }) => {
  return (
    <React.Fragment>
      <div className={style.heading}>{heading}</div>

      <div className={style.subHeading}>{subHeading}</div>
    </React.Fragment>
  );
};
