import CheckOutContainer from "../components/CheckOutContainer";
import React from "react";
import SectionTop from "../components/SectionTop";

const CheckOut = () => {
  return (
    <main>
      <div className="container">
        <SectionTop title="Checkout" />
        <CheckOutContainer />
      </div>
    </main>
  );
};

export default CheckOut;
