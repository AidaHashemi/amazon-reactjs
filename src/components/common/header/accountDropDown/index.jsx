import Button from "../../../button";
import ListComponent from "../../listComponent";
import styles from "./styles.module.css";
const AccountDropDown = () => {
  const list1 = ["Your Lists", "Create a List", "Find a List or Registry"];
  const list2 = [
    "Your Account",
    "Account",
    "Orders",
    "Recommendations",
    "Browsing",
    "History",
    "Watchlist",
    "Video",
    "Purchases & Rentals",
    "Kindle Unlimited",
    "Subscribe & Save Items",
    "Memberships & Subscriptions",
    "Music Library",
  ];

  return (
    <div className={styles.dropdown}>
      <div>
        <Button
          type="button"
          borderRadius="20px"
          textColor="#333"
          color="warning"
          width="80%"
          text="Sign In"
        />
        <div className={styles.startLink}>
          <p>New customer?</p>
          <a href="#">Start here.</a>
        </div>
      </div>
      <hr />
      <div className={styles.lists}>
        <ListComponent title="Your Lists" items={list1} />
        <ListComponent title="Your Account" items={list2} />
      </div>
    </div>
  );
};

export default AccountDropDown;
