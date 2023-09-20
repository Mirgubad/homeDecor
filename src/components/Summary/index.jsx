import ButtonPrimary from "../ButtonPrimary";
import React from "react";
import styles from "../Summary/summary.module.css";

const Summary = ({ count, totalPriceForSummary }) => {
  return (
    <div className={styles["summary"]}>
      <h2 className={styles["summary__title"]}>Summary</h2>
      <div className={styles["summary__count"]}>
        <p className={styles["summary__count--title"]}>
          item count <span>{count}</span>
        </p>
      </div>
      <div className={styles["summary__total"]}>
        <p className={styles["summary__total--title"]}>
          total price <span>{totalPriceForSummary}$</span>
        </p>
      </div>
      <ButtonPrimary href="/checkout">Checkout</ButtonPrimary>
    </div>
  );
};

export default Summary;
