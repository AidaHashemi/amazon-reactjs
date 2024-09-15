import { useNavigate } from "react-router-dom";

import amazon from "../../../assets/svg/amazon.svg";

import styles from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={styles.logo}
      onClick={handleClick}
      role="button"
      aria-label="Go to homepage"
    >
      <img className={styles.amazon} src={amazon} alt="amazon logo" />
    </div>
  );
};

export default Logo;
