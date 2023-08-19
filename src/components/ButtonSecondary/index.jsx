import React from "react";
import styles from "../ButtonSecondary/btnsecondary.module.css";

const ButtonSecondary = ({ children, href, disabled = false }) => {
  return (
    <button
      onClick={() => (location.href = href)}
      disabled={disabled}
      className={`btn ${styles.btn__secondary}`}
    
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
