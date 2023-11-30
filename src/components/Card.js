import styles from "../assets/css/card.module.css";
import { useNavigate } from "react-router-dom";
import Type from "./Type";
import uniqid from "uniqid";

function Card({ img, name, type, num }) {
  const navigate = useNavigate();
  function pokemonClickHandler() {
    navigate(`/details/${name}`);
  }

  const renderTypes = type.map((t) => {
    return <Type type={t} key={uniqid()} />;
  });

  let color1 = "";
  let color2 = "";
  switch (type[0]) {
    case "Normal":
      color1 = "#FFF6E0";
      break;
    case "Bug":
      color1 = "#EBFF14";
      break;
    case "Dark":
      color1 = "#FFC894";
      break;
    case "Dragon":
      color1 = "#907AFF";
      break;
    case "Electric":
      color1 = "#FFEC08";
      break;
    case "Fairy":
      color1 = "#FFC0FE";
      break;
    case "Fighting":
      color1 = "#FF5D38";
      break;
    case "Fire":
      color1 = "#D62700";
      break;
    case "Flying":
      color1 = "#9CFFFF";
      break;
    case "Ghost":
      color1 = "#837DFF";
      break;
    case "Grass":
      color1 = "#70FF4D";
      break;
    case "Ground":
      color1 = "#FFD561";
      break;
    case "Ice":
      color1 = "#9CF1FF";
      break;
    case "Poison":
      color1 = "#DB29FB";
      break;
    case "Psychic":
      color1 = "#FF4D74";
      break;
    case "Rock":
      color1 = "#FFD469";
      break;
    case "Steel":
      color1 = "#E4E3FF";
      break;
    case "Water":
      color1 = "#0F87FF";
      break;
    default:
      break;
  }
  switch (type[1]) {
    case "Normal":
      color2 = "#FFF6E0";
      break;
    case "Bug":
      color2 = "#EBFF14";
      break;
    case "Dark":
      color2 = "#FFC894";
      break;
    case "Dragon":
      color2 = "#907AFF";
      break;
    case "Electric":
      color2 = "#FFEC08";
      break;
    case "Fairy":
      color2 = "#FFC0FE";
      break;
    case "Fighting":
      color2 = "#FF5D38";
      break;
    case "Fire":
      color2 = "#D62700";
      break;
    case "Flying":
      color2 = "#9CFFFF";
      break;
    case "Ghost":
      color2 = "#837DFF";
      break;
    case "Grass":
      color2 = "#70FF4D";
      break;
    case "Ground":
      color2 = "#FFD561";
      break;
    case "Ice":
      color2 = "#9CF1FF";
      break;
    case "Poison":
      color2 = "#DB29FB";
      break;
    case "Psychic":
      color2 = "#FF4D74";
      break;
    case "Rock":
      color2 = "#FFD469";
      break;
    case "Steel":
      color2 = "#E4E3FF";
      break;
    case "Water":
      color2 = "#0F87FF";
      break;
    default:
      break;
  }
  const styleObjTwoColor = {
    background: `linear-gradient(45deg, ${color1} 49%, ${color2} 51%)`,
  };

  const styleObjOneColor = {
    background: color1,
  };

  return (
    <div
      style={type[1] ? styleObjTwoColor : styleObjOneColor}
      className={styles.container}
      onClick={pokemonClickHandler}
    >
      <img src={img} alt="sprite" className={styles.sprite} />
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.types}>{renderTypes}</div>
      <span className={styles.number}>#{num}</span>
    </div>
  );
}

export default Card;
