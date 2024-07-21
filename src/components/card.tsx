import React from "react";

import style from "./index.module.css";
import { CardHeader } from "./cardHeader";
import { CardData } from "./cardData";
import { CardFooter } from "./cardFooter";

interface IPost {
  details: any;
}

export const Post: React.FC<IPost> = ({ details }) => {
  return (
    <div className={style.card_container}>
      <CardHeader headerDetails={details?.header} />

      <CardData data={details?.data} />

      <CardFooter footerDetails={details?.footer} />
    </div>
  );
};
