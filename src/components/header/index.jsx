// import location from "../../assets/svg/location.svg";
// import amazon from "../../assets/svg/amazon.svg";
// import usaFlag from "../../assets/svg/usa.svg";
// import { IoMdSearch } from "react-icons/io";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { Link } from "react-router-dom";

// import styles from "./styles.module.css";

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div>
//         <img className={styles.amazon} src={amazon} alt="amazon logo" />
//       </div>
//       <div className={styles.delivery}>
//         deliver to <br />
//         {/*TODO change this later */}
//         <img src={location} alt="location" />
//         Germany
//       </div>
//       <div className={styles.searchBar}>
//         <span>
//           All <IoMdArrowDropdown />
//         </span>
//         <input type="search" name="search" />
//         <span className={styles.icon}>
//           <IoMdSearch />
//         </span>
//       </div>
//       {/* TODO make this part more dynamic : co&children */}
//       <div className={styles.dropdownMenu}>
//         <ul>
//           <li>
//             <img src={usaFlag} alt="lang" />
//             EN <IoMdArrowDropdown />
//           </li>
//           <li>
//             <span> Hello, sign in</span> <br />
//             Accounts & Lists <IoMdArrowDropdown />
//           </li>
//           <li>
//             <span>Returns</span> <br />
//             &Orders
//           </li>
//           <li>
//             <Link to="cart" className={styles.link}>
//               <span>
//                 <MdOutlineShoppingCart />
//               </span>
//               Cart
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

import location from "../../assets/svg/location.svg";
import amazon from "../../assets/svg/amazon.svg";
import usaFlag from "../../assets/svg/usa.svg";
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react"; // Import useContext
import { CartContext } from "../../context/CartContext"; // Import CartContext

import styles from "./styles.module.css";

const Header = () => {
  const { cart } = useContext(CartContext); // Access cart data from context

  // Calculate total quantity
  const totalQuantity = cart.reduce(
    (acc, item) => acc + parseInt(item.quantity, 10),
    0
  );

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
            <span>Returns</span> <br />& Orders
          </li>
          <li>
            <Link to="cart" className={styles.link}>
              <span>
                <MdOutlineShoppingCart />
              </span>
              Cart ({totalQuantity})
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
