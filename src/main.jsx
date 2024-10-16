import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CardProvider } from "./context/CardContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardProvider>
      <CartProvider>
        <App />
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={true}
        />
      </CartProvider>
    </CardProvider>
  </StrictMode>
);
