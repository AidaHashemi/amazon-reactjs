import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CardContext } from "../../context/CardContext";
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

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

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
      {/* TODO It will be a component  */}
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
        <p>In Stock</p>
        <span>
          <IoLocationSharp /> Deliver to Germany
        </span>
        <form className={styles.form}>
          <select
            id="number-select"
            value={selectedNumber}
            onChange={handleChange}
            className="border rounded p-2"
          >
            {[...Array(20)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                Quantity {index + 1}
              </option>
            ))}
          </select>
          {/* <button>Add to Cart</button> */}
          <Button
            text="Primary Button"
            color="warning"
            size="medium"
            textColor="#333"
            borderRadius="20px"
            style={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </form>
      </div>
      {/* TODO : I WILL COMPLETE THIS PART  */}
    </div>
  );
};

export default Product;
