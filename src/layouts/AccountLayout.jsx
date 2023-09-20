import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Menu from "../components/Account/Menu";
import Notification from "../components/Notification";
import React from "react";

const AccountLayout = () => {
  return (
    <>
      <Headers />
      <Notification />
      <main>
        <div
          style={{
            display: "flex",
            columnGap: "13.7rem",
            rowGap: "5rem",
            flexWrap: "wrap",
            marginBottom: "clamp(10rem, 8.4906rem + 4.7170vw, 15rem)",
          }}
          className="container"
        >
          <Menu />
          {<Outlet />}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountLayout;
