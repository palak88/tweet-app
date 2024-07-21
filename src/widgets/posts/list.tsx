import { Post } from "@/components";
import React from "react";

const list = [
  {
    id: "1",
    header: {
      image: "/images/profile_pic1.svg",
      name: "Theresa Webb",
      time: "5mins ago",
    },
    data: {
      icon: "👋",
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    footer: { comment_count: 24 },
  },
  {
    id: "2",
    header: {
      image: "/images/profile_pic2.svg",
      name: "Marvin McKinney",
      time: "8mins ago • Edited",
    },
    data: {
      icon: "😞",
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  },
];

export const PostList: React.FC = () => {
  return (
    <React.Fragment>
      {list.map((element) => (
        <Post key={element.id} details={element} />
      ))}
    </React.Fragment>
  );
};
