import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import StarRating from "../../functions/StarRating";

import styles from "./styles.module.css";
const Product = () => {
  const { id } = useParams();
  const { cards, loading } = useContext(CardContext);

  if (loading) return <div>Loading...</div>;

  //   const card = cards.find((card) => card.id === parseInt(id));
  const card = cards.find((card) => card.id === id);
  if (!card) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.imgContainer}>
        <img src={card.url} alt="product" />
      </div>
      {/* TODO productInfo is not completed yet  */}
      <div className={styles.productInfo}>
        <h1>{card.title}</h1>
        <p>{card.description}</p>
        <a href="#">visit the {card.title} Store</a>
        <StarRating
          maxRating={5}
          color="#fcc419"
          size={24}
          defaultRating={Math.floor(card.rate)}
        />
        <p>Price: {card.price}</p>
        <p>Discount: {card.discount}</p>
      </div>
      <div className={styles.addToCart}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Product;
