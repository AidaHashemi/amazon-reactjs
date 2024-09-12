import styles from "./styles.module.css";
import StarRating from "../../../functions/StarRating";
import DiscountedAmount from "../../../functions/DiscountedAmount";

const Card = ({
  title,
  description,
  image,
  price,
  discount,
  rate,
  numOfVotes,
}) => {
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  const discountedPrice = DiscountedAmount(price, discount);
  const formattedVotes = parseInt(numOfVotes, 10);
  const formattedRate = Math.floor(rate);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardInfo}>
        <div className={styles.price}>
          <span>
            <sup>$</sup>
            {Math.floor(discountedPrice)}
            <sup>99</sup>
          </span>
          <span className={styles.originalPrice}>{price}</span>
        </div>
        <p>{truncatedDescription}</p>
        <div className={styles.rate}>
          <StarRating
            maxRating={5}
            color="#fcc419"
            size={16}
            showText={false}
            defaultRating={formattedRate}
          />
          <span>{formattedVotes}</span>
        </div>
        <span>see more ...</span>
      </div>
    </div>
  );
};

export default Card;
