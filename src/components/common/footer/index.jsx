import Logo from "../logo";
import { IoIosGlobe } from "react-icons/io";

import usFlag from "../../../assets/svg/usa.svg";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#">
        <p>Back to top</p>
      </a>
      <div className={styles.content}>
        <div>
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on Amazon </li>
            <li>Sell on Amazon Business </li>
            <li>Sell apps on Amazon </li>
            <li>Become an Affiliate </li>
            <li>Advertise Your Products </li>
            <li>Self-Publish with Us </li>
            <li>Host an Amazon Hubs </li>
            <li>See More Make Money with Us </li>
          </ul>
        </div>
        <div>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <h3>Let Us Help You</h3>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>
              <p>Shipping Rates &amp;</p>Policies
            </li>
            <li>
              <p>Returns &amp;</p>Replacements
            </li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className={styles.lastRow}>
        <Logo />

        <div>
          <IoIosGlobe />
          <p>English</p>
        </div>
        <div>
          <span>$</span> USD - U.s Dollor
        </div>
        <div>
          <img src={usFlag} alt="usFlag" />
          <p>United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
