import logo from "../assets/logo.png";
import styles from "../assets/css/nav.module.css";

function Nav() {
  const types = ["Fire", "Water", "Plant"];
  function defineStyle(type) {
    switch (type) {
      case "Fire":
        return styles.fire;
      case "Water":
        return styles.water;
      case "Plant":
        return styles.plant;
      default:
        break;
    }
  }
  const typesBtns = types.map((type) => {
    return (
      <li className={defineStyle(type)} key={type}>
        {type}
      </li>
    );
  });
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
      <ul className={styles.typesCont}>{typesBtns}</ul>
      <a className={styles.about} href="/about">
        About
      </a>
    </div>
  );
}

export default Nav;
