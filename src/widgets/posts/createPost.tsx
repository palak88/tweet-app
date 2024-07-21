import React from "react";

import Image from "next/image";

import style from "./index.module.css";

export const CreatePost: React.FC = () => {
  return (
    <div className={style.createPost_container}>
      <div className={style.create_post_title}>Create post</div>

      <div className={style.create_post_input}>
        <div className={style.dialog_container}>💬</div>
        <span className={style.input_text}>How are you feeling today?</span>
      </div>

      <div className={style.button_container}>
        <button className={style.button}>POST</button>
      </div>
    </div>
  );
};
