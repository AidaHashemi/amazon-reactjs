import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { IoLocationSharp } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";

import { CartContext } from "../../../../context/CartContext";

import Button from "../../../ui/button/Button";
import QuantitySelector from "../../../ui/quantitySelector/QuantitySelector";
import FormattedDate from "../../../common/formattedDate/FormattedDate";

import styles from "./AddToCart.module.css";

const AddToCart = ({ card }) => {
  const { id } = useParams();

  const [selectedNumber, setSelectedNumber] = useState(1);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const { cart, addToCart, updateCartItemQuantity, removeFromCart } =
    useContext(CartContext);

  const isInCart = cart.some((item) => item.id === id);

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setSelectedNumber(newValue);
    if (isInCart && newValue !== cart.find((item) => item.id === id).quantity) {
      setIsUpdateMode(true); // فعال کردن حالت آپدیت
    } else {
      setIsUpdateMode(false); // غیر فعال کردن حالت آپدیت
    }
  };

  const handleCartAction = () => {
    if (isUpdateMode) {
      updateCartItemQuantity(card.id, selectedNumber);
      setIsUpdateMode(false);
    } else if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(card, selectedNumber);
    }
  };

  useEffect(() => {
    if (isInCart) {
      const cartItem = cart.find((item) => item.id === id);
      if (cartItem) {
        setSelectedNumber(cartItem.quantity);
      }
    }
  }, [cart, isInCart, id]);

  return (
    <div className={styles.addToCart}>
      <span className={styles.radioIcon}>
        <IoMdRadioButtonOn />
      </span>
      <span>Buy New:</span>
      <p className={styles.shipp}>
        ${card.shipping.cost} Shipping & Import Fees Deposit to{" "}
        {card.shipping.address} <br />
        <span>Delivery</span>
        <FormattedDate />
      </p>
      <span className={styles.deliverTo}>
        <IoLocationSharp /> Deliver to {card.shipping.address}{" "}
      </span>
      <span className={styles.inStock}>In Stock</span>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleCartAction();
        }}
      >
        <QuantitySelector
          selectedNumber={selectedNumber}
          handleChange={handleChange}
        />

        <Button
          text={
            isInCart
              ? isUpdateMode
                ? "Update"
                : "Remove from Cart"
              : "Add to Cart"
          }
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
      <div className={styles.extraInformation}>
        <p>
          <span>Ships from</span>
          <span>Amazon.com</span>
        </p>
        <p>
          <span>Sold by</span> <span>Amazon.com</span>
        </p>
        <p>
          <span>Returns</span>
          <span>
            Eligible for Return, Refund or Replacement within 30 days of receipt
          </span>
        </p>
        <p>
          <span>Payment</span>
          <span>Secure transaction</span>
        </p>
      </div>
    </div>
  );
};

export default AddToCart;
