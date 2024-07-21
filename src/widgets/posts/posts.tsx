"use client";

import React, { useState } from "react";
import { Header } from "./header";

import style from "./index.module.css";
import { CreatePost } from "./createPost";
import { PostList } from "./list";
import { SignupForm } from "../signupForm";
import { LoginForm } from "../Login/form";

export const Posts: React.FC = () => {
  const [showSignupForm, setShowSignupForm] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

  return (
    <React.Fragment>
      {(showSignupForm || showLoginForm) && (
        <div className={style.signup_backdrop} />
      )}

      <div className={style.posts_container}>
        <Header />

        <div onClick={() => setShowSignupForm(true)}>
          <CreatePost />

          <PostList />
        </div>

        {showSignupForm && !showLoginForm && (
          <SignupForm
            handleCloseClick={() => setShowSignupForm(false)}
            handleLinkClick={() => {
              setShowSignupForm(false);
              setShowLoginForm(true);
            }}
          />
        )}

        {showLoginForm && (
          <LoginForm
            showWithBackdrop
            showCloseIcon
            handleCloseClick={() => setShowLoginForm(false)}
            handleLinkClick={() => {
              setShowSignupForm(true);
              setShowLoginForm(false);
            }}
          />
        )}
      </div>
    </React.Fragment>
  );
};
