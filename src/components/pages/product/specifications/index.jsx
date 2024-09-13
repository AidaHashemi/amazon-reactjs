import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./styles.module.css";

const Specifications = ({ card }) => {
  const keys = Object.keys(card.specifications);
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the show state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.thirdSec}>
      <div className={styles.specifications}>
        <h3>Specifications</h3>
        <ul>
          {keys.slice(0, showAll ? keys.length : 5).map((key) => (
            <li key={key}>
              <span>{key}</span> <span> {card.specifications[key]}</span>
            </li>
          ))}
        </ul>
        <button onClick={toggleShowAll}>
          {showAll ? (
            <>
              <IoIosArrowUp />
              Show Less
            </>
          ) : (
            <>
              <IoIosArrowDown />
              Show More
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Specifications;
