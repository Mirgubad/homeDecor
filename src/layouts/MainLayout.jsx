import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const location = useLocation();
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "var(--main-bg)",
        }}
        ref={node}
      >
        <Header open={open} setOpen={setOpen} />
        <Navbar open={open} setOpen={setOpen} />
        {location.pathname !== "/" && <BreadCrumbs open={open} />}
      </div>
      {<Outlet />}
      <Footer />
    </>
  );
};

export default MainLayout;
