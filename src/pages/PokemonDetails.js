import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../assets/css/pokemonDetails.module.css";
import Type from "../components/Type";
import uniqid from "uniqid";

function PokemonDetails({ data }) {
  const [indivData, setIndivData] = useState(null);
  const [formattedData, setFormattedData] = useState(null);
  const { name } = useParams();
  const [pokemon] = data.filter((poke) => poke.name === name);
  const renderTypes = pokemon.type.map((t) => {
    return <Type type={t} key={uniqid()} />;
  });

  const getData = async () => {
    const res = await fetch(pokemon.species);
    const d = await res.json();
    return setIndivData(d);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (indivData) {
      const formatted = {
        captureRate: indivData["capture_rate"],
        bio: indivData["flavor_text_entries"].filter(
          (entry) => entry.language.name === "en"
        )[0]["flavor_text"],
        cat: indivData.genera[7].genus,
        habitat: formatName(indivData.habitat.name),
        stats: pokemon.stats,
        sprite: pokemon.sprite,
        name: pokemon.name,
      };
      setFormattedData(formatted);
    }
  }, [indivData]);

  const formatName = (name) => {
    const firstLetter = name.split("")[0].toUpperCase();
    const restOfWord = name.split("").slice(1).join("");
    const result = firstLetter + restOfWord;
    return result;
  };

  return (
    <div className={styles.body}>
      {formattedData ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.name}>{formattedData.name}</h1>
            <p className={styles.bio}>{formattedData.bio}</p>
            <h2 className={styles.statsTitle}>Base Stats</h2>
            <ul className={styles.stats}>
              <li
                style={{ backgroundColor: "#FF5959" }}
                className={styles.statsItem}
              >
                HP: {formattedData.stats.hp}
              </li>
              <li
                style={{ backgroundColor: "#F5AC77" }}
                className={styles.statsItem}
              >
                Atk: {formattedData.stats.attack}
              </li>
              <li
                style={{ backgroundColor: "#FBE078" }}
                className={styles.statsItem}
              >
                Def: {formattedData.stats.defense}
              </li>
              <li
                style={{ backgroundColor: "#9EB7F5" }}
                className={styles.statsItem}
              >
                Sp. Atk: {formattedData.stats.spAttack}
              </li>
              <li
                style={{ backgroundColor: "#A7DB8D" }}
                className={styles.statsItem}
              >
                Sp. Def: {formattedData.stats.spDefense}
              </li>
              <li
                style={{ backgroundColor: "#FA92B2" }}
                className={styles.statsItem}
              >
                Speed: {formattedData.stats.speed}
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div
              style={{ backgroundImage: `url(${formattedData.sprite})` }}
              className={styles.sprite}
            ></div>
            <div className={styles.types}>{renderTypes}</div>
            <div className={styles.cat}>{formattedData.cat}</div>
            <div className={styles.habitat}>
              Habitat: {formattedData.habitat}
            </div>

            <div className={styles.capRate}>
              Capture Rate: {formattedData.captureRate}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PokemonDetails;
