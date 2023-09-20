import { Outlet } from "react-router-dom";
import Background from "../components/Auth/Background";
import Headers from "../components/Headers";
import LoginTopBackButton from "../components/Auth/LoginTopBackButton";
import Notification from "../components/Notification";
import React from "react";
import styles from "./loginregister.module.css";

const LoginRegisterLayout = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Headers />
      </div>
      <section
        style={{
          padding: "0",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Notification />
        <div style={{ padding: "4rem", flex: "1" }}>
          <LoginTopBackButton />
          {<Outlet />}
        </div>
        <Background />
      </section>
    </>
  );
};

export default LoginRegisterLayout;
