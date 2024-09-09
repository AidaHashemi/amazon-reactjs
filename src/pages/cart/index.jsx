import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../../components/button";
import styles from "./styles.module.css";

const Cart = () => {
  const { cart, updateCartItemQuantity, removeFromCart } =
    useContext(CartContext);
  const [editingItem, setEditingItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  const handleQuantityChange = (item, quantity) => {
    setEditingItem(item.id);
    setNewQuantity(quantity);
  };

  const handleUpdateClick = (item) => {
    updateCartItemQuantity(item.id, newQuantity);
    setEditingItem(null); // reset after update
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
        />

        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.description}</span>
              <span>In Stock</span>
              <span>
                <input type="checkbox" id="gift_checkbox" />{" "}
                <label htmlFor="gift_checkbox"> This will be a gift</label>
              </span>
              <div className={styles.actions}>
                <select
                  value={editingItem === item.id ? newQuantity : item.quantity}
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
            </li>
          ))}
        </ul>
        <div className={styles.totalPrice}>Total price</div>
      </div>
      <div className={styles.checkout}>
        <span>Subtotal (2 item):</span>
        <span>$ 2000</span>
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
