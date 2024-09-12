import { useContext } from "react";
import { useParams } from "react-router-dom";

import { GoNote } from "react-icons/go";

import { CardContext } from "../../context/CardContext";

import Descriptions from "./descriptions";
import Specifications from "./specifications";
import Costs from "./costs";
import AboutSection from "./aboutSection";
import AddToCart from "./addToCart";

import styles from "./styles.module.css";

const Product = () => {
  const { id } = useParams();
  const { cards, loading } = useContext(CardContext);

  const card = cards.find((card) => card.id === id);

  if (loading) return <div>Loading...</div>;
  if (!card) return <div>Product not found</div>;

  return (
    <div className={styles.productDetails}>
      <div className={styles.imgContainer}>
        <img src={card.url} alt="product" />
      </div>

      <div className={styles.productInfo}>
        <Descriptions card={card} />
        <Costs card={card} />
        <Specifications card={card} />
        <AboutSection card={card} />

        <div className={styles.report}>
          <GoNote size={20} />
          <p>Report an issue with this product or seller</p>
        </div>

        <div className={styles.note}>
          <span>Note: </span>
          {card.note}
        </div>
      </div>

      <AddToCart card={card} />
    </div>
  );
};

export default Product;
