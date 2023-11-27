import styles from "../assets/css/home.module.css";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Home({ data }) {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    setCards(
      data.map((pokemon) => {
        return (
          <Card
            img={pokemon.sprite}
            name={pokemon.name}
            type={pokemon.type}
            num={pokemon.number}
            key={pokemon.number}
          />
        );
      })
    );
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Nav />
      <div className={styles.cardsCont}>{cards}</div>
    </div>
  );
}

export default Home;
