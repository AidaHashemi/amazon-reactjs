import { IoLocationOutline } from "react-icons/io5";

import Logo from "../logo";
import SearchBar from "./searchBar";
import HeadMenu from "./headMenu";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.deliveryInfo}>
        Deliver to
        <span className={styles.location}>
          <IoLocationOutline /> Germany
        </span>
      </div>
      <SearchBar />
      <HeadMenu />
    </header>
  );
};

export default Header;
