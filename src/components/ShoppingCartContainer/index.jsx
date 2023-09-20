import { Link } from "react-router-dom";
import React from "react";
import styles from "../ShoppingCartContainer/shoppingCartContainer.module.css";

const ShoppingCartContainer = ({ children }) => {
  return (
    <section className={styles["shopping"]}>
      <div className={styles["shopping__items"]}>{children}</div>
      <Link className={styles["backbtn"]} to="/products">
        Back to shopping
      </Link>
    </section>
  );
};

export default ShoppingCartContainer;
