import React from "react";
import styles from "./button.module.css";

const ButtonPrimary = ({ children, href, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      onClick={() => (location.href = href)}
      className={`btn ${styles.primary__btn}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
