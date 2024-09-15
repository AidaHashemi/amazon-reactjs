import Button from "../../../ui/button/Button";
import DiscountedAmount from "../../../common/discountedAmount/DiscountedAmount";

import styles from "./Checkout.module.css";

const Checkout = ({ cart }) => {
  const totalQuantity = cart.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(item.quantity) * DiscountedAmount(item.price, item.discount),
    0
  );

  return (
    <div className={styles.checkout}>
      <span>Subtotal ({totalQuantity} items):</span>
      <span className={styles.total}>${totalPrice.toFixed(2)}</span>
      <span>
        <input type="checkbox" id="checkout_checkbox" />
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
  );
};

export default Checkout;
