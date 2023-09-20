import { useLocation } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs";
import Header from "../Header";
import Navbar from "../Navbar";
import React, { useState, useRef } from "react";

const Headers = () => {
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
        {location.pathname !== "/" && !location.pathname.includes("/auth") && (
          <BreadCrumbs open={open} />
        )}
      </div>
    </>
  );
};

export default Headers;
