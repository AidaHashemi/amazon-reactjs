import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CardContext } from "../../context/CardContext";
import { CartContext } from "../../context/CartContext";
import StarRating from "../../functions/StarRating";
import DiscountedAmount from "../../functions/DiscountedAmount";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GoNote } from "react-icons/go";
import DropdownMenu from "../common/header/dropdownMenu";
import Button from "../button";
import styles from "./styles.module.css";

const Product = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const { id } = useParams();
  const { cards, loading } = useContext(CardContext);
  const { cart, addToCart, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext);

  const card = cards.find((card) => card.id === id);
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
      updateCartItemQuantity(card.id, selectedNumber); // به‌روزرسانی مقدار سبد
      setIsUpdateMode(false); // غیرفعال کردن حالت آپدیت
    } else if (isInCart) {
      removeFromCart(id); // حذف محصول از سبد
    } else {
      addToCart(card, selectedNumber); // اضافه کردن محصول به سبد
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!card) {
    return <div>Product not found</div>;
  }

  const ShippingFeeDetails = () => {
    return (
      <div className={styles.shippingDetails}>
        <h4>Shipping & Fee Details</h4>
        <div className={styles.totalPriceDetails}>
          <p>
            Price: <span>${DiscountedAmount(card.price, card.discount)}</span>{" "}
          </p>
          <p>
            Shipping <span>${Number(card.shipping.cost) / 3}</span>
          </p>
          <p>
            Estimated Import Fees Deposit:{" "}
            <span>${(2 * Number(card.shipping.cost)) / 3}</span>
          </p>
        </div>
        <p>
          Total:{" "}
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

  const ExtraSavingDetails = () => {
    return (
      <div className={styles.extraDesc}>
        Amazon Music offer with this purchase<span>Shop items</span>
      </div>
    );
  };

  const Specifications = () => {
    const keys = Object.keys(card.specifications);
    const [showAll, setShowAll] = useState(false);

    // Function to toggle the show state
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };

    return (
      <div className={styles.specifications}>
        <h3>Specifications</h3>
        <ul>
          {keys.slice(0, showAll ? keys.length : 5).map((key) => (
            <li key={key}>
              <span>{key}</span> <span> {card.specifications[key]}</span>
            </li>
          ))}
        </ul>
        <button onClick={toggleShowAll}>
          {showAll ? (
            <>
              <IoIosArrowUp />
              Show Less
            </>
          ) : (
            <>
              <IoIosArrowDown />
              Show More
            </>
          )}
        </button>
      </div>
    );
  };
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const AboutSection = () => {
    const [showAll, setShowAll] = useState(false);

    // Function to toggle the show state
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };

    return (
      <div className={styles.about}>
        <h3>About</h3>
        <ul>
          {card.about
            .slice(0, showAll ? card.about.length : 3)
            .map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
        </ul>
        <button onClick={toggleShowAll}>
          {showAll ? (
            <>
              <IoIosArrowUp />
              Show Less
            </>
          ) : (
            <>
              <IoIosArrowDown />
              Show More
            </>
          )}
        </button>
      </div>
    );
  };
  const items = [<ShippingFeeDetails key="1" />];
  const items1 = [<ExtraSavingDetails key="11" />];
  return (
    <div className={styles.productDetails}>
      <div className={styles.imgContainer}>
        <img src={card.url} alt="product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.firstSec}>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
          <a href="#">visit the {card.title} Store</a>
          <div className={styles.rating}>
            <StarRating
              maxRating={5}
              color="#fcc419"
              size={24}
              defaultRating={Math.floor(card.rate)}
            />
            <span className={styles.ratingItem}> {card.numOfVotes}</span>
            <span className={styles.ratingItem}>Search this page</span>
          </div>
          <p style={{ fontSize: "14px" }}>{card.numOfSales}</p>
        </div>
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
            Price:
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
            Available at a lower price from other sellers that may not offer
            free Prime shipping.
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
        <div className={styles.thirdSec}>
          <Specifications />
        </div>
        <div className={styles.forthSec}>
          <AboutSection />
        </div>
        <div className={styles.report}>
          <GoNote size={20} />
          <p>Report an issue with this product or seller</p>
        </div>
        <div className={styles.note}>
          <span>Note : </span>
          {card.note}
        </div>
      </div>
      <div className={styles.addToCart}>
        <span className={styles.radioIcon}>
          <IoMdRadioButtonOn />
        </span>
        <span>Buy New :</span>
        <p className={styles.shipp}>
          ${card.shipping.cost} Shipping & Import Fees Deposit to Germany
          Details <br />
          <span>Delivery</span>
          <em> {formattedDate}</em>
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
          <select
            id="number-select"
            value={selectedNumber}
            onChange={handleChange}
            className={styles.select}
          >
            {[...Array(20)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                Quantity {index + 1}
              </option>
            ))}
          </select>

          <Button
            text={
              isInCart
                ? isUpdateMode
                  ? "Update" // حالت آپدیت زمانی که مقدار تغییر می‌کند
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
              Eligible for Return, Refund or Replacement within 30 days of
              receipt
            </span>
          </p>
          <p>
            <span>payment</span>
            <span>Secure transaction </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
