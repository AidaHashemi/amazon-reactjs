import usaFlag from "../../assets/svg/usa.svg";
import styles from "./styles.module.css";
const LangDropDown = () => {
  return (
    <div className={styles.dropdown}>
      <span>
        Change language <a href="#">Learn more</a>
      </span>
      <ul>
        <li>
          <input type="radio" value="en" />
          <p>English - EN</p>
        </li>
        <li>
          <input type="radio" value="es" />
          <p>español - ES</p>
        </li>
        <li>
          <input type="radio" value="ar" />
          <p>العربية - AR</p>
        </li>
        <li>
          <input type="radio" value="de" checked="" />
          <p>Deutsch - DE</p>
        </li>
        <li>
          <input type="radio" value="he" />
          <p>עברית - HE</p>
        </li>
        <li>
          <input type="radio" value="ko" />
          <p>한국어 - KO</p>
        </li>
        <li>
          <input type="radio" value="pt" />
          <p>português - PT</p>
        </li>
        <li>
          <input type="radio" value="zh" />
          <p>中文 (简体) - ZH</p>
        </li>
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
          you are shopping on <br /> Amazon.com
        </p>
      </div>
      <a href="#" className={styles.lastAncher}>
        Change country/region.
      </a>
    </div>
  );
};

export default LangDropDown;
