import styles from "../assets/css/home.module.css";
import Nav from "../components/Nav";
import Card from "../components/Card";

function Home({ data }) {
  const cards = data.map((pokemon) => {
    return (
      <Card
        img={pokemon.sprite}
        name={pokemon.name}
        type={pokemon.type}
        cat={pokemon.category}
        num={pokemon.number}
        key={pokemon.number}
      />
    );
  });

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
