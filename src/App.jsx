import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Header from "./components/common/header";

import TopbarMenu from "./components/menu/topbarMenu";
import Product from "./components/product";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <TopbarMenu />
        {/* <main>
        <Home />
      </main> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
