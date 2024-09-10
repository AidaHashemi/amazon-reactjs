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
  const langDropDownItem = [<LangDropDown key="1" />];
  const accountDropDownItem = [<AccountDropDown key="1" />];
  const filterDropDown = ["All", "Mobiles", "Laptops", "Mobile accessories"];
  const { cart } = useContext(CartContext);

  // Calculate total quantity
  const totalQuantity = cart.reduce(
    (acc, item) => acc + parseInt(item.quantity, 10),
    0
  );

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
        <span>
          <DropdownMenu
            menuItems={filterDropDown}
            menuItemStyle={{
              color: "#333",
              width: "150px",
            }}
            initialSelectedItem={
              <span className={styles.filter}>
                All <IoMdArrowDropdown />
              </span>
            }
          />
        </span>
        <input type="search" name="search" />
        <span className={styles.icon}>
          <IoMdSearch />
        </span>
      </div>
      <div className={styles.dropdownMenu}>
        <DropdownMenu
          menuItems={langDropDownItem}
          menuItemStyle={{
            color: "#333",
            width: "300px",
          }}
          initialSelectedItem={
            <div className={styles.lang}>
              <img
                src={usaFlag}
                alt="lang"
                style={{ marginRight: "8px", width: "20px", height: "20px" }}
              />
              EN <IoMdArrowDropdown />
            </div>
          }
        />
        <DropdownMenu
          menuItems={accountDropDownItem}
          menuItemStyle={{
            color: "#333",
            width: "450px",
          }}
          initialSelectedItem={
            <div className={styles.item}>
              Hello, sign in
              <span>
                Accounts & Lists <IoMdArrowDropdown />
              </span>
            </div>
          }
        />
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
