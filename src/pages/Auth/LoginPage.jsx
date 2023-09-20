import { useSetPageTitle } from "../../hooks/useSetPageTitle";
import Login from "../../components/Auth/Login";
import React from "react";

const LoginPage = () => {
  useSetPageTitle("Login");
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
