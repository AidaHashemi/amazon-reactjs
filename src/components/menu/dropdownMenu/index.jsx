// import { useState } from "react";
// import styles from "./styles.module.css";

// const DropdownMenu = ({
//   menuItems = [], // Can be an array of components or JSX elements
//   dropdownStyle = {},
//   menuItemStyle = {},
//   defaultTextColor = "#fff",
//   initialSelectedItem = null,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className={styles.dropdown}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={dropdownStyle}
//     >
//       <div className={styles.selectedItem} style={{ color: defaultTextColor }}>
//         {initialSelectedItem || "Select an item"}
//       </div>
//       {isOpen && (
//         <div className={styles.menu}>
//           {menuItems.map((Component, index) => (
//             <div key={index} className={styles.menuItem} style={menuItemStyle}>
//               {Component}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;

import { useState } from "react";
import styles from "./styles.module.css";

const DropdownMenu = ({
  menuItems = [],
  dropdownStyle = {},
  menuItemStyle = {},
  defaultTextColor = "#fff",
  initialSelectedItem = null,
  triggerMode = "hover", // "hover" or "click"
  menuPosition = "left", // "left", "right", "center"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (triggerMode === "hover") setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (triggerMode === "hover") setIsOpen(false);
  };

  const handleClick = () => {
    if (triggerMode === "click") setIsOpen(!isOpen);
  };

  const getMenuStyle = () => {
    switch (menuPosition) {
      case "right":
        return { left: "0", transform: "translateX(0)" };
      case "center":
        return { left: "0", transform: "translateX(-50%)" };
      default:
        return { left: 0 };
    }
  };

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={dropdownStyle}
    >
      <div className={styles.selectedItem} style={{ color: defaultTextColor }}>
        {initialSelectedItem || "Select an item"}
      </div>
      {isOpen && (
        <div className={styles.menu} style={getMenuStyle()}>
          {menuItems.map((Component, index) => (
            <div key={index} className={styles.menuItem} style={menuItemStyle}>
              {Component}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
