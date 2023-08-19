import React from "react";
import styles from "../FiltersContainer/filtersContainer.module.css";

const FiltersContainer = ({ children, title }) => {
  return (
    <div className={styles.filters}>
      <p className={styles.filters__title}>{title}</p>
      {children}
    </div>
  );
};

export default FiltersContainer;
