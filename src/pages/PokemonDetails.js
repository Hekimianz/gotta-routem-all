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
        bio: indivData["flavor_text_entries"][0]["flavor_text"],
        cat: indivData.genera[7].genus,
        habitat: indivData.habitat.name,
        weight: pokemon.weight,
        height: pokemon.height,
        stats: pokemon.stats,
        sprite: pokemon.sprite,
      };
      setFormattedData(formatted);
    }
  }, [indivData]);

  console.log(formattedData);

  return (
    <div className={styles.body}>
      <div className={styles.container}></div>
    </div>
  );
}

export default PokemonDetails;
