import Home from "./pages/home";

import Header from "./components/header";
import TopbarMenu from "./components/menu/topbarMenu";

const App = () => {
  return (
    <div>
      <Header />
      <TopbarMenu />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
