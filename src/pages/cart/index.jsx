import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../../components/button";
import primeLogo from "../../assets/svg/prime.svg";
import styles from "./styles.module.css";
import { FaCheck } from "react-icons/fa";
import DiscountedAmount from "../../functions/DiscountedAmount";

const Cart = () => {
  const { cart, updateCartItemQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const [editingItem, setEditingItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  // Calculate the total price of each item
  const calculateItemTotal = (item) => {
    return Number(item.quantity) * DiscountedAmount(item.price, item.discount);
  };

  // Calculate the total number of items and total cart price
  const totalQuantity = cart.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );
  const totalPrice = cart.reduce(
    (total, item) => total + calculateItemTotal(item),
    0
  );

  const handleQuantityChange = (item, quantity) => {
    setEditingItem(item.id);
    setNewQuantity(quantity);
  };

  const handleUpdateClick = (item) => {
    updateCartItemQuantity(item.id, newQuantity);
    setEditingItem(null); // reset after update
  };

  const handleDeselectAll = () => {
    clearCart(); // Call clearCart to remove all items
  };

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cart}>
        <h2>Shopping Basket</h2>
        <Button
          text="Deselect all items"
          size="medium"
          color="none"
          width="150px"
          textColor="#84bbc1"
          style={{ padding: 0, textAlign: "left" }}
          onClick={handleDeselectAll} // Call handleDeselectAll when button is clicked
        />

        <div className={styles.product}>
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id}>
                <img
                  className={styles.image}
                  src={item.url}
                  alt="product img"
                />
                <div className={styles.itemInfo}>
                  <p>{item.description}</p>
                  <span
                    style={{
                      color: "rgb(0,150,0)",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    In Stock
                  </span>
                  <div className={styles.logo}>
                    <FaCheck color="orange" />
                    <img src={primeLogo} alt="logo" />
                  </div>
                  <span>
                    <input type="checkbox" id="gift_checkbox" />{" "}
                    <label htmlFor="gift_checkbox"> This will be a gift</label>
                  </span>
                  <div className={styles.info}>
                    <p>
                      <span>Style Name : </span>
                      {item.specifications.modelName}
                    </p>
                    <p>
                      <span>Color Name:</span> {item.specifications.color}
                    </p>
                  </div>
                  <div className={styles.actions}>
                    <select
                      value={
                        editingItem === item.id ? newQuantity : item.quantity
                      }
                      className={styles.select}
                      onChange={(e) =>
                        handleQuantityChange(item, Number(e.target.value))
                      }
                    >
                      {[...Array(20)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                          Quantity {index + 1}
                        </option>
                      ))}
                    </select>

                    {editingItem === item.id ? (
                      <Button
                        text="Update"
                        borderRadius="0"
                        size="medium"
                        color="none"
                        textColor="#84bbc1"
                        style={{
                          padding: 0,
                          paddingRight: "16px",
                          textAlign: "left",
                          borderRight: "1px solid #ccc",
                        }}
                        onClick={() => handleUpdateClick(item)}
                      />
                    ) : (
                      <Button
                        text="Delete"
                        borderRadius="0"
                        size="medium"
                        color="none"
                        textColor="#84bbc1"
                        style={{
                          padding: 0,
                          paddingRight: "16px",
                          textAlign: "left",
                          borderRight: "1px solid #ccc",
                        }}
                        onClick={() => removeFromCart(item.id)}
                      />
                    )}

                    <Button
                      text="Save for later"
                      borderRadius="0"
                      size="medium"
                      color="none"
                      textColor="#84bbc1"
                      style={{
                        padding: 0,
                        paddingRight: "16px",
                        textAlign: "left",
                        borderRight: "1px solid #ccc",
                      }}
                    />
                    <Button
                      borderRadius="0"
                      text="See more like this"
                      size="medium"
                      color="none"
                      textColor="#84bbc1"
                      style={{
                        padding: 0,
                        paddingRight: "16px",
                        textAlign: "left",
                        borderRight: "1px solid #ccc",
                      }}
                    />
                    <Button
                      text="Share"
                      size="medium"
                      color="none"
                      width="auto"
                      textColor="#84bbc1"
                      style={{
                        padding: 0,
                        paddingRight: "16px",
                        textAlign: "left",
                      }}
                    />
                  </div>
                </div>
                <span className={styles.itemPrice}>
                  ${calculateItemTotal(item)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.totalPrice}>
          Total price: ${totalPrice.toFixed(2)}
        </div>
      </div>
      <div className={styles.checkout}>
        <span>Subtotal ({totalQuantity} item):</span>
        <span className={styles.total}>${totalPrice.toFixed(2)}</span>
        <span>
          <input type="checkbox" id="checkout_checkbox" />{" "}
          <label htmlFor="checkout_checkbox"> This will be a gift</label>
        </span>
        <Button
          text="Proceed to checkout"
          size="medium"
          color="warning"
          width="auto"
          textColor="#333"
        />
      </div>
    </div>
  );
};

export default Cart;
