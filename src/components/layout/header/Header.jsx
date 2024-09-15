import { IoLocationOutline } from "react-icons/io5";

import NavigationMenu from "../../menu/navigationMenu/NavigationMenu";

import Logo from "../logo/Logo";
import SearchBar from "./searchBar/SearchBar";
import HeadMenu from "./headMenu/HeadMenu";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.topSec}>
          <Logo />
          <div className={styles.deliveryInfo}>
            Deliver to
            <span className={styles.location}>
              <IoLocationOutline /> Germany
            </span>
          </div>
          <SearchBar />
          <HeadMenu />
        </div>
        <NavigationMenu />
      </nav>
    </header>
  );
};

export default Header;
