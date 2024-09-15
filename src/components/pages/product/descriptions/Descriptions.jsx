import StarRating from "../../../ui/startRating/StarRating";
import styles from "./Descriptions.module.css";

const Descriptions = ({ card }) => {
  return (
    <div className={styles.firstSec}>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
      <a href="#">Visit the {card.title} Store</a>
      <div className={styles.rating}>
        <StarRating
          maxRating={5}
          color="#fcc419"
          size={24}
          defaultRating={Math.floor(card.rate)}
        />
        <span className={styles.ratingItem}>{card.numOfVotes}</span>
        <span className={styles.ratingItem}>Search this page</span>
      </div>
      <p style={{ fontSize: "14px" }}>{card.numOfSales}</p>
    </div>
  );
};

export default Descriptions;
