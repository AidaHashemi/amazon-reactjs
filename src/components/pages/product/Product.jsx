import { useContext } from "react";
import { useParams } from "react-router-dom";

import { GoNote } from "react-icons/go";

import { CardContext } from "../../../context/CardContext";

import Descriptions from "./descriptions/Descriptions";
import Specifications from "./specifications/Specifications";
import Costs from "./costs/Costs";
import AboutSection from "./aboutSection/AboutSection";
import AddToCart from "./addToCart/AddToCart";

import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const { cards } = useContext(CardContext);

  const card = cards.find((card) => card.id === id);

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
