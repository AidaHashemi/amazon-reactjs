import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/CardContext";
import Card from "./Card";
import styles from "./styles.module.css";

const CardList = () => {
  const { cards, loading } = useContext(CardContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <Link
          to={`/product/${card.id}`}
          className={styles.cardLink}
          key={card.id} // Move the key prop here
        >
          <Card
            title={card.title}
            description={card.description}
            image={card.url}
            price={card.price}
            discount={card.discount}
            rate={card.rate}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
