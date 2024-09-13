import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Home from "./components/pages/home";
import Product from "./components/pages/product";
import Cart from "./components/pages/cart";
import NotFound from "./components/pages/notFound";

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
