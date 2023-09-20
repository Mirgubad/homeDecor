import { Link } from "react-router-dom";
import React from "react";
import styles from "../ButtonSecondary/btnsecondary.module.css";

const ButtonSecondary = ({ children, href, disabled = false }) => {
  return href ? (
    <Link
      to={href}
      disabled={disabled}
      className={`btn ${styles.btn__secondary}`}
    >
      {children}
    </Link>
  ) : (
    <Link disabled={disabled} className={`btn ${styles.btn__secondary}`}>
      {children}
    </Link>
  );
};

export default ButtonSecondary;
