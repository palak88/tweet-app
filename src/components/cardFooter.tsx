import React from "react";

import Image from "next/image";

import style from "./index.module.css";

interface ICardFooter {
  footerDetails: any;
}

export const CardFooter: React.FC<ICardFooter> = ({ footerDetails }) => {
  return (
    <div className={style.footer_container}>
      <Image
        src="/images/Chat_Bubble.svg"
        alt="chat_bubble"
        height={20}
        width={20}
      />

      <div>{footerDetails?.comment_count ?? 0} comments</div>
    </div>
  );
};
