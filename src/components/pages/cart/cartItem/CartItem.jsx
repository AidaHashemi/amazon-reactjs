import { FaCheck } from "react-icons/fa";

import QuantitySelector from "../../../ui/quantitySelector/QuantitySelector";
import DiscountedAmount from "../../../common/discountedAmount/DiscountedAmount";
import primeLogo from "../../../../assets/svg/prime.svg";

import styles from "./CartItem.module.css";

const CartItem = ({
  item,
  editingItem,
  newQuantity,
  handleQuantityChange,
  handleUpdateClick,
  removeFromCart,
}) => {
  const itemTotalPrice =
    Number(item.quantity) * DiscountedAmount(item.price, item.discount);

  return (
    <li key={item.id} className={styles.cartItem}>
      <img className={styles.image} src={item.url} alt="product img" />
      <div className={styles.itemInfo}>
        <p>{item.description}</p>
        <span className={styles.inStock}>In Stock</span>
        <div className={styles.logo}>
          <FaCheck color="orange" />
          <img src={primeLogo} alt="Prime logo" />
        </div>
        <span>
          <input type="checkbox" id={`gift_checkbox_${item.id}`} />
          <label htmlFor={`gift_checkbox_${item.id}`}>
            {" "}
            This will be a gift
          </label>
        </span>
        <div className={styles.info}>
          <p>
            <span>Style Name:</span> {item.specifications.modelName}
          </p>
          <p>
            <span>Color Name:</span> {item.specifications.color}
          </p>
        </div>
        <div className={styles.actions}>
          <QuantitySelector
            selectedNumber={
              editingItem === item.id ? newQuantity : item.quantity
            }
            handleChange={(e) =>
              handleQuantityChange(item, Number(e.target.value))
            }
          />
          {editingItem === item.id ? (
            <button
              onClick={() => handleUpdateClick(item)}
              className={styles.updateBtn}
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => removeFromCart(item.id)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          )}
          <a href="#">Save for later</a>
          <a href="#">See more like this</a>
          <a href="#">Share</a>
        </div>
      </div>
      <span className={styles.itemPrice}>${itemTotalPrice.toFixed(2)}</span>
    </li>
  );
};

export default CartItem;
