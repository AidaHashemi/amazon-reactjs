import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import SidebarMenu from "../sidebarMenu";
import styles from "./styles.module.css";

// TODO add this part to header
const TopbarMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={styles.topbarMenu}>
        <ul>
          <li onClick={toggleSidebar}>
            <IoMdMenu size={24} />
            All
          </li>
          <li>Toda Deal</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </nav>
      <SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default TopbarMenu;
