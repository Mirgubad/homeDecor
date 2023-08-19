import styles from "../LangSelect/langselect.module.css";
import i18n, { use } from "i18next";
import React, { useEffect, useState } from "react";



const LangSelect = ({open}) => {
  const [lang, setLang] = useState("EN");
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang.toUpperCase());
    localStorage.setItem("lang", JSON.stringify(lang));
  
  };

  useEffect(() => {
    const chosenLang = JSON.parse(localStorage.getItem("lang"));
    handleLanguageChange(chosenLang);

   
  }, [lang]);
  return (
    <div
      onClick={handleClick}
      className={`${styles.languages} ${open && styles.mobile}`}
    >
      <div className={styles.languages__list}>
        <div
          className={`${styles.selected__lang} ${open ? "d-none" : "d-block"}`}
        >
          {lang}
        </div>

        <div
          className={`${styles.options} ${open && styles.mobile} ${
            opened ? "d-block" : "d-none"
          }`}
        >
          <div
            onClick={() => handleLanguageChange("az")}
            className={`${styles["languages__list--item"]} ${
              lang == "AZ" && styles.active
            }`}
          >
            AZ
          </div>

          <div
            onClick={() => handleLanguageChange("ru")}
            className={`${styles["languages__list--item"]} ${
              lang == "RU" && styles.active
            }`}
          >
            RU
          </div>

          <div
            onClick={() => handleLanguageChange("en")}
            className={`${styles["languages__list--item"]} ${
              lang == "EN" && styles.active
            }`}
          >
            EN
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangSelect;
