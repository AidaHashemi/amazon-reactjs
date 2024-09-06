import location from "../../assets/svg/location.svg";
import amazon from "../../assets/svg/amazon.svg";
import usaFlag from "../../assets/svg/usa.svg";
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.amazon} src={amazon} alt="amazon logo" />
      </div>
      <div className={styles.delivery}>
        deliver to <br />
        <img src={location} alt="location" />
        Germany
      </div>
      <div className={styles.searchBar}>
        <span>
          All <IoMdArrowDropdown />
        </span>
        <input type="search" name="search" />
        <span className={styles.icon}>
          <IoMdSearch />
        </span>
      </div>
      <div className={styles.dropdownMenu}>
        <ul>
          <li>
            <img src={usaFlag} alt="lang" />
            EN <IoMdArrowDropdown />
          </li>
          <li>
            <span> Hello, sign in</span> <br />
            Accounts & Lists <IoMdArrowDropdown />
          </li>
          <li>
            <span>Returns</span> <br />
            &Orders
          </li>
          <li>
            <span>
              <MdOutlineShoppingCart />
            </span>
            Cart
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
