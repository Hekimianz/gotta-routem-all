import logo from "../assets/logo.png";
import styles from "../assets/css/nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ rawData, rawDataSetter, fetchRawData }) {
  const [searchValue, setSearchValue] = useState("");

  function searchHandler(e) {
    setSearchValue(e.target.value);
    if (!searchValue || searchValue === "") {
      return fetchRawData();
    } else {
      const results = rawData.filter((entry) =>
        entry.name.includes(searchValue.toLowerCase())
      );
      rawDataSetter(results);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (searchValue === "") {
      return fetchRawData();
    }
  }

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
          value={searchValue}
          onChange={searchHandler}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
      <Link className={styles.about} to="/about">
        About
      </Link>
    </div>
  );
}

export default Nav;
