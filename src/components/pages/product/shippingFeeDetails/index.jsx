import DiscountedAmount from "../../../common/discountedAmount/DiscountedAmount";
import styles from "./styles.module.css";
const ShippingFeeDetails = ({ card }) => {
  return (
    <div className={styles.shippingDetails}>
      <h4>Shipping & Fee Details</h4>
      <div className={styles.totalPriceDetails}>
        <p>
          Price: <span>${DiscountedAmount(card.price, card.discount)}</span>
        </p>
        <p>
          Shipping <span>${Number(card.shipping.cost) / 3}</span>
        </p>
        <p>
          Estimated Import Fees Deposit:
          <span>${(2 * Number(card.shipping.cost)) / 3}</span>
        </p>
      </div>
      <p>
        Total:
        <span>
          {(
            +DiscountedAmount(card.price, card.discount) +
            Number(card.shipping.cost)
          ).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default ShippingFeeDetails;
