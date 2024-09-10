import Button from "../button";
import styles from "./styles.module.css";
const AccountDropDown = () => {
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
        <ul>
          <li>Your Lists</li>
          <li>Create a List</li>
          <li>Find a List or Registry</li>
        </ul>
        <ul>
          <li>Your Account</li>
          <li>Account</li>
          <li>orders</li>
          <li>Recommendations</li>
          <li>Browsing</li>
          <li>History</li>
          <li>Watchlist</li>
          <li>Video</li>
          <li>Purchases &amp; Rentals</li>
          <li>Kindle Unlimited</li>
          <li>Subscribe &amp; Save Items</li>
          <li>Memberships &amp; Subscriptions</li>
          <li>Music Library</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountDropDown;
