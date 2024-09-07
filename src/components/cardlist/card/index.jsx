import styles from "./styles.module.css";
import StarRating from "../../../functions/StarRating";
import DiscountedAmount from "../../../functions/DiscountedAmount";

const Card = ({ title, description, image, price, discount, rate }) => {
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <hr />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardInfo}>
        <div className={styles.price}>
          <span>${DiscountedAmount(price, discount).toFixed(2)}</span>
          <span className={styles.originalPrice}>{price}</span>
        </div>
        <p>{truncatedDescription}</p>
        <span>
          <StarRating
            maxRating={5}
            color="#fcc419"
            size={16}
            defaultRating={Math.floor(rate)}
          />
        </span>
        <span>see more ...</span>
      </div>
    </div>
  );
};

export default Card;
