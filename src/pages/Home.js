import styles from "../assets/css/home.module.css";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Home({ data, dataSetter, pageSetter, currentPage }) {
  const [cards, setCards] = useState([]);
  const [pageInput, setPageInput] = useState(1);

  useEffect(() => {
    if (data) {
      const sortedCards = [].concat(data).sort((a, b) => a.number - b.number);

      setCards(
        sortedCards.map((pokemon) => {
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
    }
  }, [data]);

  function nextPage() {
    if (currentPage < 50) {
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

  function pageInputHandler(e) {
    if (e.target.value < 51 && e.target.value >= 0) {
      setPageInput(e.target.value);
    }
  }

  function goToPage(e) {
    e.preventDefault();
    if (pageInput > 0) {
      pageSetter(pageInput - 1);
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
      <Nav data={data} dataSetter={dataSetter} />
      <div className={styles.cardsCont}>{cards}</div>
      <div className={styles.buttonsCont}>
        <button
          className={currentPage > 0 ? styles.back : styles.disabled}
          onClick={prevPage}
        >
          Back
        </button>
        <form onSubmit={goToPage}>
          <input
            className={styles.pageSearch}
            type="number"
            placeholder="Enter page #"
            value={pageInput}
            onChange={pageInputHandler}
          />
          <button className={styles.go}>Go!</button>
        </form>
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
