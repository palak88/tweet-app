import React from "react";

import style from "./index.module.css";

interface ICardData {
  data: any;
}

export const CardData: React.FC<ICardData> = ({ data }) => {
  return (
    <div className={style.card_data_container}>
      <div className={style.emoticon_container}>{data?.icon}</div>
      <div className={style.card_data_comment}>{data?.comment}</div>
    </div>
  );
};
