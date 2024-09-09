import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CardProvider } from "./context/CardContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CardProvider>
  </StrictMode>
);
