import { useSetPageTitle } from "../../hooks/useSetPageTitle";
import React from "react";
import Register from "../../components/Auth/Register";

const RegisterPage = () => {
  useSetPageTitle("Register");
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
