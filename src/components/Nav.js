import logo from "../assets/logo.png";
import styles from "../assets/css/nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ data, dataSetter }) {
  const [searchValue, setSearchValue] = useState("");
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

  function searchHandler(e) {
    setSearchValue(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
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
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Pokémon"
          value={searchValue}
          onChange={searchHandler}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
      <ul className={styles.typesCont}>{typesBtns}</ul>
      <Link className={styles.about} to="/about">
        About
      </Link>
    </div>
  );
}

export default Nav;
