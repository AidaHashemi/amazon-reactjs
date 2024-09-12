// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Function to fetch cart data from server
//   const fetchCartData = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/cart");
//       setCart(response.data);
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, []);

//   const addToCart = async (product, quantity) => {
//     const existingCartItem = cart.find((item) => item.id === product.id);

//     if (existingCartItem) {
//       const updatedCartItem = {
//         ...existingCartItem,
//         quantity: quantity, // Replace old quantity with new one
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

//   const updateCartItemQuantity = async (productId, quantity) => {
//     const existingCartItem = cart.find((item) => item.id === productId);

//     if (existingCartItem) {
//       const updatedCartItem = {
//         ...existingCartItem,
//         quantity: quantity,
//       };

//       try {
//         const response = await axios.put(
//           `http://localhost:5000/cart/${productId}`,
//           updatedCartItem
//         );
//         setCart(
//           cart.map((item) => (item.id === productId ? response.data : item))
//         );
//       } catch (error) {
//         console.error("Error updating cart item quantity:", error);
//       }
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:5000/cart/${productId}`);
//       setCart(cart.filter((item) => item.id !== productId));
//     } catch (error) {
//       console.error("Error removing cart item:", error);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, updateCartItemQuantity, removeFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

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

  useEffect(() => {
    fetchCartData();
  }, []);

  const addToCart = async (product, quantity) => {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
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

  const updateCartItemQuantity = async (productId, quantity) => {
    const existingCartItem = cart.find((item) => item.id === productId);

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: quantity,
      };

      try {
        const response = await axios.put(
          `http://localhost:5000/cart/${productId}`,
          updatedCartItem
        );
        setCart(
          cart.map((item) => (item.id === productId ? response.data : item))
        );
      } catch (error) {
        console.error("Error updating cart item quantity:", error);
      }
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${productId}`);
      setCart(cart.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  // Function to clear all cart items
  const clearCart = async () => {
    try {
      // Delete all items from db.json
      await Promise.all(
        cart.map((item) =>
          axios.delete(`http://localhost:5000/cart/${item.id}`)
        )
      );

      // Clear the local cart state
      setCart([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        clearCart, // Expose clearCart to components
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
