import styles from "../assets/css/home.module.css";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Home({ data, pageSetter, currentPage }) {
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

  function nextPage() {
    if (currentPage < 65) {
      pageSetter((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      pageSetter((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <Nav />
      <div className={styles.cardsCont}>{cards}</div>
      <div className={styles.buttonsCont}>
        <button
          className={currentPage > 0 ? styles.back : styles.disabled}
          onClick={prevPage}
        >
          Back
        </button>
        <button
          className={currentPage === 50 ? styles.disabled : styles.next}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
