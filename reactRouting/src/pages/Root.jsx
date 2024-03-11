import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import classes from "./Root.module.css";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
