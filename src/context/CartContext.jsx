import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to fetch cart data from server
  const fetchCartData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cart");
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  // Fetch cart data when the component mounts
  useEffect(() => {
    fetchCartData();
  }, []);

  //   const addToCart = async (product, quantity) => {
  //     const existingCartItem = cart.find((item) => item.id === product.id);

  //     if (existingCartItem) {
  //       // Increment the quantity of the existing item
  //       const updatedCartItem = {
  //         ...existingCartItem,
  //         quantity: existingCartItem.quantity + quantity,
  //       };

  //       try {
  //         const response = await axios.put(
  //           `http://localhost:5000/cart/${existingCartItem.id}`,
  //           updatedCartItem
  //         );
  //         setCart(
  //           cart.map((item) =>
  //             item.id === existingCartItem.id ? response.data : item
  //           )
  //         );
  //       } catch (error) {
  //         console.error("Error updating cart item:", error);
  //       }
  //     } else {
  //       // Add new item to the cart
  //       const newCartItem = { ...product, quantity };

  //       try {
  //         const response = await axios.post(
  //           "http://localhost:5000/cart",
  //           newCartItem
  //         );
  //         setCart([...cart, response.data]);
  //       } catch (error) {
  //         console.error("Error adding to cart:", error);
  //       }
  //     }
  //   };

  const addToCart = async (product, quantity) => {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
      // Replace the old quantity with the new one
      const updatedCartItem = {
        ...existingCartItem,
        quantity: quantity, // Replace old quantity with new one
      };

      try {
        const response = await axios.put(
          `http://localhost:5000/cart/${existingCartItem.id}`,
          updatedCartItem
        );
        setCart(
          cart.map((item) =>
            item.id === existingCartItem.id ? response.data : item
          )
        );
      } catch (error) {
        console.error("Error updating cart item:", error);
      }
    } else {
      // Add new item to the cart
      const newCartItem = { ...product, quantity };

      try {
        const response = await axios.post(
          "http://localhost:5000/cart",
          newCartItem
        );
        setCart([...cart, response.data]);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
