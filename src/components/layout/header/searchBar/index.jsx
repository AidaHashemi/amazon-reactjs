import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import DropdownMenu from "../../../menu/dropdownMenu";
import styles from "./styles.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <span className={styles.filter}>
        <DropdownMenu
          triggerMode="click"
          menuPosition="right"
          menuItems={["All", "Mobiles", "Laptops", "Mobile accessories"]}
          initialSelectedItem={
            <span>
              All <IoMdArrowDropdown />
            </span>
          }
        />
      </span>
      <input type="search" name="search" placeholder="Search Amazon" />
      <span className={styles.icon}>
        <IoMdSearch />
      </span>
    </div>
  );
};

export default SearchBar;
