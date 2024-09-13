import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";

import usFlag from "../../../assets/svg/usa.svg";

import styles from "./styles.module.css";

const SidebarMenu = ({ isOpen, onClose }) => {
  const [currentMenu, setCurrentMenu] = useState("main");

  const renderMainMenu = () => (
    <div className={styles.digitalContent}>
      <MenuSection title="Digital Content & Devices">
        <MenuItem onClick={() => setCurrentMenu("amazonMusic")}>
          Amazon Music
        </MenuItem>
        <MenuItem>Kindle E-readers & Books</MenuItem>
        <MenuItem>Amazon Appstore</MenuItem>
      </MenuSection>

      <hr />

      <MenuSection title="Shop by Department">
        <MenuItem>Electronics</MenuItem>
        <MenuItem>Computer</MenuItem>
        <MenuItem>Smart Home</MenuItem>
        <MenuItem>Arts & Crafts</MenuItem>
        <MenuItem>See all</MenuItem>
      </MenuSection>

      <hr />

      <MenuSection title="Programs & Features">
        <MenuItem>Gift Cards</MenuItem>
        <MenuItem>Shop By Interest</MenuItem>
        <MenuItem>Amazon live</MenuItem>
        <MenuItem>International Shopping</MenuItem>
        <MenuItem>See all</MenuItem>
      </MenuSection>

      <hr />

      <MenuSection title="Help & Settings">
        <MenuItem>
          <span>Your Account</span>
        </MenuItem>
        <MenuItem>
          <div className={styles.hasIcon}>
            <TfiWorld />
            <span>English</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={styles.hasIcon}>
            <img alt="usFlag" src={usFlag} />
            <span>United States</span>
          </div>
        </MenuItem>
        <MenuItem>Customer Service</MenuItem>
        <MenuItem>Sign in</MenuItem>
      </MenuSection>
    </div>
  );

  const renderAmazonMusicMenu = () => (
    <div className={styles.amazonMusic}>
      <p onClick={() => setCurrentMenu("main")}>
        <IoMdArrowBack />
        <span>Main Menu</span>
      </p>
      <h3>Stream Music</h3>
      <ul>
        <li>Amazon Music Unlimited</li>
        <li>Free Streaming Music</li>
        <li>Podcasts</li>
        <li>Open Web Player</li>
        <li>Download the app</li>
      </ul>
    </div>
  );

  return (
    <div
      className={`${styles.sidebarMenu} ${isOpen ? styles.open : ""}`}
      onClick={onClose}
    >
      <div
        id="container"
        className={styles.sidebarContent}
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <FaUserCircle />
          <p>Hello, sign in</p>
        </header>
        <main>
          {currentMenu === "main" ? renderMainMenu() : renderAmazonMusicMenu()}
        </main>
      </div>
    </div>
  );
};

const MenuSection = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <ul>{children}</ul>
  </div>
);

const MenuItem = ({ onClick, children }) => (
  <li onClick={onClick}>
    {children}
    <IoIosArrowForward />
  </li>
);

export default SidebarMenu;
