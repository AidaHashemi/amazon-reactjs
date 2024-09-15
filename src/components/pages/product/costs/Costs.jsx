import DiscountedAmount from "../../../common/discountedAmount/DiscountedAmount";
import DropdownMenu from "../../../menu/dropdownMenu/DropdownMenu";
import ShippingFeeDetails from "../shippingFeeDetails/ShippingFeeDetails";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Costs.module.css";

const Costs = ({ card }) => {
  const ExtraSavingDetails = () => {
    return (
      <div className={styles.extraDesc}>
        Amazon Music offer with this purchase <span>Shop items</span>
      </div>
    );
  };

  const items1 = [<ExtraSavingDetails key="11" />];
  const items = [<ShippingFeeDetails card={card} key="1" />];
  return (
    <div className={styles.secondSec}>
      <p className={styles.discountPrice}>
        <span style={{ color: "rgb(239, 63, 63)" }}>- {card.discount}</span>
        <span>
          <sup>$</sup>
          {DiscountedAmount(card.price, card.discount)}
          <sup>99</sup>
        </span>
      </p>
      <p>
        Price:{" "}
        <span style={{ textDecoration: "line-through" }}>{card.price}</span>
      </p>
      <p className={styles.shipping}>
        {card.shipping.cost} Shipping & Import Fees Deposit to{" "}
        {card.shipping.address}
        <span>
          <DropdownMenu
            triggerMode="click"
            menuPosition="center"
            menuItems={items}
            initialSelectedItem={
              <span>
                Details <IoIosArrowDown />
              </span>
            }
            menuItemStyle={{ color: "#333", width: "300px" }}
          />
        </span>
      </p>
      <p>
        Available at a lower price from other sellers that may not offer free
        Prime shipping.
      </p>
      <p className={styles.extraSaving}>
        <span className={styles.extraBtn}>Extra Saving</span>
        <DropdownMenu
          defaultTextColor="#333"
          triggerMode="hover"
          menuPosition="right"
          menuItems={items1}
          initialSelectedItem={
            <span>
              Amazon Music offer with this purchase 1 Applicable Promotion
              <IoIosArrowDown />
            </span>
          }
          menuItemStyle={{ color: "#333", width: "450px" }}
        />
      </p>
    </div>
  );
};

export default Costs;
