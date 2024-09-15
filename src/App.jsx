import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

import Home from "./components/pages/home/Home";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/cart/Cart";
import NotFound from "./components/pages/notFound/NotFound";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
