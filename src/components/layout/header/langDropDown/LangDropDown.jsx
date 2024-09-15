import { useState } from "react";

import usaFlag from "../../../../assets/svg/usa.svg";

import styles from "./LangDropDown.module.css";

const languages = [
  { code: "en", label: "English - EN" },
  { code: "es", label: "español - ES" },
  { code: "ar", label: "العربية - AR" },
  { code: "de", label: "Deutsch - DE" },
  { code: "he", label: "עברית - HE" },
  { code: "ko", label: "한국어 - KO" },
  { code: "pt", label: "português - PT" },
  { code: "zh", label: "中文 (简体) - ZH" },
];

const LangDropDown = () => {
  const [selectedLang, setSelectedLang] = useState("de");

  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <span>
        Change language <a href="#">Learn more</a>
      </span>
      <ul>
        {languages.map((lang) => (
          <li key={lang.code}>
            <label>
              <input
                type="radio"
                name="language"
                value={lang.code}
                checked={selectedLang === lang.code}
                onChange={handleLanguageChange}
              />
              <p>{lang.label}</p>
            </label>
          </li>
        ))}
      </ul>
      <hr />
      <div className={styles.curr}>
        <p>Change currency</p>
        <a href="#">Learn more</a>
      </div>
      <div className={styles.usd}>
        <p>$ - USD - US Dollar</p>
        <a href="#">Change</a>
      </div>
      <hr />
      <div className={styles.flagSec}>
        <img src={usaFlag} alt="flag" />
        <p>
          You are shopping on <br /> Amazon.com
        </p>
      </div>
      <a href="#" className={styles.lastAncher}>
        Change country/region.
      </a>
    </div>
  );
};

export default LangDropDown;
