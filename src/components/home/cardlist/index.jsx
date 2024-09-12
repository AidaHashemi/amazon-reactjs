import { useContext } from "react";
import { Link } from "react-router-dom";

import { CardContext } from "../../../context/CardContext";

import Card from "./Card";

import styles from "./styles.module.css";

const CardList = () => {
  const { cards, loading } = useContext(CardContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.parag}>
        You are on amazon.com. You can also shop on Amazon Germany for millions
        of products with fast local delivery. Click here to go to{" "}
        <a href="#">amazon.de</a>
      </div>
      <div className={styles.cardList}>
        {cards.map((card) => (
          <Link
            to={`/product/${card.id}`}
            className={styles.cardLink}
            key={card.id}
          >
            <Card
              title={card.title}
              description={card.description}
              image={card.url}
              price={card.price}
              discount={card.discount}
              rate={card.rate}
              numOfVotes={card.numOfVotes}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
