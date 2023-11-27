import styles from "../assets/css/card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ img, name, type, cat, num }) {
  const navigate = useNavigate();
  function pokemonClickHandler() {
    navigate(`/details/${name}`);
  }
  return (
    <div className={styles.container} onClick={pokemonClickHandler}>
      <img src={img} alt="sprite" className={styles.sprite} />
      <h1 className={styles.name}>{name}</h1>
      <span className={styles.type}>Type: {type}</span>
      <span className={styles.category}>{`${cat} Pokémon`}</span>
      <span className={styles.number}>#{num}</span>
    </div>
  );
}

export default Card;
