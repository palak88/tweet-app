import React from "react";

import style from "./index.module.css";

export const Header: React.FC = () => {
  return (
    <div className={style.header_container}>
      <div className={style.heading}>Hello Jane</div>

      <div className={style.headerText}>
        How are you doing today? Would you like to share something with the
        community 🤗
      </div>
    </div>
  );
};
