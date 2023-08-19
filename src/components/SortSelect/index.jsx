import React from "react";
import styles from "../SortSelect/sortSelect.module.css";
import { useState } from "react";

const SortSelect = () => {
  const [open, setOpen] = useState(false);

  const sortTypes = [
    { title: "popular first" },
    { title: "cheapest first" },
    { title: "expensive first" },
  ];
  return (
    <div className={styles.select}>
      <div onClick={() => setOpen(!open)} className={styles.header}>
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
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M6 11H13"
            stroke="#B8926A"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M8 6L13 6"
            stroke="#B8926A"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M17 4L17 20L20 16"
            stroke="#B8926A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Sort By
      </div>
      <div
        style={{ display: open ? "block" : "none" }}
        className={styles.options}
      >
        {sortTypes.map((sort) => (
          <div
            onClick={(e) => {
              console.log(sort.title);
              setOpen(false);
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
