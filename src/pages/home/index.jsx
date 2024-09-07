import Slider from "../../components/home/slider";
import { CardProvider } from "../../context/CardContext";
import CardList from "../../components/cardlist";

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
