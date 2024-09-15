import { CardProvider } from "../../../context/CardContext";

import Slider from "./slider/Slider";
import CardList from "./cardlist/CardList";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <CardProvider>
        <div>
          <CardList />
        </div>
      </CardProvider>
    </div>
  );
};

export default Home;
