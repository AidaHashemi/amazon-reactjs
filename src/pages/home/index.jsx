import { CardProvider } from "../../context/CardContext";

import Slider from "../../components/home/slider";
import CardList from "../../components/home/cardlist";

import styles from "./styles.module.css";

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
