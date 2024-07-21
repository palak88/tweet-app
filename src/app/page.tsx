import { Login } from "@/widgets/Login";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.root}>
      <Login />
    </div>
  );
}
