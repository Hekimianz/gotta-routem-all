import logo from "../assets/logo.png";

import styles from "../assets/css/home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gotta Route 'em All</h1>
      <img
        src={logo}
        className={styles.logo}
        alt="react logo with pokeball in middle"
      />
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Pokémon"
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
      <a className={styles.about} href="/about">
        About
      </a>
    </div>
  );
}

export default Home;
