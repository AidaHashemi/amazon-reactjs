import React from "react";
import Logo from "../logo";
import { IoIosGlobe } from "react-icons/io";
import usFlag from "../../../assets/svg/usa.svg";
import styles from "./styles.module.css";

const footerSections = [
  {
    title: "Get to Know Us",
    items: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money with Us",
    items: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hubs",
      "See More Make Money with Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    items: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    items: [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Amazon Assistant",
      "Help",
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#">
        <p>Back to top</p>
      </a>
      <div className={styles.content}>
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.lastRow}>
        <Logo />
        <div>
          <IoIosGlobe aria-label="Change language" />
          <p>English</p>
        </div>
        <div>
          <span>$</span> USD - U.S Dollar
        </div>
        <div>
          <img src={usFlag} alt="US Flag" />
          <p>United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
