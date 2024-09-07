import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cards");
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <CardContext.Provider value={{ cards, loading }}>
      {children}
    </CardContext.Provider>
  );
};
