import styles from "./styles.module.css";

const QuantitySelector = ({ selectedNumber, handleChange }) => (
  <select
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
);

export default QuantitySelector;
