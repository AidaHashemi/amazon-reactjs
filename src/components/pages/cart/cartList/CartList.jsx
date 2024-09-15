import { useState, useContext } from "react";

import { CartContext } from "../../../../context/CartContext";

import DiscountedAmount from "../../../common/discountedAmount/DiscountedAmount";
import CartItem from "../cartItem/CartItem";

import styles from "./CartList.module.css";
const CartList = () => {
  const [editingItem, setEditingItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  const { cart, updateCartItemQuantity, removeFromCart, clearCart } =
    useContext(CartContext);

  const handleQuantityChange = (item, quantity) => {
    setEditingItem(item.id);
    setNewQuantity(quantity);
  };

  const handleUpdateClick = (item) => {
    updateCartItemQuantity(item.id, newQuantity);
    setEditingItem(null); // Reset after update
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(item.quantity) * DiscountedAmount(item.price, item.discount),
    0
  );

  const handleDeselectAll = () => clearCart();
  return (
    <>
      <h2>Shopping Basket</h2>
      <button className={styles.deleteAllBtn} onClick={handleDeselectAll}>
        Deselect all items
      </button>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            editingItem={editingItem}
            newQuantity={newQuantity}
            handleQuantityChange={handleQuantityChange}
            handleUpdateClick={handleUpdateClick}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <div className={styles.totalPrice}>
        Total price: ${totalPrice.toFixed(2)}
      </div>
    </>
  );
};

export default CartList;
