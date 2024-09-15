import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";

import { CartContext } from "../../../../context/CartContext";

import DropdownMenu from "../../../menu/dropdownMenu/DropdownMenu";
import LangDropDown from "../langDropDown/LangDropDown";
import AccountDropDown from "../accountDropDown/AccountDropDown";

import usFlag from "../../../../assets/svg/usa.svg";

import styles from "./HeadMenu.module.css";

const HeadMenu = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce(
    (acc, item) => acc + parseInt(item.quantity, 10),
    0
  );

  const dropdownConfig = [
    {
      component: <LangDropDown />,
      label: (
        <div className={styles.lang}>
          <img src={usFlag} alt="Language" />
          <span>EN</span> <IoMdArrowDropdown />
        </div>
      ),
      style: { width: "300px" },
    },
    {
      component: <AccountDropDown />,
      label: (
        <div className={styles.item}>
          Hello, sign in
          <span>
            Accounts & Lists <IoMdArrowDropdown />
          </span>
        </div>
      ),
      style: { width: "480px" },
    },
  ];

  return (
    <nav className={styles.dropdownMenu}>
      {dropdownConfig.map(({ component, label, style }, index) => (
        <DropdownMenu
          key={index}
          menuItems={[component]}
          initialSelectedItem={label}
          menuItemStyle={style}
        />
      ))}
      <span className={styles.item}>
        Returns<span>& Orders</span>
      </span>
      <Link to="cart" className={styles.cartItem}>
        <span>
          <BsCart2 />
        </span>
        Cart <span>({totalQuantity})</span>
      </Link>
    </nav>
  );
};

export default HeadMenu;
