import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import Spinner from "../components/ui/spinner/Spinner";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/cart");
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      toast.error("Failed to fetch cart data.");
    } finally {
      setLoading(false);
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
        quantity,
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
        toast.success("Cart item updated successfully!");
      } catch (error) {
        console.error("Error updating cart item:", error);
        toast.error("Failed to update cart item.");
      }
    } else {
      const newCartItem = { ...product, quantity };

      try {
        const response = await axios.post(
          "http://localhost:5000/cart",
          newCartItem
        );
        setCart([...cart, response.data]);
        toast.success("Item added to cart!");
      } catch (error) {
        console.error("Error adding to cart:", error);
        toast.error("Failed to add item to cart.");
      }
    }
  };

  const updateCartItemQuantity = async (productId, quantity) => {
    const existingCartItem = cart.find((item) => item.id === productId);

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };

      try {
        const response = await axios.put(
          `http://localhost:5000/cart/${productId}`,
          updatedCartItem
        );
        setCart(
          cart.map((item) => (item.id === productId ? response.data : item))
        );
        toast.success("Cart item quantity updated!");
      } catch (error) {
        console.error("Error updating cart item quantity:", error);
        toast.error("Failed to update item quantity.");
      }
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${productId}`);
      setCart(cart.filter((item) => item.id !== productId));
      toast.success("Item removed from cart!");
    } catch (error) {
      console.error("Error removing cart item:", error);
      toast.error("Failed to remove cart item.");
    }
  };

  const clearCart = async () => {
    try {
      await Promise.all(
        cart.map((item) =>
          axios.delete(`http://localhost:5000/cart/${item.id}`)
        )
      );
      setCart([]);
      toast.success("Cart cleared!");
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Failed to clear cart.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {loading ? <Spinner /> : children}
    </CartContext.Provider>
  );
};
