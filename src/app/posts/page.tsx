import { Posts } from "@/widgets/posts";
import style from "../page.module.css";

export default function PostsPage() {
  return (
    <div className={style.root}>
      <Posts />
    </div>
  );
}
