import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Header from "./components/header";

import TopbarMenu from "./components/menu/topbarMenu";
import Product from "./components/product";

const App = () => {
  return (
    <div>
      <Header />
      <TopbarMenu />
      {/* <main>
        <Home />
      </main> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
