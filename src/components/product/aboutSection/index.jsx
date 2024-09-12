import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./styles.module.css";

const AboutSection = ({ card }) => {
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the show state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.forthSec}>
      <div className={styles.about}>
        <h3>About</h3>
        <ul>
          {card.about
            .slice(0, showAll ? card.about.length : 3)
            .map((item, index) => (
              <li key={index}>• {item}</li>
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

export default AboutSection;
