import React, { useState } from "react";
import styles from "../SortSelect/sortSelect.module.css";

const SortSelect = ({ open, setOpen, sortTypes, onSortClick }) => {
  const [selectedSort, setSelectedSort] = useState("Sort By");
  return (
    <div className={styles.select}>
      <div onClick={() => setOpen(!open)} className={`${styles.header}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 16L13 16"
            stroke="#B8926A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 11H13"
            stroke="#B8926A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 6L13 6"
            stroke="#B8926A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17 4L17 20L20 16"
            stroke="#B8926A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {selectedSort}
      </div>
      <div className={`${styles.options} ${open ? styles.expanded : ""}`}>
        {sortTypes.map((sort) => (
          <div
            style={{ display: selectedSort !== sort.title ? "block" : "none" }}
            key={sort.id}
            onClick={() => {
              onSortClick(sort);
              setSelectedSort(sort.title);
            }}
            className={styles.option}
          >
            {sort.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortSelect;
