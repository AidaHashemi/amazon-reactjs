import { IoLocationOutline } from "react-icons/io5";

import Logo from "../logo";
import SearchBar from "./searchBar";
import HeadMenu from "./headMenu";

import styles from "./styles.module.css";
import NavigationMenu from "../../menu/navigationMenu";

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
