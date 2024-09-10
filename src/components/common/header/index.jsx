import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

import DropdownMenu from "../../menu/dropdownMenu";
import { CartContext } from "../../../context/CartContext";
import LangDropDown from "../../langDropDown";
import AccountDropDown from "../../accountDropDown";

import usaFlag from "../../../assets/svg/usa.svg";
import styles from "./styles.module.css";
import Logo from "../logo";

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce(
    (acc, item) => acc + parseInt(item.quantity, 10),
    0
  );

  const dropdownConfig = [
    {
      items: [<LangDropDown key="lang" />],
      initialSelectedItem: (
        <div className={styles.lang}>
          <img
            src={usaFlag}
            alt="lang"
            style={{ marginRight: "8px", width: "20px", height: "20px" }}
          />
          EN <IoMdArrowDropdown />
        </div>
      ),
      style: { width: "300px" },
    },
    {
      items: [<AccountDropDown key="account" />],
      initialSelectedItem: (
        <div className={styles.item}>
          Hello, sign in
          <span>
            Accounts & Lists <IoMdArrowDropdown />
          </span>
        </div>
      ),
      style: { width: "450px" },
    },
  ];

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.item}>
        Deliver to
        <span>
          <IoLocationOutline /> Germany
        </span>
      </div>
      <div className={styles.searchBar}>
        {/* TODO REMOVE THIS SPAN AND FIX THIS SEC STYLE WITHOUT SPAN  */}
        <span>
          <DropdownMenu
            triggerMode="click"
            menuPosition="right"
            menuItems={["All", "Mobiles", "Laptops", "Mobile accessories"]}
            initialSelectedItem={
              <span className={styles.filter}>
                All <IoMdArrowDropdown />
              </span>
            }
            menuItemStyle={{ color: "#333", width: "150px" }}
          />
        </span>
        <input type="search" name="search" />
        <span className={styles.icon}>
          <IoMdSearch />
        </span>
      </div>
      <div className={styles.dropdownMenu}>
        {dropdownConfig.map(({ items, initialSelectedItem, style }, index) => (
          <DropdownMenu
            key={index}
            menuItems={items}
            initialSelectedItem={initialSelectedItem}
            menuItemStyle={style}
          />
        ))}
        <span className={styles.item}>
          Returns<span>& Orders</span>
        </span>
        <Link to="cart" className={styles.link}>
          <span>
            <BsCart2 />
          </span>
          Cart <p>({totalQuantity})</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
