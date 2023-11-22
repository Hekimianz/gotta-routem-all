import styles from "../assets/css/card.module.css";

function Card({ img, name, type, cat, num }) {
  return (
    <div className={styles.container}>
      <img src={img} alt="sprite" className={styles.sprite} />
      <h1 className={styles.name}>{name}</h1>
      <span className={styles.type}>Type: {type}</span>
      <span className={styles.category}>{`${cat} Pokémon`}</span>
      <span className={styles.number}>#{num}</span>
    </div>
  );
}

export default Card;
