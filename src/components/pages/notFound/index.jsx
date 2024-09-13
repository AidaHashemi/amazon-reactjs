import { useContext } from "react";
import { CardContext } from "./../../../context/CardContext";
import Button from "../../ui/button";
import styles from "./styles.module.css";
import Spinner from "../../ui/spinner";
const NotFound = () => {
  const { loading } = useContext(CardContext);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <Button
        onClick={() => (window.location.href = "/")}
        size="large"
        text="  Go Back Home"
        type="button"
      />
    </div>
  );
};

export default NotFound;
