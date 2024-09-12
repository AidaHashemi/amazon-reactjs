import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Header from "./components/common/header";

import Product from "./components/product";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import Footer from "./components/common/footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        {/* <main>
        <Home />
      </main> */}

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
