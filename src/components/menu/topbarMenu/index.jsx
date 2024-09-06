import { IoMdMenu } from "react-icons/io";
import styles from "./styles.module.css";

// TODO add this part to header
const TopbarMenu = () => {
  return (
    <nav className={styles.topbarMenu}>
      <ul>
        <li>
          <IoMdMenu size={24} />
          All
        </li>
        <li>Todas&apos;s Deal</li>
        <li>Customer Servise</li>
        <li>Registy</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </nav>
  );
};

export default TopbarMenu;
