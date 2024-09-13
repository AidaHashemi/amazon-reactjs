import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";

import CartList from "./cartList";
import Checkout from "./chekout";

import styles from "./styles.module.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cart}>
        {cart.length > 0 ? (
          <CartList />
        ) : (
          <div className={styles.isEmpty}>
            <h3>Your Amazon Basket is empty.</h3>
            <p>
              Check products page for shopping.{" "}
              <Link to="/">continue shopping</Link>
            </p>
          </div>
        )}
      </div>
      {cart.length > 0 && <Checkout cart={cart} />}
    </div>
  );
};

export default Cart;
