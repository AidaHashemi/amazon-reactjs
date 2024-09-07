import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import StarRating from "../../functions/StarRating";

const Product = () => {
  const { id } = useParams();
  const { cards, loading } = useContext(CardContext);

  if (loading) return <div>Loading...</div>;

  //   const card = cards.find((card) => card.id === parseInt(id));
  const card = cards.find((card) => card.id === id);
  //   if (card) alert("yes");
  if (!card) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={card.url} alt="product" />
      <p>{card.description}</p>
      <p>Price: {card.price}</p>
      <p>Discount: {card.discount}</p>
      <StarRating
        maxRating={5}
        color="#fcc419"
        size={24}
        defaultRating={Math.floor(card.rate)}
      />
    </div>
  );
};

export default Product;
