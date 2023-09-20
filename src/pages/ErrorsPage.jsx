import Error from "../components/Error";
import React from "react";

const ErrorsPage = () => {
  return (
    <main>
      <Error code="404" status="page Not found" />
    </main>
  );
};

export default ErrorsPage;
