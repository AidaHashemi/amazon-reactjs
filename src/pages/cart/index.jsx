import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../../components/button";

import styles from "./styles.module.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

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
                <select value={item.quantity} className={styles.select}>
                  {[...Array(20)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      Quantity {index + 1}
                    </option>
                  ))}
                </select>
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
                />
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
        <div className={styles.totalPrice}>Totla price</div>
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
