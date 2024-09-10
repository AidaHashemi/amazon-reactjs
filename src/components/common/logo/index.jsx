import amazon from "../../../assets/svg/amazon.svg";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.amazon} src={amazon} alt="amazon logo" />
    </div>
  );
};

export default Logo;
