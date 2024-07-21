import React from "react";

import Image from "next/image";

import style from "./index.module.css";

interface ICardHeader {
  headerDetails: any;
}

export const CardHeader: React.FC<ICardHeader> = ({ headerDetails }) => {
  return (
    <div className={style.card_header_container}>
      <div className={style.card_header_profile_container}>
        <Image
          src={headerDetails?.image}
          alt="profile_picture"
          height={44}
          width={44}
        />

        <div className={style.text_container}>
          <div className={style.name}>{headerDetails?.name}</div>
          <div className={style.time}>{headerDetails?.time}</div>
        </div>
      </div>

      <Image src="/images/menu.svg" alt="menu" height={20} width={20} />
    </div>
  );
};
