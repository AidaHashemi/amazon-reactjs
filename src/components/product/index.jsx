import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CardContext } from "../../context/CardContext";
import { CartContext } from "../../context/CartContext";
import StarRating from "../../functions/StarRating";
import DiscountedAmount from "../../functions/DiscountedAmount";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";
import Button from "../button";
import styles from "./styles.module.css";

const Product = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const { id } = useParams();
  const { cards, loading } = useContext(CardContext);
  const { addToCart } = useContext(CartContext);

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  const handleAddToCart = () => {
    console.log("heey");
    const card = cards.find((card) => card.id === id);
    if (card) {
      addToCart(card, selectedNumber);
    }
  };

  if (loading) return <div>Loading...</div>;

  const card = cards.find((card) => card.id === id);
  if (!card) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.imgContainer}>
        <img src={card.url} alt="product" />
      </div>
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
        <span className={styles.radioIcon}>
          <IoMdRadioButtonOn />
        </span>
        <span>Buy New :</span>
        <span>${DiscountedAmount(card.price, card.discount).toFixed(2)}</span>
        <p>
          $91.31 Shipping & Import Fees Deposit to Germany Details Delivery
          Wednesday, May 15
        </p>
        <span className={styles.inStock}>In Stock</span>
        <span>
          <IoLocationSharp /> Deliver to Germany
        </span>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          <select
            id="number-select"
            value={selectedNumber}
            onChange={handleChange}
            className={styles.select}
          >
            {[...Array(20)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                Quantity {index + 1}
              </option>
            ))}
          </select>
          <Button
            text="Add to Cart"
            color="warning"
            size="medium"
            type="submit"
            textColor="#333"
            borderRadius="20px"
            style={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Product;
